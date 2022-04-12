import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplaySongs from './Components/SearchBar/SearchBar';
import AddSongForm from './Components/MusicTable/MusicTable';
import './App.css'
import NavigationBar from './Components/NavigationBar/NavigationBar';


const newLocal = "#E9D8A6";
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
      <NavigationBar />
      
        <div className="col-md-2">
         
        </div>
          <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" style={{'margin-left': '1em'}}>Filter
            <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <input class="form-control" id="myInput" type="text" placeholder="Search.."/>
              <li><a href="#">Title</a></li>
              <li><a href="#">Artist</a></li>
              <li><a href="#">Album</a></li>
              <li><a href="#">Genre</a></li>
              <li><a href="#">Release Date</a></li>
            </ul>
          </div>
          
        <div className="col-md-8">
          <div className='border-box'>
            <DisplaySongs parentSongs={songs} />
          </div>
      <h3 style={{margin: '1em'}}>Add a Song</h3>
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
