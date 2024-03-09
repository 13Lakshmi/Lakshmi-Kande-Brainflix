import Comments from "../../components/Comments/Comments";
import Form from "../../components/Form/Form";
import Main from "../../components/Main/Main";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./HomePage.scss";
import axios from "axios";


console.log(process.env);
//const imageURL ="http://localhost:8080/Images";
//const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";


const { REACT_APP_BACKEND_URL, REACT_APP_IMAGEURL, REACT_APP_DEFAULTVIDEOID } = process.env;


function HomePage() {
  const [heroVideo, setHeroVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [newComment, setNewComment] = useState({ name: "", comment: "" });

  const params = useParams();

  // GET all videos from our server
  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(`${REACT_APP_BACKEND_URL}/videos`);
        console.log(response);
        setHeroVideo(response.data);
      } catch (e) {
        console.log("error fetching videos:", e);
      }
    };
    getVideos();
  }, []);

 

  useEffect(() => {
    const getSelectedVideo = async (id) => {
      try {
        const response = await axios.get(`${REACT_APP_BACKEND_URL}/videos/${id}`);
        setSelectedVideo(response.data);
        setNewComment(response.data.newComment);
      } catch (e) {
        console.log("Error fetching selected video with id:", e);
      } 
    };
    getSelectedVideo();
    if (params.id) {
      getSelectedVideo(params.id);
    } else {
      getSelectedVideo(REACT_APP_DEFAULTVIDEOID);
    }
    
  }, [params]);



  const handleCommentSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post(`${REACT_APP_BACKEND_URL}/comments`,newComment);
      console.log(response.data);
      setNewComment([...newComment, response.data]);
      setNewComment({ name: "", comment: "" });
    } catch (e) {
      console.log("error adding comment:", e);
    }
  };


  // function handleForm(event) {
  //   event.preventDefault();

  //   // create new compliment object with form input data
  //   const newComment = {
  //     comment: event.target.comment.value,
  //   };

  //   async function postComment() {
  //     // POST new comment
  //     const response = await axios.post(
  //       "http://localhost:8080/comments/",
  //       newComment
  //     );

  //     // - once post has completed => get the newly updated compliments data
  //     async function getComments() {
  //       const response = await axios.get("http://localhost:8080/comments/");
  //       setComments(response.data);
  //     }
  //     getComments();
  //   }

  //   postComment();
  // }

  return (
    <div className="homepage">
      <video
        poster={`${REACT_APP_IMAGEURL}/${selectedVideo.image}`}
        alt={selectedVideo.title}
        className="homepage__fullimage"
        controls={true}
      />
      <div className="homepage__divide">
        <div className="homepage__description">
          <Main selectedVideo={selectedVideo} />
          <Form onSubmit={handleCommentSubmit} />
          <Comments selectedVideo={selectedVideo} />
        </div>

        <div className="homepage__nextvideos">
          <p className="homepage__heading">NEXT VIDEOS</p>

          <div className="homepage__details">
          
          {heroVideo
                .filter((video) => video.id !== selectedVideo.id)
                ?.map((video) => (
                  <Link className="homepage__link" key={`${video.id}`} to={`/videos/${video.id}`}>
                  <div className="homedetails__left">
                    <img
                       src={`${REACT_APP_IMAGEURL}/${video.image}`}
                       alt={video.title}
                       className="homepage__video"
                    />
                  </div>
                  <div className="homedetails__right">
                    <div className="homepage__subheading">
                      <p className="homepage__title">{video.title}</p>
                      <p className="homepage__channel">{video.channel}</p>
                    </div>
                  </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
