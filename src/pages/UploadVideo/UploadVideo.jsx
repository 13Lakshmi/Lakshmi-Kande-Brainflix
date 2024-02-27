import uploadvideo from "../../assets/Images/Upload-video-preview.jpg";
import "../../pages/UploadVideo/UploadVideo.scss";
import upload from "../../assets/icons/upload.svg";
function UploadVideo() {
    return (
        <div className="uploadvideo">
            <h2 className="uploadvideo__title">Upload Video</h2>
            <div className="uploadvideo__first">
                <p className="uploadvideo__subtitle">VIDEO THUMBNAIL</p>
                <img src={uploadvideo} alt="img" className="uploadvideo__image" />
            </div>
            <div className="uploadvideo__second">
                <label for="name" className="uploadvideo__label">TITLE YOUR VIDEO</label>
                <input type="text" className="uploadvideo__input" name="uploadvideo"
                    placeholder="Add a title to your video" required focus></input>
                <label for="name" className="uploadvideo__label">ADD A VIDEO DESCRIPTION</label>
                <textarea type="text" className="uploadvideo__textarea" name="uploadvideo"
                    placeholder="Add a description to your video" required focus></textarea>
            </div>
            <div className="uploadvideo__third">
            <img className="uploadvideo__icon" src={upload} alt="upload" />
            <button className="uploadvideo__buttonname"> PUBLISH</button>
            </div>
            <div className="uploadvideo__cancel">
                <p className="uploadvideo__name">CANCEL</p>
            </div>
        </div>

    );
}
export default UploadVideo;