// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

// var SpotifyWebApi = require('spotify-web-api-node')

// var spotifyApi = new SpotifyWebApi({
//     clientId: "b40a22e19ef94d568ab9361c3a2e6ce1",
//     clientSecret: "69fe0a5fad9f4999a009f6bcd8902f8d",
//     redirectUri: "http://127.0.0.1:5500/"
// });

// spotifyApi.setAccessToken("BQCTZpfiBKGiMKhNTl2e-4lTjKjNg67BLr6bd5S8etbl8dHXBEIpitMm-X9JhHcDFIx4YuhdveaAW6HU0hoaiIabWFPFNtik3fndSSmAW9l2dZo59qlUYHTBJSk1NOQ335TpdSyyq6jPBSAL1GBu2v0CwODFtDpdSRCo5GeUgttGAA");


// function getTrack() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let x = spotifyApi.searchTracks('track:Demons artist:Imagine Dragons');
//       console.log("Loop Done");
//       resolve(x)
//     }, 2000);
//   })
// }

// async function resolving() {
//   console.log("Before Call");
//   const result = await getTrack();
//   console.log(JSON.stringify(result));
// }

let guessNumber = 1;
let length = 1;
let song = "";
let artist = "";
let gotIt = false;
let songsList = []
let all = ""

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function getSong() {
  let index = Math.floor(Math.random() * 100);
  songsList = ['7 Rings - Ariana Grande.mp3', 'Airplanes - B.o.B Featuring Hayley Williams.mp3', 'All About That Bass - Meghan Trainor.mp3', 'All Of Me - John Legend.mp3', 'Bad Guy - Billie Eilish.mp3', 'Bad Romance - Lady Gaga.mp3', 'Better Now - Post Malone.mp3', 'Blank Space - Taylor Swift.mp3', 'Blurred Lines - Robin Thicke Featuring T.I. + Pharrell.mp3', 'Bodak Yellow (Money Moves) - Cardi B.mp3', 'Break Your Heart - Taio Cruz Featuring Ludacris.mp3', 'California Gurls - Katy Perry Featuring Snoop Dogg.mp3', 'Call Me Maybe - Carly Rae Jepsen.mp3', "Can't Feel My Face - The Weeknd.mp3", "Can't Hold Us - Macklemore & Ryan Lewis Featuring Ray Dalton.mp3", "Can't Stop The Feeling! - Justin Timberlake.mp3", 'Cheap Thrills - Sia Featuring Sean Paul.mp3', 'Cheerleader - OMI.mp3', 'Closer - The Chainsmokers Featuring Halsey.mp3', 'Counting Stars - OneRepublic.mp3', 'Dark Horse - Katy Perry Featuring Juicy J.mp3', 'Despacito - Luis Fonsi & Daddy Yankee Featuring Justin Bieber.mp3', "Don't Let Me Down - The Chainsmokers Featuring Daya.mp3", 'Dynamite - Taio Cruz.mp3', 'E.T. - Katy Perry Featuring Kanye West.mp3', 'Fancy - Iggy Azalea Featuring Charli XCX.mp3', 'Firework - Katy Perry.mp3', 'Fuck You! (Forget You) - CeeLo Green.mp3', 'Girls Like You - Maroon 5 Featuring Cardi B.mp3', 'Give Me Everything - Pitbull Featuring Ne-Yo, Afrojack & Nayer.mp3', "God's Plan - Drake.mp3", 'Grenade - Bruno Mars.mp3', 'Happier - Marshmello & Bastille.mp3', 'Happy - Pharrell Williams.mp3', 'Havana - Camila Cabello Featuring Young Thug.mp3', 'Heathens - twenty one pilots.mp3', 'Hello - Adele.mp3', 'Hey, Soul Sister - Train.mp3', 'Ho Hey - The Lumineers.mp3', 'Hotline Bling - Drake.mp3',
   'I Like It - Cardi B, Bad Bunny & J Balvin.mp3', 'In My Feelings - Drake.mp3', 'Just The Way You Are - Bruno Mars.mp3', 'Justin Bieber - What Do You Mean (Lyrics).mp4', 'Locked Out Of Heaven - Bruno Mars.mp3', 'Love The Way You Lie - Eminem Featuring Rihanna.mp3', 'Love Yourself - Justin Bieber.mp3', 'Lucid Dreams - Juice WRLD.mp3', 'Meant To Be - Bebe Rexha & Florida Georgia Line.mp3', 'Moves Like Jagger - Maroon 5 Featuring Christina Aguilera.mp3', 'Need You Now - Lady Antebellum.mp3', 'Nice For What - Drake.mp3', 'Old Town Road - Lil Nas X Featuring Billy Ray Cyrus.mp3', 'OMG - Usher Featuring will.i.am.mp3', 'One Dance - Drake Featuring WizKid & Kyla.mp3', 'One More Night - Maroon 5.mp3', 'Panda - Desiigner.mp3', 'Party Rock Anthem - LMFAO Featuring Lauren Bennett & GoonRock.mp3', 'Payphone - Maroon 5 Featuring Wiz Khalifa.mp3', 'Perfect - Ed Sheeran.mp3', 'Post Malone - Sunflower (Lyrics) ft Swae Lee (Spider-Man Into the Spider-Verse).mp4', 'Psycho - Post Malone Featuring Ty Dolla $ign.mp3', 'Radioactive - Imagine Dragons.mp3', 'Roar - Katy Perry.mp3', 'Rockstar - Post Malone Featuring 21 Savage.mp3', 'Rolling In The Deep - Adele.mp3', 'Royals - Lorde.mp3', 'Rude - MAGIC!.mp3', 'See You Again - Wiz Khalifa Featuring Charlie Puth.mp3', 'Sexy And I Know It - LMFAO.mp3', 'Shake It Off - Taylor Swift.mp3', 'Shape Of You - Ed Sheeran.mp3', 'Sicko Mode - Travis Scott.mp3', 'Some Nights - fun..mp3', 'Somebody That I Used To Know - Gotye Featuring Kimbra.mp3', 'Someone Like You - Adele.mp3', 'Sorry - Justin Bieber.mp3', 'Stay With Me - Sam Smith.mp3', "Stronger (What Doesn't Kill You) - Kelly Clarkson.mp3", 'Sucker - Jonas Brothers.mp3', 'Sugar - Maroon 5.mp3', 'Super Bass - Nicki Minaj.mp3', 'Take Me To Church - Hozier.mp3', 'Thank U, Next - Ariana Grande.mp3', "That's What I Like - Bruno Mars.mp3", 'The Hills - The Weeknd.mp3', 'Thinking Out Loud - Ed Sheeran.mp3', 'Thrift Shop - Macklemore & Ryan Lewis Featuring Wanz.mp3', 'TiK ToK - Ke$ha.mp3', 'Timber - Pitbull Featuring Ke$ha.mp3', 'Trap Queen - Fetty Wap.mp3', 'Uptown Funk! - Mark Ronson Featuring Bruno Mars.mp3', 'Wake Me Up! - Avicii.mp3', 'Watch Me - Silento.mp3', 'We Are Young - fun. Featuring Janelle Monae.mp3', 'We Found Love - Rihanna Featuring Calvin Harris.mp3', 'Without Me - Halsey.mp3', 'Work - Rihanna Featuring Drake.mp3', 'Wow. - Post Malone.mp3', 'Wrecking Ball - Miley Cyrus.mp3']
  if (index > songsList.length) {
    index = 0;
  }
  all = songsList[index]
  info = songsList[index].split("-");
  song = info[0].trim();
  artist = info[1].trim();
  artist = artist.replace(".mp3", "")
  
}

