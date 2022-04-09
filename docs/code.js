// Window leave confirmation
// window.onbeforeunload = function (e) {
//     return "야~ 무슨 생각을 하고 있니? ";
// };

const songsEasy = [
    ["ACDC", "Highway to Hell"],
    ["Avicii", "The nights"],
    ["Ed Sheeran", "Bad Habits"],
]

const songsHard = [
    ["Hanson", "MMMBop"],
    ["KALEO", "Broken Bones"],
    ["David Bowie", "Starman"],
    ["Mountain", "Mississippi Queen"],
]

const songsExtreme = [
    ["Harley Poe", "Eat Shit and Die"],
    ["ALESTORM", "Treasure Chest Party Quest"],
    ["Anthrax", "Got The Time"],
    ["Cypress Hill", "Lowrider"],
    ["The Dead South", "In Hell I'll Be In Good Company"],
]

const x = document.getElementById("audio");
const songArtist = document.getElementById("songArtist");
const songTitle = document.getElementById("songTitle");
const logo = document.getElementById("logo");

// Format: "artist;title"

var aDifficulty = null;

function setDifficulty(difficulty) {
    aDifficulty = difficulty;
    console.log(aDifficulty);
}

var song = null;

function newSong() {
    if (aDifficulty == 1) {
        const random = Math.floor(Math.random() * songsEasy.length);
        song = songsEasy[random];
    }
    else if (aDifficulty == 2) {
        const random = Math.floor(Math.random() * songsHard.length);
        song = songsHard[random];
    }
    else if (aDifficulty == 3) {
        const random = Math.floor(Math.random() * songsExtreme.length);
        song = songsExtreme[random];
    }

    if (song == null) {
        alert("조심하세요!!!!!!\nVálassz egy nehézséget!");
        return;
    }
    else {
        console.log(song);

        songArtist.innerHTML = song[0];
        songTitle.innerHTML = song[1];
    }
}

function playSong(duration) {
    x.src = "songs/" + song[0] + ";" + song[1] + ";" + duration + ".mp3";
    x.play();
}
