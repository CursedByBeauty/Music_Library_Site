import React from "react";
import "./NavigationBar.css";

const NavigationBar = ({userInput, getUserInput}) => {
  return (
    <><nav className="NavBarItems">
      <h1>
        Music
        <small className="text-muted">Library</small>
      </h1>
      
    </nav>
    <input value={userInput} onChange={(e)=> {getUserInput(e)}}/></>
  );
};

export default NavigationBar;
