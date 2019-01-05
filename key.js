console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};


// // keys
var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&tomatoes=true';

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=919de1e7

var bandURL = 'https://rest.bandsintown.com/artists/' + artist + '/events?app_id=codingbootcamp'