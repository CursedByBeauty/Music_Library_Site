import React from "react";
import "./NavigationBar.css";

const NavigationBar = (props) => {
  return (
    <nav className="NavBarItems">
      <h1>
        Music
        <small className="text-muted">Library</small>
      </h1>
      <input value={props.userInput} placeholder='Search Here...' onChange={(e)=> {props.getUserInput(e)}}/>
    </nav>
    
  );
};

export default NavigationBar;
