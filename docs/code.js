// // Window leave confirmation
// window.onbeforeunload = function (e) {
//     return "";
// };

const songs = [
	{
		"artist": "ACDC",
		"song": "Highway to Hell",
		"lyrics": ["", "No stop signs, Speed limit, Nobody's gonna slow me down", "I'm on the highway to hell, Highway to hell, I'm on the highway to hell, Highway to hell"],
		"streamCount": 1010569617,
		"hasPlayed": false,
		"year": 1979
	}, {
		"artist": "Avicii",
		"song": "The nights",
		"lyrics": ["Once upon a younger year, When all our shadows disappeared, The animals...", "One day, my father, he told me \"Son, don't let it slip away \", When I was just a kid, I heard him say, \"When you get older your wild heart will...\"", "\"Live a life you will remember\", My father told me when I was just a child, \"These are the nights that never die\", My father told me"],
		"streamCount": 1116498715,
		"hasPlayed": false,
		"year": 2014
	}, {
		"artist": "Hanson",
		"song": "MMMBop",
		"lyrics": ["Oh, Oh oh", "Duba, Duba, Du, Yeah, MmmBop, Duba", "Yeah, Mmmbop, ba duba dop, Ba du bop, ba duba dop ba du, yeah, Mmmbop, ba duba dop, Ba du bop, ba duba dop ba"],
		"streamCount": 131552367,
		"hasPlayed": false,
		"year": 1997
	}, {
		"artist": "Harley Poe",
		"song": "Eat Shit and Die",
		"lyrics": ["She said I never completed, Any goals that I laid down, I hear the...", "I kinda find it so funny, Walking up to you now, I didn't plan this I swear it, But I dug a home for you in the ground", "Can you fly? Can you fly? Eat shit and die (Eat shit and die), Eat shit and die (Eat shit and die)"],
		"streamCount": 2328919,
		"hasPlayed": false,
		"year": 2019
	}, {
		"artist": "IU (ft. SUGA)",
		"song": "eight",
		"lyrics": ["So are you happy now? Finally happy", "Forever young, Oh oh oh, Forever, we young, Oh oh oh", "Urineun orenji taeyang arae, Geurimja eopsi hamkke chumeul chwo, Jeonghaejin ibyeol ttawineun eopseo, Areumdawotdeon geu gieogeseo manna"],
		"streamCount": 208700169,
		"hasPlayed": false,
		"year": 2020
	}, {
		"artist": "ACDC",
		"song": "For Those About to Rock",
		"lyrics": ["", "For a twenty-one gun salute, For those about to rock, fire, we salute you", "For those about to rock, we salute you, For those about to rock, we salute you, For those about to rock"],
		"streamCount": 88495681,
		"hasPlayed": false,
		"year": 1981
	}, {
		"artist": "ACDC",
		"song": "Fire Your Guns",
		"lyrics": ["", "You gotta fire your guns, Fire your guns", "Fire when she's going down, Fire then she make you drown, Fire then she blow you round, Yeah, you want some fun, Fire your guns, Fire your guns"],
		"streamCount": 33363311,
		"hasPlayed": false,
		"year": 1990
	}, {
		"artist": "ACDC",
		"song": "Thunderstruck",
		"lyrics": ["Ah ah ah, Thunder, Ah ah ah", "Sound of the drums, Beating in my heart, The thunder of guns, Yeah", "Thunderstruck, yeah, yeah, yeah, Thunderstruck, thunderstruck, Thunderstruck, whoa, baby, baby, Thunderstruck, you've been thunderstruck"],
		"streamCount": 963360129,
		"hasPlayed": false,
		"year": 1990
	}, {
		"artist": "Adele",
		"song": "Rolling in the Deep",
		"lyrics": ["See how I'll leave with every piece of you, Don't...", "The scars of your love remind me of us, They keep me thinking that we almost had it all, The scars...", "They leave me breathless, I can't help feeling, We could've had it all (you're gonna wish you), (Never had met me), Rolling in the deep, You had my heart inside"],
		"streamCount": 1154857443,
		"hasPlayed": false,
		"year": 2011
	}, {
		"artist": "Aerosmith",
		"song": "I Don't Want to Miss a Thing",
		"lyrics": ["Lying close to you, feeling your heart beating", "... you is a moment I treasure, Don't want to close my eyes", "...you baby, And I don't want to miss a thing, 'Cause even when I dream of you, The sweetest dream will never do, I'd still miss you baby, And I don't want to miss a thing"],
		"streamCount": 734623519,
		"hasPlayed": false,
		"year": 1998
	}, {
		"artist": "Alan Walker",
		"song": "Alone",
		"lyrics": ["Lost in your mind", "...night is not forever, At least we are together, I know I'm not alone, I know I'm not alone, Anywhere, whenever...", "I know I'm not alone, I'm not alone, I'm not alone, I'm not alone (I know I'm not alone), I'm not alone"],
		"streamCount": 572988157,
		"hasPlayed": false,
		"year": 2018
	}, {
		"artist": "Alessia Cara",
		"song": "Scars To Your Beautiful",
		"lyrics": ["Oh, she don't see, the light that's shining, Deeper than the eyes can find it", "But there's a hope that's waiting for you in the dark, You should know you're beautiful just the way you are, And you don't...", "You don't have to change a thing, The world could change its heart, No scars to your beautiful, We're stars and we're beautiful"],
		"streamCount": 1073250309,
		"hasPlayed": false,
		"year": 2016
	}, {
		"artist": "Bag Raiders",
		"song": "Shooting Stars",
		"lyrics": ["", "", "Gave my love to a shooting star, But she moves so fast, That I can't keep up, I'm chasing, I'm in love with a shooting star, But she..."],
		"streamCount": 298662760,
		"hasPlayed": false,
		"year": 2009
	}, {
		"artist": "Bomba Estéreo",
		"song": "Soy Yo",
		"lyrics": ["Tarap, tarap, Yo, tarap", "Y no te preocupes si no te aprueban, Cuando te critiquen, tú solo di, Soy yo", "Soy yo, Soy yo (soy, soy, soy, soy, soy, soy, soy), Soy yo (yo, yo, yo, yo, yo, yo, yo)"],
		"streamCount": 67267950,
		"hasPlayed": false,
		"year": 2015
	}, {
		"artist": "BTS",
		"song": "Dynamite",
		"lyrics": ["'Cause I-I-I'm in the stars tonight, So watch me bring the fire...", "...and set the night alight (hey), Shining through the city with a little funk and soul, So I'ma light it up like dynamite, whoa oh oh", "...Na-na-na, life is dynamite. Dy-na-na-na, na-na, na-na-na, na-na-na, life is dynamite. Shining through the city with a little funk and soul. So I'ma light it up like dynamite, whoa oh oh"],
		"streamCount": 1415259815,
		"hasPlayed": false,
		"year": 2020
	}, {
		"artist": "Calvin Harris (ft. Pharrel Williams, Katy Perry, Big Sean)",
		"song": "Feels",
		"lyrics": ["", "...catch feels, Feels with me, I'm your window shopper, sucker for your love, oh, I'm wearing your goggles", "The way you move it here (hey), Just wanna feel it from you (hey), Don't be afraid to catch feels (ha), Ride drop top and chase thrills (oh-oh-oh, oh), I know you..."],
		"streamCount": 917575369,
		"hasPlayed": false,
		"year": 2017
	}, {
		"artist": "Chumbawamba",
		"song": "Tubthumping",
		"lyrics": ["We'll be singing, I get knocked down, but I get up...", "He drinks a Whiskey drink, he drinks a Vodka drink, He drinks a Lager drink, he drinks a Cider drink, He sings the songs that remind him of the good times, He sings the songs that remind him of the better times, Oh...", "I get knocked down, but I get up again, You are never gonna keep me down, I get knocked down, but I get up again, You are never gonna keep me down, I get knocked down, but I get up again, You are never gonna keep me down, I get knocked down"],
		"streamCount": 142803214,
		"hasPlayed": false,
		"year": 1997
	}, {
		"artist": "Coldplay (ft. BTS)",
		"song": "My Universe",
		"lyrics": ["", "You (you), you are (you are) my universe, And I (I) just want (just want) to put you first", "My universe (doo-doo, doo-doo), My universe (doo-doo, doo-doo), (You make my world), You make my world light up inside"],
		"streamCount": 679681060,
		"hasPlayed": false,
		"year": 2021
	}, {
		"artist": "David Bowie",
		"song": "Starman",
		"lyrics": ["", "Didn't know what time it was, The lights were low, oh, oh", "There's a Starman waiting in the sky, He'd like to come and meet us, But he thinks he'd blow our minds, There's a Starman waiting in the sky"],
		"streamCount": 298368113,
		"hasPlayed": false,
		"year": 1972
	}, {
		"artist": "Dire Straits",
		"song": "Sultans Of Swing",
		"lyrics": ["", "Then the man he steps right up to the microphone, And says at last just as the time bell rings", "We are the Sultans, We are the Sultans of Swing"],
		"streamCount": 799561909,
		"hasPlayed": false,
		"year": 1978
	}, {
		"artist": "Ed Sheeran",
		"song": "Bad Habits",
		"lyrics": ["Ooh-ooh", "Fallin' over everything to reach the first time's spark, It started...", "Bad habits lead to wide eyes stare into space, And I know I'll lose control of the things that I say, Yeah, I was lookin' for a way out, now I can't escape, Nothin' happens after two, it's true, It's true, my bad habits lead to you"],
		"streamCount": 1182416851,
		"hasPlayed": false,
		"year": 2021
	}, {
		"artist": "Electric Light Orchestra (ELO)",
		"song": "Mr. Blue Sky",
		"lyrics": ["Hey you with the pretty face, Welcome to the human race", "Mr. Blue Sky please tell us why, You had to hide away for so long (so long), Where did we go wrong?", "Look around see what you do, Everybody smiles at you, Mr. Blue Sky, Blue Sky Blue Sky"],
		"streamCount": 694570384,
		"hasPlayed": false,
		"year": 1977
	}, {
		"artist": "Eminem (ft. Nate Dogg)",
		"song": "'Till I Collapse",
		"lyrics": ["'Cause sometimes you just feel tired, feel weak, And when you feel weak...", "'Till I collapse I'm spilling these raps long as you feel 'em, 'Till the day that I drop you'll never say that I'm not killing 'em, 'Cause when I am not, then I'ma stop penning 'em, And I am not...", "'Till the roof comes off, 'till the lights go out, 'Till my legs give out, can't shut my mouth, 'Till the smoke clears out, am I high? Perhaps, I'ma rip this shit, 'till my bone collapse, 'Till the roof comes off, 'till the lights go out, 'Till my legs give out, can't..."],
		"streamCount": 1381192368,
		"hasPlayed": false,
		"year": 2002
	}, {
		"artist": "Eminem",
		"song": "Without Me",
		"lyrics": ["I've created a monster, 'Cause nobody wants to see Marshall no more, They want Shady, I'm chopped liver", "Guess who's back, Back again, Shady's back, Tell a friend, Guess who's back, guess who's back", "...Debbie!, Now this looks like a job for me, So everybody, just follow me, 'Cause we need a little, controversy, 'Cause it feels so empty, without me, I said This looks like a job for me, So everybody, just follow me, 'Cause we need a little, controversy, 'Cause it feels..."],
		"streamCount": 1216316640,
		"hasPlayed": false,
		"year": 2002
	}, {
		"artist": "Eric Clapton",
		"song": "Change the World",
		"lyrics": ["If I can reach the stars", "Baby, if I could change the world", "It's only in my dreams, And I can change the world, I will be the sunlight in your universe"],
		"streamCount": 127932663,
		"hasPlayed": false,
		"year": 1999
	}, {
		"artist": "Guns 'N Roses",
		"song": "Paradise City",
		"lyrics": ["", "Why I'm here I can't quite remember, The surgeon general says it's hazardous to breathe, I'd have another cigarette but I can't see, Tell me who you're gonna believe, Take...", "Take me down to the paradise city, Where the grass is green and the girls are pretty, Take me home, yeah yeah, Take me down to the paradise city, Where the grass is green and the girls are pretty, Oh, won't you..."],
		"streamCount": 756532359,
		"hasPlayed": false,
		"year": 1987
	}, {
		"artist": "Imagine Dragons",
		"song": "Whatever It Takes",
		"lyrics": ["... for the fall of man, Everybody praying for the end of times, Everybody hoping they could be the one, I was born to run, I was born for this...", "Whip, whip, Run me like a racehorse, Pull me like a ripcord, Break me down and build me up, I wanna be the slip, slip, Word upon your lip, lip, Letter that", "Whatever it takes, 'Cause I love the adrenaline in my veins, I do whatever it takes, 'Cause I love how it feels when I break the chains, Whatever it takes..."],
		"streamCount": 885414935,
		"hasPlayed": false,
		"year": 2017
	}, {
		"artist": "Jackson Browne",
		"song": "Running on Empty",
		"lyrics": ["I don't know how to tell you all just how crazy this life feels", "... running up one-oh-one, I don't know where I'm running now, I'm just running on", "I'm just running on, Running on, running on empty, Running on, running blind, Running on, running into the sun, But I'm running behind"],
		"streamCount": 134108821,
		"hasPlayed": false,
		"year": 1997
	}, {
		"artist": "Jamiroquai",
		"song": "Virtual Insanity",
		"lyrics": ["Yeah, it's a wonder man can eat at all, When things are big that should be small", "...be, And nothing's gonna change the way we live, 'Cause we can always take, but never give, And now that things are changing for the worse, see, Whoa...", "And I just can't see that half of us immersed in sin, Is all we have to give these, Futures made of virtual insanity, now, Always seem to be governed by this love we have..."],
		"streamCount": 168873835,
		"hasPlayed": false,
		"year": 1996
	}, {
		"artist": "K'NAAN",
		"song": "Wavin' Flag",
		"lyrics": ["... around us, Staying forever young, Singing songs underneath the sun", "Oh-oh-oh", "When I get older I will be stronger, They'll call me freedom just like a wavin' flag, When I get older I will be stronger, They'll call me freedom just like a wavin' flag, So wave your flag, now wave your flag"],
		"streamCount": 124968039,
		"hasPlayed": false,
		"year": 2010
	}, {
		"artist": "KALEO",
		"song": "Broken Bones",
		"lyrics": ["The devil's going to make me a free man, The devil's going to set me free", "I went down, deep Texas, Mississippi state, Hoping things might go my way, For every hard-earned...", "...now, Ain't got no place to call a home, Only chains and broken bones, Ain't got no place to call a home, So come on Lord, what you waiting for?"],
		"streamCount": 66186321,
		"hasPlayed": false,
		"year": 2016
	}, {
		"artist": "Klaus Badelt (Pirates of the Caribbean)",
		"song": "He's a Pirate",
		"lyrics": ["", "", ""],
		"streamCount": 123930030,
		"hasPlayed": false,
		"year": 2003
	}, {
		"artist": "Marshmello (ft. Khalid)",
		"song": "Silence",
		"lyrics": ["Yeah, I'd rather be a lover than a fighter (fighter), 'Cause all my life, I've been fighting, Never...", "...and I've been quiet for too long, oh, I found peace in your violence, Can't tell me there's no point in trying", "...and I've been silent for too long, oh, I've been quiet for too long, oh, I've been quiet for too long, oh"],
		"streamCount": 1238834619,
		"hasPlayed": false,
		"year": 2017
	}, {
		"artist": "Panic! At The Disco",
		"song": "High Hopes",
		"lyrics": ["", "Mama said, It's uphill for oddities, Stranger crusaders, Ain't ever wannabes, The weird and the novelties, Don't ever change, We wanted everything", "Had to have high, high hopes for a living, Shooting for the stars when I couldn't make a killing, Didn't have a dime but I always had a vision, Always had high, high hopes, Had to have high, high hopes for a living, Didn't know how..."],
		"streamCount": 1250995128,
		"hasPlayed": false,
		"year": 2018
	}, {
		"artist": "Paul Simon (ft. Garfunkel)",
		"song": "The Sound of Silence",
		"lyrics": ["In restless dreams, I walked alone, Narrow streets...", "Hello darkness, my old friend, I've come to talk with you again", "When my eyes were stabbed by the flash of a neon light, That split the night, And touched the sound of silence"],
		"streamCount": 419961218,
		"hasPlayed": false,
		"year": 1964
	}, {
		"artist": "",
		"song": "",
		"lyrics": ["", "I knew that this was doomed from the get-go, You thought that it was special, special, But it was just...", "...let it go, Seasons change and our love went cold, Feed the flame 'cause we can't let it go, Run away, but we're running in circles, Run away..."],
		"streamCount": 1786112794,
		"hasPlayed": false,
		"year": 2019
	}, {
		"artist": "Queen",
		"song": "Another One Bites the Dust",
		"lyrics": ["", "...are you satisfied? How long can you stand the heat? Out of the doorway the bullets rip, To the sound of the beat, Look out! Another one...", "Another one bites the dust, Another one bites the dust, And another one gone, and another one gone, Another one bites the dust, Hey, I'm gonna get you, too, Another one bites the dust"],
		"streamCount": 1311527257,
		"hasPlayed": false,
		"year": 1980
	}, {
		"artist": "Queen",
		"song": "Under Pressure",
		"lyrics": ["Day day de mm hm, Da da da ba ba", "Pressure pushing down on me, Pressing down on you no man ask for, Under pressure", "This is our last dance, This is ourselves, Under pressure, Under pressure"],
		"streamCount": 0,
		"hasPlayed": false,
		"year": 1981
	}, {
		"artist": "Rag'n'Bone Man",
		"song": "Human",
		"lyrics": ["Don't ask my opinion, Don't ask me to lie, Then beg for forgiveness...", "I'm no prophet or Messiah, Should go looking somewhere higher...", "Oh, some people got the real problems, Some people out of luck, Some people think I can solve them, Lord heavens above, I'm only human after all..."],
		"streamCount": 707269818,
		"hasPlayed": false,
		"year": 2017
	}, {
		"artist": "Red Hot Chili Peppers",
		"song": "Dark Necessities",
		"lyrics": ["", "Stumble down to the parking lot, You got no time for the afterthought, They're like ice cream for an astronaut, Well that's me looking for weed", "Dark necessities are part of my design, Tell the world that I'm falling from the sky, Dark necessities are part of my design"],
		"streamCount": 355432917,
		"hasPlayed": false,
		"year": 2016
	}, {
		"artist": "Rusted Root",
		"song": "Send Me On My Way",
		"lyrics": ["", "On my way, on my way, On my way, on my way", "I would like to hold my little hand, And we will run, we will, we will crawl, Send me on my way (on my way), Send me on my way (on my way), Send me on my way (on my way)"],
		"streamCount": 339392386,
		"hasPlayed": false,
		"year": 1990
	}, {
		"artist": "SHAUN (ft. Conor Maynard)",
		"song": "Way Back Home",
		"lyrics": ["", "Remember when I told you, No matter where I go, I'll never leave your side, You will never be alone, Even when we go...", "Even when we're old, Remember that I told you, I'll find my way back home"],
		"streamCount": 274071562,
		"hasPlayed": false,
		"year": 2018
	}, {
		"artist": "Sigala (ft. Ella Eyre, Meghan Trainor)",
		"song": "Just Got Paid",
		"lyrics": ["I just got paid", "I should grow up some day 'cause I got bills to pay, I can't be waking up at someone else's place, I know I drink too much", "Can't pay my rent this month, I should be saving up, but, I just got paid, I'm broke, but I'm balling, Don't know where we're going, We go in when we go out, I just got paid"],
		"streamCount": 205411635,
		"hasPlayed": false,
		"year": 2018
	}, {
		"artist": "The Dead South",
		"song": "In Hell I'll Be In Good Company",
		"lyrics": ["I see my red head, messed bed, tear shed, queen bee, my squeeze", "Brass knife sinks into my shoulder, Oh babe, don't know what I'm gonna do", "After I count down three rounds, in Hell I'll be in good company"],
		"streamCount": 81978337,
		"hasPlayed": false,
		"year": 2014
	}, {
		"artist": "The Rolling Stones",
		"song": "Paint It, Black",
		"lyrics": ["", "", ""],
		"streamCount": 742173285,
		"hasPlayed": false,
		"year": 1966
	}
	// , {
	// 	"artist": "",
	// 	"song": "",
	// 	"lyrics": ["", "", ""],
	// 	"streamCount": 0,
	// 	"hasPlayed": false,
	// 	"year": 20
	// }

	//Believer, Way down We Go
];


