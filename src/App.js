import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';
import AddSongForm from './Components/AddSong/AddSongForm';


function App() {

  const [songs, setSongs] = useState([])

  function addNewSong(song){

    let tempSongs = [song, ...songs];

    setSongs(tempSongs);
  }

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
      <DisplaySongs parentSongs={songs} />
      <AddSongForm addNewSongProperty={addNewSong} />
    </div>
  );
}

export default App;
