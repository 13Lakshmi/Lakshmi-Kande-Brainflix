import Comments from "../../components/Comments/Comments";
import Form from "../../components/Form/Form";
import Main from "../../components/Main/Main";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./HomePage.scss";
import axios from "axios";

const apiKey = "292618a2-723c-4184-9e73-95f68f43f987";
const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

function HomePage() {
  const [heroVideo, setHeroVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [newComment, setNewComment] = useState({ name: "", comment: "" });

  const params = useParams();

  useEffect(() => {
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
        setNewComment(response.data.newComment);
      } catch (e) {
        console.log("error:", e);
      }
    };

    if (params.id) {
      getSelectedVideo(params.id);
    } else {
      getSelectedVideo(defaultVideoId);
    }
  }, [params]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${selectedVideo.id}/comments?api_key=${apiKey}`,
        newComment
      );
      console.log("comment added", response.data);
      setNewComment([...newComment, response.data]);
      setNewComment({ name: "", comment: "" });
    } catch (e) {
      console.log("error adding comment:", e);
    }
  };

  return (
    <div className="homepage">
      <video
        poster={selectedVideo.image}
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
            <div className="homepage__detailsleft">
              {heroVideo
                .filter((video) => video.id !== selectedVideo.id)
                .map((video) => (
                  <Link key={video.id} to={`/videos/${video.id}`}>
                    <img
                      src={video.image}
                      alt={video.title}
                      className="homepage__video"
                    />
                  </Link>
                ))}
            </div>
            <div className="homepage__detailsright">
              {heroVideo
                .filter((video) => video.id !== selectedVideo.id)
                .map((video) => (
                  <div className="homepage__subheading">
                    <p className="homepage__title">{video.title}</p>
                    <p className="homepage__channel">{video.channel}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
