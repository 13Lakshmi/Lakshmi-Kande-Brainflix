import uploadvideo from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadVideoPage.scss";
import { useNavigate } from "react-router-dom";
import publish from "../../assets/Icons/publish.svg";

function UploadVideoPage() {
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for uploading");
    navigate("/");
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
              className="uploadvideo__input"
              placeholder="Add a title to your video"
              required
              focus
            ></input>
            <label htmlFor="name" className="uploadvideo__label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              type="text"
              className="uploadvideo__textarea"
              placeholder="Add a description to your video"
              required
              focus
            ></textarea>
          </div>
        </div>
        <div className="uploadvideo__third">
          <img className="uploadvideo__icon" src={publish} alt="upload" />
          <button className="uploadvideo__buttonname"> PUBLISH</button>
          <p className="uploadvideo__name">CANCEL</p>
        </div>
        <div className="uploadvideo__cancel"></div>
      </form>
    </div>
  );
}
export default UploadVideoPage;
