const data = [];
let artist, song;
document.querySelectorAll('.song-row').forEach(value => {
    artist = value.querySelector('[data-col="artist"] a').innerHTML;
    song = value.querySelector('[data-col="title"] .tooltip').innerHTML.replace(/(\<img .*\>)/, '');
    data.push(artist + ', ' + song);
  }
); 
console.log(data.join('\n'));
