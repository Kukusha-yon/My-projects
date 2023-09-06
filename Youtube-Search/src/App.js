import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './components/header';
import Main from './components/Main';
import SideBar from './components/SideBar';



const App = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('');


  useEffect(()=>{
    handleSearch('popular');

  },[query]);

  const handleSearch = async () => {
    try{
      // const API_KEY = 'AIzaSyBwvyg9O92Q3TMzRdzI1uB_-g3H2jXwFBM';
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key='your API KEY'`;
      const response = await axios.get(url);
      setVideos(response.data.items);
    
    } catch(error) {
      alert(error.message);
      console.error('Error fetching videos:', error);
    }
  }
  
  const handleChange = (event) => {
      setQuery(event.target.value);
    };
  const handleSubmit = (event) => {
      // event.preventDefault();
      event.target.reset();
      handleSearch();
    };
        return (
      <div className='app'>
        <Header  handleSubmit={handleSubmit} handleChange={handleChange} query={query}/>
        <div className='main'>
          <SideBar />
          <Main videos={videos}/>
        </div>
        
      </div>
    )
  
}
export default App;