const pokemonCount = 30; //starting from 0
const x = document.getElementById("audio");
const canvas = document.getElementById("canvas");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const start = document.getElementById("start");
const lyricsBox = document.getElementById("lyricsBox");
const endModal = document.getElementById("endModal");
const endArtist = document.getElementById("endArtist");
const endTitle = document.getElementById("endTitle");
const endScore = document.getElementById("endScore");
const endCoverImg = document.getElementById("endCoverImg");
const endYear = document.getElementById("endYear");
const endStreams = document.getElementById("endStreams");
const easyScore = document.getElementById("easyScore");
const hardScore = document.getElementById("hardScore");
const extremeScore = document.getElementById("extremeScore");
const poke1 = document.getElementById("poke1");
const poke2 = document.getElementById("poke2");
const poke3 = document.getElementById("poke3");
const poke1mobile = document.getElementById("poke1mobile");
const poke2mobile = document.getElementById("poke2mobile");
const poke3mobile = document.getElementById("poke3mobile");
const alertText = document.getElementById("alertText");
const alertBox = document.getElementById("alertBox");
const easyScoreFlex = document.getElementById("easyScoreFlex");
const hardScoreFlex = document.getElementById("hardScoreFlex");
const extremeScoreFlex = document.getElementById("extremeScoreFlex");
const easyBtnBox = document.getElementById("easyBtnBox");
const hardBtnBox = document.getElementById("hardBtnBox");
const extremeBtnBox = document.getElementById("extremeBtnBox");
const easyScoreBox = document.getElementById("easyScoreBox");
const hardScoreBox = document.getElementById("hardScoreBox");
const extremeScoreBox = document.getElementById("extremeScoreBox");
const arrow1Flex = document.getElementById("arrow1Flex");
const arrow2Flex = document.getElementById("arrow2Flex");
const easyText = document.getElementById("easyText");
const hardText = document.getElementById("hardText");
const extremeText = document.getElementById("extremeText");
const easyIcon = document.getElementById("easyIcon");
const hardIcon = document.getElementById("hardIcon");
const extremeIcon = document.getElementById("extremeIcon");

