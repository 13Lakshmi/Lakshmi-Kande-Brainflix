import Comments from "../../components/Comments/Comments";
import Form from "../../components/Form/Form";
import HeroVideo from "../../components/Hero/HeroVideo";
import VideoList from "../../components/Videos/Videos";
import videoDetails from "../../Data/Video-details.json";
import { useState } from "react";

function HomePage(){
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
  
    return(
        <>
        <HeroVideo heroVideo={heroVideo}/>
        <Form />
        <Comments comments={comments}/>
        <VideoList videos={videos}
        heroVideo={heroVideo}
        handleVideoClick={handleVideoClick}/>

        </>
    );
}
export default HomePage;