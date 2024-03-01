import Comments from "../../components/Comments/Comments";
import Form from "../../components/Form/Form";
import HeroVideo from "../../components/Hero/HeroVideo";
import Main from "../../components/Main/Main";
import VideoList from "../../components/Videos/Videos";
import videoDetails from "../../Data/Video-details.json";
import { useEffect, useState } from "react";
import "./HomePage.scss";
//import axios from "react";

const api_key = "292618a2-723c-4184-9e73-95f68f43f987";

function HomePage() {
  const [heroVideo, setheroVideo] = useState(videoDetails[0]);
  const [videos, setVideos] = useState(videoDetails);
  const [comments, setcomments] = useState(videoDetails[0].comments);

  // useEffect(() =>{
  //   console.log("Videos");
  //   const getVideos= async() =>{
  //     try{
  //     const response = await axios.get("https://unit-3-project-api-0a5620414506.herokuapp.com/");
  //   }catch(error){
  //     console.log("error");
  //   }
  //   }
  // })

  function handleVideoClick(id) {
    const clickedVideo = videos.find((video) => {
      return video.id === id;
    });
    setheroVideo(clickedVideo);
    setcomments(clickedVideo.comments);
  }

  return (
    <>
      <HeroVideo heroVideo={heroVideo} />
      <div className="homepage">
        <div className="homepage__left">
          <Main heroVideo={heroVideo} />
          <Form />
          <Comments comments={comments} />
        </div>
        <div className="homepage__right">
          <VideoList
            videos={videos}
            heroVideo={heroVideo}
            handleVideoClick={handleVideoClick}
          />
        </div>
      </div>
    </>
  );
}
export default HomePage;
