var axios = require("axios");
var Spotify = require('node-spotify-api');
var moment = require('moment');
moment().format();
require("dotenv").config();
var fs = require('fs');


var keys = require("./key");

var spotify = new Spotify(keys.spotify);

// Variable with input / commands 
var commands = process.argv[2]

// This is to provide the ability to seach multiple words vs a single word title, song, and band
var j = process.argv;
var nodeinput = j[3];//this is your process arg 3

if (j.length > 4) {
    // If there are more that 4 arguments, means the user typed in more than one word of the query
    for (var i = 4; i < j.length; i++) {
        nodeinput = nodeinput + "+" + j[i];
    }
}

//switch case - commands 

switch (commands) {
    case 'concert-this': watchBand();
        break;
    case 'spotify-this-song':
        if (j) {
            songInfo(j);
        } else {
            songInfo("The Sign");
        }
        break;
    case 'movie-this':
        if (j) {
            movieInfo(j);
        } else {
            movieInfo("Mr. Nobody");
        }
        break;
    case 'do-what-it-says': doIt();
        break;
    default:
        console.log(`Please enter a command: concert-this, spotify-this-song, movie-this, do-what-it-says`);
        break;
}

function watchBand(artist) {
    var artist = nodeinput
    var bandURL = 'https://rest.bandsintown.com/artists/' + artist + '/events?app_id=codingbootcamp'
    axios.get(bandURL)
        .then(function (response) {
            var data = response.data[0]
            //Display
            console.log('-------------------------------')
            console.log('')
            console.log(`Name of venue: ${data.venue.name}`)
            console.log(`Venue location: ${data.venue.city}, ${data.venue.region}`)
            console.log(`Date of the event: ${moment(data.datetime).format('MM/DD/YYYY')}`)
            console.log('')
            console.log('-------------------------------')
        })
        .catch(function (error) {
            // console.log(error);

            console.log(`This artist(s) has no upcoming shows.`)
            console.log('')
            console.log('-------------------------------')
        });
}

function songInfo(song) {
    var song = nodeinput
    spotify.search({ type: 'track', query: song }, function (err, data) {

        if (!err) {
            for (var i = 0; i < data.tracks.items.length; i++) {
                var data = data.tracks.items[i]
                // Display in terminal
                console.log('-------------------------------')
                console.log('')
                console.log(`Artist(s): ${data.artists[0].name}`)
                console.log(`Song name: ${data.name}`)
                console.log(`Spotify link: ${data.external_urls.spotify}`)
                console.log(`Album name: ${data.album.name}`)
                console.log('')
                console.log('-------------------------------')
            }
        } else {
            return console.log('Error occurred: ' + err);
        }
    });
}


// Function to pull the specific information below from OMBD API 
function movieInfo(movie, err) {
    var movie = nodeinput
    var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&tomatoes=true&apikey=' + keys.ombd.key;
    axios.get(omdbURL)
        .then(function (response) {
            var data = response.data
            // Displays in terminal
            console.log('-------------------------------')
            console.log(`Title name: ${data.Title}`)
            console.log(`Release Year: ${data.Year}`)
            console.log(`IMBD Rating: ${data.imbdRating}`)
            console.log(`Rotten Tomatoes Rating ${data.tomatoRating}`)
            console.log(`Country Filmed: ${data.Country}`)
            console.log(`Language: ${data.Language}`)
            console.log(`Plot: ${data.Plot}`)
            console.log(`Actors/Actresses: ${data.Actors}`)
            console.log('-------------------------------')
        })
        .catch(function (error) {
            //This is to pull information when no content is entered after movie-this command
            if (nodeinput === "Mr. Nobody") {
                console.log('-------------------------------')
                console.log('')
                console.log(`If you haven't watched "Mr. Nobody," then you should: http://www.imbd.com/title/tt0485947/`)
                console.log(`It's on Netflix`)
                console.log('')
                console.log('-------------------------------')
            }
        });
}
// Function to pull information from random.txt to seach for song information thru Spotify.
function doIt() {
    fs.readFile('random.txt', "utf8", function (err, data) {
        var txt = data.split(',');
        console.log(txt[1])
        songInfo(txt[1]);
    });
}

