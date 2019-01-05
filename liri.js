var axios = require("axios");
var Spotify = require('node-spotify-api');
var moment = require('moment');
moment().format();
require("dotenv").config();
var fs = require('fs');


var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

// // keys
// var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&tomatoes=true';
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=919de1e7
// var bandURL = 'https://rest.bandsintown.com/artists/' + artist + '/events?app_id=codingbootcamp'


// Variable with input / commands
var input = process.argv[3]
var commands = process.argv[2]

//switch case - commands 

switch (commands){
    case 'concert-this': watchBand();
    break;
    case 'spotify-this-song': songInfo();
    break;
    case 'movie-this': movieInfo();
    break;
    case 'do-what-it-says': doIt();
    break;
    default:
    console.log(`Please enter a command: concert-this, spotify-this-song, movie-this, do-what-it-says`);
    break;
}

function watchBand(){
    console.log(`Name of venue: ${}`)
    console.log(`Venue location: ${}`)
    console.log(`Date of the event: ${}`)
}

function songInfo(){
    console.log(`Artist(s): ${}`)
    console.log(`Song name: ${}`)
    console.log(`Spotify link: ${}`)
    console.log(`Album name: ${}`)
}

function movieInfo(){
    console.log(`Title name: ${}`)
    console.log(`Release Year: ${}`)
    console.log(`IMBD Rating: ${}`)
    console.log(`Rotten Tomatoes Rating ${}`)
    console.log(`Country Filmed: ${}`)
    console.log(`Language: ${}`)
    console.log(`Plot: ${}`)
    console.log(`Actors/Actresses: ${} `)
}

function doIt(){
    fs.readFile('random.txt', "utf8", function(error, data){
        var txt = data.split(',');

    
    });
}