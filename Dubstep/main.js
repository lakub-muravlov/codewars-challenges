function songDecoder(song) {
  let words = song.split("WUB");
  words = words.filter((word) => word != "");
  let newSong = words[0];
  for (let i = 1; i < words.length; i++)
    newSong = newSong.concat(" ", words[i]);
  return newSong;
}

song = "WUBAWUBBWUBCWUB";
console.log(songDecoder(song));
