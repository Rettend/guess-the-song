// // Window leave confirmation
// window.onbeforeunload = function (e) {
//     return "야~ 무슨 생각을 하고 있니? ";
// };

let songsEasy = [
    ["ACDC", "Highway to Hell"],
    ["Avicii", "The nights"],
    ["Ed Sheeran", "Bad Habits"],
    ["The Rolling Stones", "Paint It, Black"],
    ["The White Stripes", "Seven Nation Army"],
    ["Imagine Dragons", "Whatever It Takes"],
    ["BTS", "Dynamite"],
    ["Queen", "Under Pressure"],
    ["Queen", "Another One Bites the Dust"],
    ["Rag'n'Bone Man", "Human"],
    ["Adele", "Rolling in the Deep"],
    ["Panic! At The Disco", "High Hopes"],
    ["Red Hot Chili Peppers", "Dark Necessities"],
]

let songsHard = [
    ["Eric Clapton", "Change The World"],
    ["Hanson", "MMMBop"],
    ["KALEO", "Broken Bones"],
    ["David Bowie", "Starman"],
    ["Mountain", "Mississippi Queen"],
    ["Ozzy Osbourne", "Crazy Train"],
    ["Imagine Dragons", "One Day"],
    ["Electric Light Orchestra (ELO)", "Mr. Blue Sky"],
    ["Coldplay ft. BTS", "My Universe"],
    ["Emberek", "Forog a Föld"],
    ["Dire Straits", "Sultans Of Swing"],
    ["SHAUN ft. Conor Maynard", "Way Back Home"],
    ["Jackson Browne", "Running on Empty"],
    ["Paul Simon ft. Garfunkel", "The Sound of Silence"],
    ["Bag Raiders", "Shooting Stars"],
    ["SABATON", "Stormtroopers"],
    ["Sigala ft. Ella Eyre, Meghan Trainor", "Just Got Paid"],
    ["K'NAAN", "Wavin' Flag"],
]

let songsExtreme = [
    ["TheFatRat", "Unity"],
    ["Harley Poe", "Eat Shit and Die"],
    ["ALESTORM", "Treasure Chest Party Quest"],
    ["Anthrax", "Got The Time"],
    ["Cypress Hill", "Lowrider"],
    ["The Dead South", "In Hell I'll Be In Good Company"],
    ["Chumbawamba", "Tubthumping"],
    ["JUNNY", "MOVIE"],
    ["ACDC", "Fire Your Guns"],
    ["Yunsae", "Warm Puppy"],
    ["Bomba Estéreo", "Soy Yo"],
    ["Rusted Root", "Send Me On My Way"],
    ["League of Legends ft. Jasmine Clarke", "Seraphine"],
    ["La Coka Nostra ft. Snoop Dogg", "Bang Bang"],
    ["Yogscast (Lewis & Simon)", "Diggy Diggy Hole"],
    ["Jamiroquai", "Virtual Insanity"],
    ["Baha Men", "Rat Race"],
    ["IU ft. SUGA", "eight"],
]

const x = document.getElementById("audio");
const songArtist = document.getElementById("songArtist");
const songTitle = document.getElementById("songTitle");
const logo = document.getElementById("logo");
const result = document.getElementById("result");
const osztály = document.getElementById("osztály");
const cDifficulty = document.getElementById("cDifficulty");
const cDuration = document.getElementById("cDuration");
const endModal = document.getElementById("endModal");
const endArtits = document.getElementById("endArtits");
const endTitle = document.getElementById("endTitle");

const easyLeft = document.getElementById("easyLeft");
easyLeft.innerHTML = songsEasy.length;
const hardLeft = document.getElementById("hardLeft");
hardLeft.innerHTML = songsHard.length;
const extremeLeft = document.getElementById("extremeLeft");
extremeLeft.innerHTML = songsExtreme.length;


// Format: "artist;title"

var aDifficulty = null;
var song = null;
var aOsztály = null;

