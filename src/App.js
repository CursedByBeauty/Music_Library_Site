import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  }, [])

async function getAllSongs(){
  let response = await axios.get('http://127.0.0.1:8000/api/music/');
  setSongs(response.data);

}

async function createSong(newSong){
  let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
  if(response.status === 201) {
    await getAllSongs();
  }
}


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => {
            return (
              <tr>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.genre}</td>
                <td>{song.release_date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  );
}

export default App;
