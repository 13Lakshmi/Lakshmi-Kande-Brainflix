import './App.scss';
import Header from './components/Header/Header';
import HeroVideo from './components/Hero/HeroVideo';
import videoDetails from '../../lakshmi-kande-brainflix/src/Data/Video-details.json';
import VideoList from './components/Videos/Videos';
import Form from './components/Form/Form';
import Comments from './components/Comments/Comments';
import { useState } from 'react';






function App() {

  const [heroVideo, setheroVideo] = useState(videoDetails[0]);
  const [videos, setVideos] = useState(videoDetails);
  const [comments, setcomments] = useState(videoDetails[0].comments);
  
  function handleVideoClick(id) {

    const clickedVideo = videos.find((video) => {
      return video.id === id;
    });
    setheroVideo(clickedVideo);
    setcomments(clickedVideo.comments)
  }


  return (
    <div className="App">
      <Header />
      <HeroVideo heroVideo={heroVideo}
      />
      <Form />
      <Comments comments={comments}/>


      <VideoList videos={videos}
      heroVideo={heroVideo}
        handleVideoClick={handleVideoClick}
      />
    </div>
  );

}

export default App;