function newSong(difficulty) {
    aOsztály = osztály.value;
    if (aOsztály == "") {
        alert("Nincs megadva osztály!");
        return;
    }
    else {
        aDifficulty = difficulty;
        cDifficulty.innerHTML = difficulty;
        if (aDifficulty == 1) {
            const random = Math.floor(Math.random() * songsEasy.length);
            song = songsEasy[random];
            songsEasy = songsEasy.filter(x => x !== song);
            easyLeft.innerHTML = songsEasy.length;
        }
        else if (aDifficulty == 3) {
            const random = Math.floor(Math.random() * songsHard.length);
            song = songsHard[random];
            songsHard = songsHard.filter(x => x !== song);
            hardLeft.innerHTML = songsHard.length;
        }
        else if (aDifficulty == 5) {
            const random = Math.floor(Math.random() * songsExtreme.length);
            song = songsExtreme[random];
            songsExtreme = songsExtreme.filter(x => x !== song);
            extremeLeft.innerHTML = songsExtreme.length;
        }
        if (songsEasy.length == 0 && songsHard.length == 0 && songsExtreme.length == 0) {
            alert("조심하세요!!!!!\n그들은 저에게 페이지를 새로고침하라고 했어요..\nNincs több zene!");
            return;
        }
        if (song == null) {
            alert("Már nincs hátralévő zene ebben a nehézségben!!");
            return;
        }
        else {
            songArtist.innerHTML = song[0];
            songTitle.innerHTML = song[1];
        }
    }
}

var aDuration = 0;

function playSong(duration) {
    if (song == null) {
        alert("Nincs kiválasztva zene!");
        return;
    }
    else {
        aDuration = duration;
        cDuration.innerHTML = duration;
        x.src = "songs/" + song[0] + ";" + song[1] + ";" + duration + ".mp3";
        x.play();
    }
}

var aBaseScore = 0;

function setBaseScore(baseScore) {
    if (aDuration == 0) {
        alert("Nem volt lejátszva zene!");
        return;
    }
    else {
        aBaseScore = baseScore;
    }
}

function end(state) {
    var score = 0;
    
    if (aBaseScore == 0 || aDuration == 0) {
        alert("Nincs megadva pontszám!");
        return;
    }
    else {
        if (state == 0 && song != null && aOsztály != null) {
            score = 0;
        }
        else if (state == 1 && song != null && aOsztály != null) {
            score = aBaseScore * aDifficulty;
        }
    }
    var row = result.insertRow(result.rows.length);
    var cell0 = row.insertCell(0);
    cell0.innerHTML = aOsztály;
    var cell1 = row.insertCell(1);
    cell1.innerHTML = score;
    var cell2 = row.insertCell(2);
    cell2.innerHTML = song[0] + " - " + song[1];
    var cell3 = row.insertCell(3);
    cell3.innerHTML = aDifficulty;
    aBaseScore = 0;
    aDuration = 0;
    cDuration.innerHTML = 0;

    endModal.style.display = "block";
    endArtist.innerHTML = song[0];
    endTitle.innerHTML = song[1];
    document.body.style.overflowY = "hidden";
    window.scrollTo(0, 0);
}

function celebrate() {
    x.src = "songs/" + song[0] + ";" + song[1] + ";" + 15 + ".mp3";
    x.play();
}

function closeModal() {
    endModal.style.display = "none";
    document.body.style.overflowY = "scroll";
}




// window.onload = function() {
  
//     var file = document.getElementById("thefile");
//     var audio = document.getElementById("audio");
    
//     file.onchange = function() {
//       var files = this.files;
//       audio.src = URL.createObjectURL(files[0]);
//       audio.load();
//       audio.play();
//       var context = new AudioContext();
//       var src = context.createMediaElementSource(audio);
//       var analyser = context.createAnalyser();
  
//       var canvas = document.getElementById("canvas");
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       var ctx = canvas.getContext("2d");
  
//       src.connect(analyser);
//       analyser.connect(context.destination);
  
//       analyser.fftSize = 256;
  
//       var bufferLength = analyser.frequencyBinCount;
//       console.log(bufferLength);
  
//       var dataArray = new Uint8Array(bufferLength);
  
//       var WIDTH = canvas.width;
//       var HEIGHT = canvas.height;
  
//       var barWidth = (WIDTH / bufferLength) * 2.5;
//       var barHeight;
//       var x = 0;
  
//       function renderFrame() {
//         requestAnimationFrame(renderFrame);
  
//         x = 0;
  
//         analyser.getByteFrequencyData(dataArray);
  
//         ctx.fillStyle = "#000";
//         ctx.fillRect(0, 0, WIDTH, HEIGHT);
  
//         for (var i = 0; i < bufferLength; i++) {
//           barHeight = dataArray[i];
          
//           var r = barHeight + (25 * (i/bufferLength));
//           var g = 250 * (i/bufferLength);
//           var b = 50;
  
//           ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
//           ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
  
//           x += barWidth + 1;
//         }
//       }
  
//       audio.play();
//       renderFrame();
//     };
//   };