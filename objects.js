/*  assign an object by using curly brackets

*/

var playlist = {artistName : 'songTitle'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'songTitle';

return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  
  return playlist;
}