const allLeft = document.getElementById("allLeft");
const easyLeft = document.getElementById("easyLeft");
const hardLeft = document.getElementById("hardLeft");
const extremeLeft = document.getElementById("extremeLeft");
allLeft.innerHTML = songs.length + " / " + songs.filter(song => song.hasPlayed === false).length;
easyLeft.innerHTML = songs.filter(song => song.streamCount > 800000000).length + " / " + songs.filter(song => song.hasPlayed === false && song.streamCount > 800000000).length;
hardLeft.innerHTML = songs.filter(song => song.streamCount <= 800000000 && song.streamCount >= 25000000).length + " / " + songs.filter(song => song.hasPlayed === false && song.streamCount <= 800000000 && song.streamCount >= 25000000).length;
extremeLeft.innerHTML = songs.filter(song => song.streamCount < 25000000).length + " / " + songs.filter(song => song.hasPlayed === false && song.streamCount < 25000000).length;

const mobile = window.matchMedia("(max-width: 768px)");
mobile.addEventListener("change", musicVisualizer);


var abrSymbols = ["", "k", "M", "B", "T"];
function abr(number, dec) {

	// what tier? (determines symbol)
	var tier = Math.log10(Math.abs(number)) / 3 | 0;

	// if zero, we don't need a suffix
	if (tier == 0) return number;

	// get suffix and determine scale
	var suffix = abrSymbols[tier];
	var scale = Math.pow(10, tier * 3);

	// scale the number
	var scaled = number / scale;

	// format number and add suffix
	return scaled.toFixed(dec) + suffix;
}


