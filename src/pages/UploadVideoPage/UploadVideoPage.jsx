import uploadvideo from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadVideoPage.scss";
import { useNavigate } from "react-router-dom";
import publish from "../../assets/Icons/publish.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import {useState} from "react";


function UploadVideoPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const imageBaseURL = process.env.REACT_APP_IMAGE_BASE_URL;
      const imagePath = `${imageBaseURL}/image9.jpg`;

      const newVideo = {
        title: e.target.title.value,
        description: e.target.description.value,
        image: imagePath
        
      };
      await axios.post("http://localhost:8080/videos", newVideo);
      navigate("/");
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };


  const handlePublishButtonClick = (e) => {
    handleFormSubmit(e);
  };

  return (
    <div className="uploadvideo">
      <p className="uploadvideo__title">Upload Video</p>
      <form onSubmit={handleFormSubmit}>
        <div className="uploadvideo__form">
          <div className="uploadvideo__first">
            <p className="uploadvideo__subtitle">VIDEO THUMBNAIL</p>
            <img src={uploadvideo} alt="img" className="uploadvideo__image" />
          </div>
          <div className="uploadvideo__second">
            <label htmlFor="name" className="uploadvideo__label">
              TITLE YOUR VIDEO
            </label>
            <input
              type="text"
              name="title"
              className="uploadvideo__input"
              placeholder="Add a title to your video"
              onChange={handleInputChange}
              required  
            ></input>
            <label htmlFor="name" className="uploadvideo__label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              type="text"
              name="description"
              className="uploadvideo__textarea"
              placeholder="Add a description to your video"
              onChange={handleInputChange}
              required 
            ></textarea>
          </div>
        </div>
        <div className="uploadvideo__third">
          <img className="uploadvideo__icon" onClick={handlePublishButtonClick}src={publish} alt="upload" />
          <button className="uploadvideo__buttonname"> PUBLISH</button>
          <Link to="/" className="uploadvideo__link">
            <p className="uploadvideo__name">CANCEL</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default UploadVideoPage;
