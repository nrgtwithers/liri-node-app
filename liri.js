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

// var j = '';

// for (var i = 3; i < nodeinput; i++){
//     if (i > 3 && i < nodeinput){
//         j = j +"+"+ nodeinput[i];
//     } else {
//         j = j + nodeinput[i];
//     }
// }
// console.log(j)

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
            console.log(error);
        });
    // if () {
    // Display in terminal
    // console.log('-------------------------------')
    // console.log('')
    // console.log(`Name of venue: ${}`)
    // console.log(`Venue location: ${}`)
    // console.log(`Date of the event: ${}`)
    // console.log('')
    // console.log('-------------------------------')
    // //add to log.txt
    // fs.readFile('log.txt', '-------------------------------')
    // fs.readFile('log.txt', '')
    // fs.readFile('log.txt', `Name of venue: ${}`)
    // fs.readFile('log.txt', `Venue location: ${}`)
    // fs.readFile('log.txt', `Date of the event: ${}`)
    // fs.readFile('log.txt', '')
    // fs.readFile('log.txt', '-------------------------------')
    // } else {
    //     console.log('ERROR!')
    // }
}

function songInfo() {
    var song = nodeinput
    spotify.search({ type: 'track', query: song }, function (err, data) {
        // if (err) {
        //     return console.log('Error occurred: ' + err);
        // }
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



//         //Add to log.txt
//         fs.readFile('log.txt', '-------------------------------')
//         fs.readFile('log.txt', '')
//         fs.readFile('log.txt', `Artist(s): ${}`)
//         fs.readFile('log.txt', `Song name: ${}`)
//         fs.readFile('log.txt', `Spotify link: ${}`)
//         fs.readFile('log.txt', `Album name: ${}`)
//         fs.readFile('log.txt', '')
//         fs.readFile('log.txt', '-------------------------------')
//     } else {
//         console.log('ERROR!')
//     }
// }

function movieInfo() {
    var movie = nodeinput
    var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&tomatoes=true&apikey=' + keys.ombd.key;
    axios.get(omdbURL)
        .then(function (response) {
            console.log(response)
            var data = response.data
            // Display in terminal
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
            console.log(error);

            if (nodeinput === '') {
                console.log('-------------------------------')
                console.log('')
                console.log(`If you haven't watched "Mr. Nobody," then you should: http://www.imbd.com/title/tt0485947/`)
                console.log(`It's on Netflix`)
                console.log('')
                console.log('-------------------------------')
            }
        });
}

//             // Add to log.txt
//             fs.readFile('log.txt', '-------------------------------')
//             fs.readFile('log.txt', `Title name: ${}`)
//             fs.readFile('log.txt', `Release Year: ${}`)
//             fs.readFile('log.txt', `IMBD Rating: ${}`)
//             fs.readFile('log.txt', `Rotten Tomatoes Rating ${}`)
//             fs.readFile('log.txt', `Country Filmed: ${}`)
//             fs.readFile('log.txt', `Language: ${}`)
//             fs.readFile('log.txt', `Plot: ${}`)
//             fs.readFile('log.txt', `Actors/Actresses: ${}`)
//             fs.readFile('log.txt', '-------------------------------')
//         } else {
//             console.log('ERROR!')
//         }


//     });
// }


function doIt() {
    fs.readFile('random.txt', "utf8", function (error, data) {
        var txt = data.split(',');

        songInfo(txt[1]);

    });
}