var slider = document.getElementById('slider');
var difficultyLabel = document.getElementById('difficultyLabel');
noUiSlider.create(slider, {
	start: [800000000, 5000000000],
	snap: true,
	connect: true,
	margin: 200000000,
	range: {
		'min': 1000000, 	// 1M
		'12.5%': 50000000, 	// 50M
		'25%': 200000000, 	// 200M
		'37.5%': 400000000, // 400M
		'50%': 600000000, 	// 600M
		'62.5%': 800000000, // 800M
		'75%': 1000000000, 	// 1B
		'87.5%': 2000000000,// 2B
		'max': 5000000000 	// 5B
	},
	direction: 'rtl',
	pips: {
		mode: 'range',
		density: 3,
		format: {
			to: function (a) {
				return abr(a, 0);
			}
		}
	}
});


var aSongs = null;
var song = null;

// base scores
const easyBaseS = 15;
const hardBaseS = 10;
const extremeBaseS = 5;

// scores after multiplying by difficulty
var easyS = 15;
var hardS = 10;
var extremeS = 5;

var sliderValueR = slider.noUiSlider.get()[0];
var sliderValueL = slider.noUiSlider.get()[1];

slider.noUiSlider.on('update', function (values, handle) {
	sliderValueR = values[0];
	sliderValueL = values[1];

	// calculate a multiplier value which is larger the closer the slider is to the right
	var multiplier1 = Math.abs(1 - sliderValueR / 5000000000) * 15; // right slider multiplier
	var multiplier2 = Math.abs(1 - sliderValueL / 5000000000) * 4; // left slider multiplier

	// average of the two multipliers
	var multiplier = multiplier1 + multiplier2 / 2;

	// normalize the multiplier value to the range 1-5
	var normalizedMultiplier = Math.abs((multiplier - 1) / 6);

	difficultyLabel.innerHTML = normalizedMultiplier.toFixed(2);

	// calculate the scores
	easyS = Math.round(easyBaseS * normalizedMultiplier);
	hardS = Math.round(hardBaseS * normalizedMultiplier);
	extremeS = Math.round(extremeBaseS * normalizedMultiplier);
	easyScore.innerHTML = easyS;
	hardScore.innerHTML = hardS;
	extremeScore.innerHTML = extremeS;
});


