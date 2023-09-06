import {useEffect,useState } from "react";





const Weather = () => {
    const [forecastData,setForecastData] = useState([]);
    const [city, setCity] = useState('Addis Ababa');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [recentCities,setRecentCity] = useState([]);
  
  
  
    useEffect(() => {
        setCity();
    },[])
    const fetchForeCastData = async () => {
        try {
            const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key='your api key'&q=${city}&days=4`);
            const data = await res.json();
            setForecastData(data.forecast.forecastday);
            setCountry(data.location.country);
            setName(data.location.name);
            setRecentCity([city, ...recentCities]);
           
           
        } catch(error) {
            console.error('Error fetching forecast data:', error);
            alert("The City is not found !!");
            setRecentCity(['', ...recentCities]);
            
            
        }
    };
   
    const getDayName = (date) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayIndex = new Date(date).getDay();
        return days[dayIndex];
      };

   
 
    const handleSubmit = (e) => {
        e.preventDefault();
        e.currentTarget.blur();
        
        if (city.trim() !== ''){
            fetchForeCastData(city);
            
        }
        e.target.reset();
        
        
    };
   
    return(
        <div className="overlay">
     
            <div className="container">
                <h3 className="header">Weather APP</h3>
                <div className="section">
                     
                    <form onSubmit={handleSubmit}>
                      <input type="text"  name="name" placeholders ="Search a city..." onChange={ e => setCity(e.target.value)} />
                    </form>
                    
                    <ul>
                        { recentCities.map((recentCity) => (
                            <li key={recentCity} onClick={(e) => fetchForeCastData(recentCity)}>
                                {recentCity}
                            </li>
                        ))}
                      </ul>
                </div>
                
                <div className="section_NC">
                    <div className="section_country">
                      {country && (
                       <h2>{country}</h2>
                      )}
                    </div>

                    <div className="section_name">
                        {name && (
                        <h2>{name}</h2>
                        )}
                    </div>
                </div>
                
                <div className="section_temp">
                   {forecastData.map((day) => (
                        <div key={day}>
                          
                            <div className="section_imD">
                                <p>{day.day.maxtemp_c} ˚C</p>
                                <img src={day.day.condition.icon} alt={day.day.condition.text} />
                                <p>{day.day.condition.text}</p> 
                                <p> {getDayName(day.date)}</p>
                                <p>{day.date}</p>
                             </div>
                             
                        </div>
                      
                   ))}
                 </div> 
                
                
                
                
            
              
            </div>
            

        </div>
    ) 
}
export default Weather;