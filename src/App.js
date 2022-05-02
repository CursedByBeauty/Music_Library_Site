import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplaySongs from "./Components/Songs/DisplaySongs";
import AddSongForm from "./Components/MusicTable/AddSongForm";
import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

function App() {
  const [songs, setSongs] = useState([]);
  const [userInput, setUserInput] = useState("")

  // function addNewSong(song) {
  //   let tempSongs = [song, ...songs];

  //   setSongs(tempSongs);
  // }

  const getUserInput = (e) => {
    setUserInput(e.target.value)
  }

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
  }

  async function createSong(newSong) {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/music/",
      newSong
    );
    if (response.status === 201) {
      await getAllSongs();
    }
  }



  return (
    <div className="container-fluid">
      <div className="row">
        <NavigationBar getUserInput={getUserInput} userInput={userInput}/>
      
        <div className="col-md-2"></div>

        <div className="col-md-8">
          <div className="border-box">
            <DisplaySongs parentSongs={songs} userInput={userInput} />
          </div>
          <h3 className="form-title">Add a Song</h3>
          <div className="border-box">
            <AddSongForm addNewSongProperty={createSong} />
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default App;