function rPokemon(lastrandom) { // not working who cares sorry
	let random = Math.floor(Math.random() * pokemonCount);
	if (random >= lastrandom) {
		random += 1;
	}
	return random;
}

function newSong() {
	aSongs = songs.filter(i => i.streamCount >= sliderValueR && i.streamCount <= sliderValueL && i.hasPlayed == false);
	var random = Math.floor(Math.random() * aSongs.length);
	song = aSongs[random];
	if (aSongs.length == 0) {
		alertShow("Nincs több zene! Válassz más nehézséget vagy töltsd újra az oldalt!");
	} else {
		artistWFeat(songArtist);
		songTitle.innerHTML = song.song;
		song.hasPlayed = true;

		allLeft.innerHTML = songs.length + " / " + songs.filter(song => song.hasPlayed === false).length;
		easyLeft.innerHTML = songs.filter(song => song.streamCount > 800000000).length + " / " + songs.filter(song => song.hasPlayed === false && song.streamCount > 800000000).length;
		hardLeft.innerHTML = songs.filter(song => song.streamCount <= 800000000 && song.streamCount >= 25000000).length + " / " + songs.filter(song => song.hasPlayed === false && song.streamCount <= 800000000 && song.streamCount >= 25000000).length;
		extremeLeft.innerHTML = songs.filter(song => song.streamCount < 25000000).length + " / " + songs.filter(song => song.hasPlayed === false && song.streamCount < 25000000).length;

		var randomPokemon = null;
		randomPokemon = rPokemon((poke1.src.substring(poke1.src.indexOf("pokemon%20images/") + 18).replace('-', ''), poke1.src.lastIndexOf("-1.webp")));

		poke1mobile.src = poke1.src = "pokemon images/" + randomPokemon + "-1.webp";
		poke2mobile.src = poke2.src = "pokemon images/" + randomPokemon + "-2.webp";
		poke3mobile.src = poke3.src = "pokemon images/" + randomPokemon + "-3.webp";
	}
}

