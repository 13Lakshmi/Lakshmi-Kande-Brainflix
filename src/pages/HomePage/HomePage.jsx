import Comments from "../../components/Comments/Comments";
import Form from "../../components/Form/Form";
import HeroVideo from "../../components/Hero/HeroVideo";
import Main from "../../components/Main/Main";
import VideoList from "../../components/Videos/Videos";
import videoDetails from "../../Data/Video-details.json";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./HomePage.scss";
import axios from "axios";

const apiKey = "292618a2-723c-4184-9e73-95f68f43f987";
// const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

function HomePage() {
  const [heroVideo, setHeroVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
 // const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", comment: "" });

  // const [comments, setcomments] = useState(videoDetails[0].comments);

  const params = useParams();

  useEffect(() => {
    console.log("Videos page");
    const getVideos = async () => {
      try {
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${apiKey}`
        );
        console.log(response);
        setHeroVideo(response.data);
      } catch (e) {
        console.log("error:", e);
      }
    };
    getVideos();
  }, []);

  useEffect(() => {
    console.log("params:");

    const getSelectedVideo = async (id) => {
      try {
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=${apiKey}`
        );
        console.log(response);
        setSelectedVideo(response.data);
      //  setComments(response.data.comments);
      } catch (e) {
        console.log("error:", e);
      }
    };

    if (params.id) {
      console.log(params.id);
      getSelectedVideo(params.id);
    } else {
      getSelectedVideo(defaultVideoId);
    }
  }, [params]);

  //     function handleVideoClick(id) {
  //     const clickedVideo = setSelectedVideo.find((video) => {
  //     return video.id === id;
  //   });
  //   setHeroVideo(clickedVideo);
  //  setcomments(heroVideo.comments);
  // }

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${selectedVideo.id}/comments?api_key=${apiKey}`,
        newComment
      );
      console.log("comment added", response.data);
      // setComments([...comments, response.data]);
    } catch (e) {
      console.log("error:", e);
    }
  };

  // console.log(selectedVideo);
  return (
    <div className="homepage">
      <video
        poster={selectedVideo.image}
        alt={selectedVideo.title}
        className="homepage__fullimage"
        controls={true}
      />
      <Main  selectedVideo={selectedVideo}/>
      
      <div>
        <Form onSubmit={handleCommentSubmit} />
      </div>
      <div>
        <Comments selectedVideo={selectedVideo} />
      </div>

     

      <div className="homepage__videolist">
        <p className="homepage__subtitle">NEXT VIDEOS</p>
         {heroVideo
          .filter((video) => video.id !== selectedVideo.id)
          .map((video) => (
            <Link key={video.id} to={`/videos/${video.id}`}>
              <img
                src={video.image}
                alt={video.title}
                className="homepage__video"
              />
              <div>
                <p className="homepage__channel">{video.channel}</p>
                <p className="homepage__title">{video.title}</p>
              </div>
            </Link>
          ))}
      </div>


    </div>
  );
}
export default HomePage;
























// const [videos, setVideos] = useState(videoDetails);
// const [comments, setcomments] = useState(videoDetails[0].comments);

// function handleVideoClick(id) {
//   const clickedVideo = videos.find((video) => {
//     return video.id === id;
//   });
//   setheroVideo(clickedVideo);
//   setcomments(clickedVideo.comments);
// }

//   return (
//     <>
//       <HeroVideo heroVideo={heroVideo} />
//       <div className="homepage">
//         <div className="homepage__left">
//           <Main heroVideo={heroVideo} />
//           <Form />
//           <Comments comments={comments} />
//         </div>
//         <div className="homepage__right">
//           <VideoList
//             videos={videos}
//             heroVideo={heroVideo}
//             handleVideoClick={handleVideoClick}
//           />
//         </div>
//       </div>
//     </>
//   );
// }
