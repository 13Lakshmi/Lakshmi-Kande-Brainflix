import './App.scss';
import Header from './components/Header/Header';
import HeroVideo from './components/Hero/HeroVideo';
import videoDetails from '../../lakshmi-kande-brainflix/src/Data/Video-details.json';
import Main from './components/Main/Main';
import VideoList from './components/Videos/Videos';
//import Form from './components/Form/Form';
//import Comments from './components/Comments/Comments';
import { useState } from 'react';






function App() {

  const [heroVideo, setheroVideo] = useState(videoDetails[0].image);
  const [videos, setVideos] = useState(videoDetails);
  



  return (
    <div className="App">
      <Header />
      <HeroVideo heroVideo={heroVideo} 
      
      />
      <Main heroVideo={heroVideo} />
      {/* <Form />
      <Comments statevariable={videos}/> */}
      <VideoList videos={videos}
      updateVideo={setheroVideo}
      />
    </div>
  );
  
}

export default App;