function artistWFeat(sourceDiv) {
	if (song.artist.indexOf('(ft. ') !== -1) {
		const featSpan = document.createElement("span");
		featSpan.style.fontWeight = "normal";
		let featArtists = song.artist.substring(song.artist.indexOf('(ft. '));
		sourceDiv.innerHTML = song.artist.split('(ft. ')[0];
		featSpan.appendChild(document.createTextNode(featArtists));
		sourceDiv.appendChild(featSpan);
	} else {
		sourceDiv.innerHTML = song.artist;
	}
}


var aDuration = 0; // duration = base score in reverse order btw

function playSong(duration) {
	if (song == null) {
		alertShow("Nincs kiválasztva zene! Kattints a START gombra!");
	} else {
		aDuration = duration;
		if (duration == 5) {
			showMusicPlayer("easy");
		}
		else if (duration == 10) {
			showMusicPlayer("hard");
		}
		else if (duration == 15) {
			showMusicPlayer("extreme");
		}

		x.src = "songs/" + song.artist + ";" + song.song + ";" + duration + ".mp3";
		x.play();
	}
}

function setLyrics(i) {
	if (song.lyrics[i] == "") {
		lyricsBox.innerHTML = "¯\\_(ツ)_/¯";
	} else {
		lyricsBox.innerHTML = song.lyrics[i];
	}
}

