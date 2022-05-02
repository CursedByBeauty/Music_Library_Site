import React from "react";
function DisplaySongs(props) {
  return (
    <table className="table" >
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {props.parentSongs.filter((song) => {
            if (song.title.includes(props.userInput)) {
                return true;
            }
            else if (song.artist.includes(props.userInput)) {
                return true;
            }
            else if (song.album.includes(props.userInput)) {
                return true;
            }
            else if (song.genre.includes(props.userInput)) {
                return true;
            }
            else if (song.release_date.includes(props.userInput)) {
                return true; 
            }
          })
          .map((song,index) => {
            return (
              <tr key={song.id}>
                <td>{index + 1}</td>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.genre}</td>
                <td>{song.release_date}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default DisplaySongs;

