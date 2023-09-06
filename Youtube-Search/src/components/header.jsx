import React from "react";

const Header = ({handleSubmit, handleChange, query}) => {
    return (
        <header>
            <div className="logo left">
                <i id="menu" className="material-icons bi bi-list"></i>
                <img src="https://www.freecodecamp.org/news/content/images/2022/01/yt-logo.png" alt="logo"></img>
            </div>
            <div className="search center">
               <form onSubmit={handleSubmit}>
                  <input type='text' value={query} onChange={handleChange} placeholder='search youtube..' />
                  <button type="submit"><i className="material-icons bi bi-search"></i></button>
                </form>
                <i className="material-icons bi bi-mic-fill mic"></i>
            </div>
            <div className="icons right">
                <i className="material-icons bi bi-camera-video-off"></i>
                <i className="material-icons bi bi-bell-slash"></i>
                <i className="material-icons bi bi-person-circle"></i>
            </div>
        </header>
    )
}

export default Header;