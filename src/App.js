import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';
import AddSongForm from './Components/AddSong/AddSongForm';
import './App.css'



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
    <div className='container-fluid'>
      <div className='row'>
      <h3 style={{margin: '1em'}}>Music Library</h3>
        <div className="col-md-2">
         
        </div>
        <div className="col-md-8">
          <div className='border-box'>
            <DisplaySongs parentSongs={songs} />
          </div>
          <div className='border-box'>
            <AddSongForm addNewSongProperty={addNewSong} />
          </div>
        </div>
        <div className="col-md-2">
          
        </div>

      </div>
      
    </div>
  );
}

export default App;