function showMusicPlayer(mode) {
	let modes = ["easy", "hard", "extreme"];
	modes.splice(modes.indexOf(mode), 1);
	window[modes[0] + "ScoreFlex"].style.display = "none";
	window[modes[1] + "ScoreFlex"].style.display = "none";
	start.onclick = "";
	start.classList.add("bg-rose-600/70");
	start.classList.remove("bg-rose-600");
	arrow1Flex.style.display = "none";
	arrow2Flex.style.display = "none";
	window[mode + "ScoreFlex"].classList.add("w-full");
	window[mode + "ScoreFlex"].classList.remove("md:w-1/5");
	window[mode + "ScoreFlex"].classList.remove("w-1/3");
	window[mode + "BtnBox"].classList.remove("md:w-64");
	window[mode + "BtnBox"].classList.add("place-items-start");
	window[mode + "Text"].classList.add("md:mx-0");
	window[mode + "Icon"].classList.add("md:mx-0");
	window[mode + "ScoreBox"].classList.remove("md:w-64");
	window[mode + "Text"].classList.add("md:ml-10");
	window[mode + "Icon"].classList.add("md:ml-10");
	window[mode + "ScoreBox"].classList.add("md:pl-16");
	window[mode + "ScoreBox"].classList.add("md:w-full");
	window[mode + "ScoreBox"].classList.add("md:text-left");
	if (mode == "easy") {
		poke1.classList.add("ml-52");
		poke1.classList.remove("ml-40");
		setLyrics(0);
	} else if (mode == "hard") {
		poke2.classList.add("ml-52");
		poke2.classList.remove("ml-32");
		setLyrics(1);
		window[mode + "BtnBox"].parentElement.classList.remove("md:mr-56");
	} else if (mode == "extreme") {
		poke3.classList.add("ml-52");
		poke3.classList.remove("right-0");
		setLyrics(2);
	}
	musicVisualizer();
	setTimeout(function () {
		window[modes[0] + "ScoreFlex"].style.display = "block";
		window[modes[1] + "ScoreFlex"].style.display = "block";
		start.onclick = newSong;
		start.classList.add("bg-rose-600");
		start.classList.remove("bg-rose-600/70");
		lyricsBox.innerHTML = "Lyrics";
		canvas.style.display = "none";
		if (mobile.matches) {
			arrow1Flex.style.display = "none";
			arrow2Flex.style.display = "none";
		} else {
			arrow1Flex.style.display = "block";
			arrow2Flex.style.display = "block";
		}
		window[mode + "ScoreFlex"].classList.remove("w-full");
		window[mode + "ScoreFlex"].classList.add("md:w-1/5");
		window[mode + "ScoreFlex"].classList.add("w-1/3");
		window[mode + "BtnBox"].classList.add("md:w-64");
		window[mode + "BtnBox"].classList.remove("place-items-start");
		window[mode + "Text"].classList.remove("md:mx-0");
		window[mode + "Icon"].classList.remove("md:mx-0");
		window[mode + "ScoreBox"].classList.add("md:w-64");
		window[mode + "Text"].classList.remove("md:ml-10");
		window[mode + "Icon"].classList.remove("md:ml-10");
		window[mode + "ScoreBox"].classList.remove("md:pl-16");
		window[mode + "ScoreBox"].classList.remove("md:w-full");
		window[mode + "ScoreBox"].classList.remove("md:text-left");
		if (mode == "easy") {
			poke1.classList.remove("ml-52");
			poke1.classList.add("ml-40");
		} else if (mode == "hard") {
			poke2.classList.remove("ml-52");
			poke2.classList.add("ml-32");

			window[mode + "BtnBox"].parentElement.classList.add("md:mr-56");
		} else if (mode == "extreme") {
			poke3.classList.remove("ml-52");
			poke3.classList.add("right-0");
		}
	}, (aDuration + 1.5) * 1000);
}

