import React from 'react';
import './NavigationBar.css'


const NavigationBar = () => {
    return ( 
        <nav className='NavBarItems'>
            <h1 style={{ margin: "1em" }}>Music
        <small className="text-muted">Library</small>
      </h1>
        </nav> );
}
 
export default NavigationBar;