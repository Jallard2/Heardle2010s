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

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function getSong() {
  // let index = Math.floor(Math.random() * 11);
  let index = 0;
  songsList = ['Imagine Dragons - Demons.mp3', 'Imagine Dragons - Radioactive.mp3']
  if (index > songsList.length) {
    index = 0;
  }
  info = songsList[index].split("-");
  song = info[1].trim();
  artist = info[0].trim();
  song = song.replace(".mp3", "")
  
}

function skip() {
  console.log("Skip")
  guessUpdater();
}

function guessUpdater() {
  if (gotIt) {
    return;
  }
  guessNumber += 1;
  console.log(guessNumber)

  if (guessNumber == 2) {
    length = 2;
  }
  else if (guessNumber == 3) {
    length = 3;
  }
  else if (guessNumber == 4) {
    length = 5;
  }
  else if (guessNumber == 5) {
    length = 10;
  }
  else if (guessNumber == 6) {
    length = 18;
  }
  else {
    document.getElementById("title").innerHTML = `The Song Was ${song} by ${artist}`
    length = 30;
  }
  console.log(length);
}

function check() {
  console.log("Check")
  getGuess();
  document.getElementById("guess").value = "";
  guessUpdater();
}

async function play() {
  console.log("Play");
  var audio = new Audio()
  // audio.src = "songs/Imagine Dragons -Radioactive.mp3";
  console.log(song)
  audio.src = `songs/${artist}-${song}.mp3`
  audio.play();
  await sleep(length*1000);
  audio.pause()
}


function getGuess() {
  let x = document.getElementById("guess").value;
  console.log(x);
  console.log(`${song} by ${artist}`);
  if (x == `${song} by ${artist}` || x == `${song} By ${artist}` || x == `${song} - ${artist}`) {
    gotIt = true;
    document.getElementById("title").innerHTML = "You Got It!"
    length = 30;

  }
}