function end() {
	if (aDuration == 0 || song == null) {
		alertShow("Nem volt lejátszva zene!");
	} else {
		if (aDuration == 5) {
			endScore.innerHTML = easyS;
			x.src = "songs/" + song.artist + ";" + song.song + ";15.mp3";
			x.play();
		} else if (aDuration == 10) {
			endScore.innerHTML = hardS;
			x.src = "songs/" + song.artist + ";" + song.song + ";15.mp3";
			x.play();
		} else if (aDuration == 15) {
			endScore.innerHTML = extremeS;
		}

		endModal.style.display = "block";
		artistWFeat(endArtist);
		endTitle.innerHTML = song.song;
		endCoverImg.src = "cover images/" + song.artist + ';' + song.song + ".webp";
		endYear.innerHTML = song.year;
		endStreams.innerHTML = abr(song.streamCount, 2);
		document.body.style.overflowY = "hidden";
		window.scrollTo(0, 0);
		song = null;
	}
}

function closeModal() {
	endModal.style.display = "none";
	document.body.style.overflowY = "scroll";
}

function alertShow(text) {
	alertText.innerHTML = text;
	alertBox.style.display = "block";
	return;
}


const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
source = audioCtx.createMediaElementSource(x);
source.connect(analyser);
analyser.connect(audioCtx.destination);

function musicVisualizer() {
	if (mobile.matches) {
		canvas.style.display = "none";
	} else {
		canvas.style.display = "block";
	}

	analyser.fftSize = 256;
	const bufferLength = analyser.frequencyBinCount;
	const dataArray = new Uint8Array(bufferLength);

	const HEIGHT = canvas.height;
	const WIDTH = canvas.width;
	var canvasCtx = canvas.getContext("2d");

	canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

	function draw() {
		drawVisual = requestAnimationFrame(draw);

		analyser.getByteFrequencyData(dataArray);

		canvasCtx.fillStyle = 'rgb(0, 0, 0)';
		canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

		const barWidth = (WIDTH / bufferLength) * 2.5;
		let barHeight;
		var a = 0;

		for (let i = 0; i < bufferLength; i++) {
			barHeight = dataArray[i] * 2;

			canvasCtx.fillStyle = 'rgb(' + barHeight + ',' + barHeight + ',' + barHeight + ')';
			canvasCtx.fillRect(a, HEIGHT - barHeight / 2, barWidth, barHeight);

			a += barWidth + 1;
		}
	}
	draw();
}

// This works, but buggy when you spam the button (already ongoing Timeout)
var observer = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutationRecord) {
		setTimeout(() => { if (alertBox.style.display == "block") alertBox.style.display = "none"; }, 10000);
	});
});

observer.observe(alertBox, { attributes: true, attributeFilter: ['style'] });