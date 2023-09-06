import React from 'react';

const SideBar = () => {
    return (
      <div className='side-bar'>
          <div className='nav'>
            <a href="https://www.w3schools.com/" className='nav-link active'>
                <i className="material-icons bi bi-house-door-fill"></i>
                <span>Home</span>
            </a> 
            <hr></hr>
            <a href="https://www.w3schools.com/" className='nav-link'>
                <i className="material-icons bi bi-fire "></i>
                <span>Trending</span>
            </a> 
            <hr></hr>
            <a href="https://www.w3schools.com/" className='nav-link'>
                <i className="material-icons bi bi-collection-play-fill"></i>
                <span>Subscriptions</span>
            </a> 
        </div>
        <hr></hr>
        <a href='https://www.w3schools.com/' className='nav-link'>
            <i className="material-icons bi bi-collection"></i>
            <span>Library</span>
        </a>
        <hr></hr>
        <a href='https://www.w3schools.com/' className='nav-link'>
            <i className="material-icons bi bi-clock-history"></i>
            <span>History</span>
        </a>
        <hr></hr>
        <a href='https://www.w3schools.com/' className='nav-link'>
        <i className="material-icons bi bi-film "></i>
            <span>your Videos</span>
        </a>
        <hr></hr>
        <a href='https://www.w3schools.com/' className='nav-link'>
            <i className='material-icons bi bi-clock'></i>
            <span>Watch Later</span>
        </a>
        <hr></hr>
        <a href='https://www.w3schools.com/' className='nav-link'>
            <i className='material-icons bi bi-hand-thumbs-up'></i>
            <span>Liked Videos</span>
        </a>
      </div>
 
    )
}

export default SideBar;