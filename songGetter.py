import aiohttp
import os
import asyncio
from bs4 import BeautifulSoup
import requests
from pytube import YouTube
from lxml import html
from pyyoutube import Api
from pydub import AudioSegment

class Songs():
    def __init__(self):
        self.api = Api(api_key = "AIzaSyCJz3EYWOZkUUKlIL_CCQW-19R1IDPw5tU")
        self.savePATH = r"C:\Users\Jacob\Desktop\2010s Heardle\Heardle2010s\songs"

    async def linksAsync(self):
        work_queue = asyncio.Queue()
        with open("listofSongs.txt", "r") as f:
            data = f.readlines()
        for line in data:
            line = line.replace("\n","") 
            await work_queue.put(line)
        
        await asyncio.gather (
            asyncio.create_task(self.getLinks(work_queue)),
            asyncio.create_task(self.getLinks(work_queue)),
            asyncio.create_task(self.getLinks(work_queue))
        )




    async def getLinks(self, work_queue):
        headers = {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac)",
            "Accept-Language": "en-US,en;q=0.9",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        }
        async with aiohttp.ClientSession(headers = headers) as session:
            while not work_queue.empty():
                original = await work_queue.get()
                url = original + " lyrics"
                r = self.api.search_by_keywords(q=url, search_type="video", count = 1)
                secondHalf = r.items[0].id.videoId
                newUrl = "https://www.youtube.com/watch?v=" + secondHalf
                yt = YouTube(newUrl)
                video = yt.streams.filter(only_audio=True).first()
                out_video = video.download(output_path = self.savePATH)
                new_file = self.savePATH + "/" + original + '.mp3'
                os.rename(out_video, new_file)
                print(yt.title + " has been downloaded")
                # print(fr"songs\{original}.mp3")
                # await asyncio.sleep(3)

                # try:
                #     sound = AudioSegment.from_file(fr"songs\{original}.mp3", "mp3")
                # except:
                #     sound = AudioSegment.from_file(fr"songs\{original}.mp3", format="mp3")
                # cutPoint = 30000
                # newSound = sound[:cutPoint]
                # newSound.export(self.savePATH + "/" + original + 'd.mp3', format="mp3")
                # print(yt.title + " has been shortened")


        

    def getSongNames(self):
        url = "https://www.billboard.com/charts/decade-end/hot-100/"
        html_content = requests.get(url).text
        soup = BeautifulSoup(html_content, "lxml")
        data = soup.find_all("li", {"class":"o-chart-results-list__item // lrv-u-flex-grow-1 lrv-u-flex lrv-u-flex-direction-column lrv-u-justify-content-center lrv-u-border-b-1 lrv-u-border-color-grey-light lrv-u-padding-l-2 lrv-u-padding-r-1 lrv-u-padding-l-1@mobile-max u-border-b-0@mobile-max"})

        finalList = []
        
        for i in data:
            i = i.get_text()
            i = i.strip().replace("\n", "").replace("\t\t\t\t\t", " - ")
            finalList.append(i)

        
        with open("listofSongs.txt", "w") as f:
            for i in finalList:
                f.write(i)
                f.write("\n")

songs = Songs()
asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
# asyncio.run(songs.downloadSongsSpecific())