import React from "react";


const Main = ({videos}) => {
    return (
            <div className="content">
                <div className="videos">
                    <div className="video">
                               { videos.map((video) => (
                                    <div key={video.id.videoId}>
                                        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title={video.snippet.title} 
                                               allow="accelerometer; autoplay; clipboard-write; encrypted-media" allowFullScreen  controls="false"></iframe>
                                        
                                        {/* <div className="details">
                                            <div className="author">
                                                <img src={video.snippet.thumbnails.default.url} alt="imghere" />
                                                <p>{video.snippet.description}</p>
                                            </div> */}
                                            {/* <div className="title">
                                               <h3>{video.snippet.title}</h3>
                                               <a href="https://www.w3schools.com/" >
                                                 Francisco
                                               </a>
                                                <span><p>{video.snippet.channelTitle}</p></span>
                                            </div> */}
                                        {/* </div> */}
                                       <p>Channel: {video.snippet.channelTitle}</p>
                                    </div>
                                ))}
                    </div>                     
                </div>               

            </div>
    
    )
}

export default Main;