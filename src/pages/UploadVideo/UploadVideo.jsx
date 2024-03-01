import uploadvideo from "../../assets/Images/Upload-video-preview.jpg";
import "../../pages/UploadVideo/UploadVideo.scss";
import publish from "../../assets/Icons/publish.svg";
function UploadVideo() {
  return (
    <div className="uploadvideo">
      <p className="uploadvideo__title">Upload Video</p>
      <div className="uploadVideo__form">
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
            name="uploadvideo"
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
            name="uploadvideo"
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
    </div>
  );
}
export default UploadVideo;
