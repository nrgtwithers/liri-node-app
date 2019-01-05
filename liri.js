var axios = require("axios");
var Spotify = require('node-spotify-api');
var moment = require('moment');
moment().format();
require("dotenv").config();
var fs = require('fs');


var keys = require("./key");

var spotify = new Spotify(keys.spotify);


// Variable with input / commands
var nodeinput = process.argv[3]
var commands = process.argv[2]

//switch case - commands 

switch (commands) {
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

function watchBand() {
    if () {
        // Display in terminal
        console.log('-------------------------------')
        console.log('')
        console.log(`Name of venue: ${}`)
        console.log(`Venue location: ${}`)
        console.log(`Date of the event: ${}`)
        console.log('')
        console.log('-------------------------------')
        //add to log.txt
        fs.readFile('log.txt', '-------------------------------')
        fs.readFile('log.txt', '')
        fs.readFile('log.txt', `Name of venue: ${}`)
        fs.readFile('log.txt', `Venue location: ${}`)
        fs.readFile('log.txt', `Date of the event: ${}`)
        fs.readFile('log.txt', '')
        fs.readFile('log.txt', '-------------------------------')
    } else {
        console.log('ERROR!')
    }
}

function songInfo(movie) {

    if () {
        // Display in terminal
        console.log('-------------------------------')
        console.log('')
        console.log(`Artist(s): ${}`)
        console.log(`Song name: ${}`)
        console.log(`Spotify link: ${}`)
        console.log(`Album name: ${}`)
        console.log('')
        console.log('-------------------------------')
        //Add to log.txt
        fs.readFile('log.txt', '-------------------------------')
        fs.readFile('log.txt', '')
        fs.readFile('log.txt', `Artist(s): ${}`)
        fs.readFile('log.txt', `Song name: ${}`)
        fs.readFile('log.txt', `Spotify link: ${}`)
        fs.readFile('log.txt', `Album name: ${}`)
        fs.readFile('log.txt', '')
        fs.readFile('log.txt', '-------------------------------')
    } else {
        console.log('ERROR!')
    }
}

function movieInfo() {
    var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&tomatoes=true';

    requestAnimationFrame(){
        if () {
            // Display in terminal
            console.log('-------------------------------')
            console.log(`Title name: ${}`)
            console.log(`Release Year: ${}`)
            console.log(`IMBD Rating: ${}`)
            console.log(`Rotten Tomatoes Rating ${}`)
            console.log(`Country Filmed: ${}`)
            console.log(`Language: ${}`)
            console.log(`Plot: ${}`)
            console.log(`Actors/Actresses: ${}`)
            console.log('-------------------------------')
            // Add to log.txt
            fs.readFile('log.txt', '-------------------------------')
            fs.readFile('log.txt', `Title name: ${}`)
            fs.readFile('log.txt', `Release Year: ${}`)
            fs.readFile('log.txt', `IMBD Rating: ${}`)
            fs.readFile('log.txt', `Rotten Tomatoes Rating ${}`)
            fs.readFile('log.txt', `Country Filmed: ${}`)
            fs.readFile('log.txt', `Language: ${}`)
            fs.readFile('log.txt', `Plot: ${}`)
            fs.readFile('log.txt', `Actors/Actresses: ${}`)
            fs.readFile('log.txt', '-------------------------------')
        } else {
            console.log('ERROR!')
        }

        if (movie === '') {
            console.log('-------------------------------')
            console.log('')
            console.log(`If you haven't watched "Mr. Nobody," then you should: http://www.imbd.com/title/tt0485947/`)
            console.log(`It's on Netflix`)
            console.log('')
            console.log('-------------------------------')
        }
    });
}


function doIt() {
    fs.readFile('random.txt', "utf8", function (error, data) {
        var txt = data.split(',');


    });
}