function skip() {
  if (gotIt) {
    return;
  }
  console.log("Skip")
  guessUpdater("Skipped");
}

function guessUpdater(reason) {
  guessNumber += 1;

  if (guessNumber == 2) {
    document.getElementById("guess1").innerHTML = reason;
    length = 2;
  }
  else if (guessNumber == 3) {
    document.getElementById("guess2").innerHTML = reason;
    length = 3;
  }
  else if (guessNumber == 4) {
    document.getElementById("guess3").innerHTML = reason;
    length = 5;
  }
  else if (guessNumber == 5) {
    document.getElementById("guess4").innerHTML = reason;
    length = 10;
  }
  else if (guessNumber == 6) {
    document.getElementById("guess5").innerHTML = reason;
    length = 18;
  }
  else {
    document.getElementById("guess6").innerHTML = reason;
    document.getElementById("title").innerHTML = `The Song Was ${song} by ${artist}`
    length = 30;
  }
  console.log(length);
}

function check() {
  if (gotIt) {
    return;
  }
  x = document.getElementById("guess").value;
  xall = x + ".mp3";

  if (all == xall) {
    gotIt = true;
    document.getElementById("title").innerHTML = "You Got The Song!";
    guessUpdater(x);
    length = 30;
    play();
  }
  else {
    guessUpdater(x);
  }
  document.getElementById("guess").value = "";
}

async function play() {
  console.log("Play");
  var audio = new Audio()
  // audio.src = "songs/Imagine Dragons -Radioactive.mp3";
  console.log(song)
  audio.src = `songs/${song} - ${artist}.mp3`
  audio.play();
  await sleep(length*1000);
  audio.pause()
}

function addingFilterList() {
  var uList = document.getElementById("myUL");
  for (var i = 0; i < songsList.length; i++) {
    var a = document.createElement("a");
    var newItem = document.createElement("li");
    a.textContent = songsList[i].replace(".mp3", "");
    a.setAttribute("href", "#");
    a.setAttribute("onclick", `setGuess("${songsList[i].replace(".mp3", "")}")`)
    newItem.appendChild(a);
    uList.appendChild(newItem)
  }
}

function setGuess(song) {
  document.getElementById("guess").value = song;
}

function guessCorrector() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("guess");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    if (input.value.length < 3 || gotIt == true) {
      li[i].style.display = "none"
    }
    else {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1 ) {
        li[i].style.display = "";
      }
      else {
        li[i].style.display = "none"
      }
    }
  }
}



