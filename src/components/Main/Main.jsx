import "../Main/Main.scss";
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";
function Main(props) {
  return (
    <section className="main">
      <h2 className="main__title">Tech Trends: {props.selectedVideo.title}</h2>
      <div className="main__divider">
        <div className="main__left">
          <p className="main__channel">By {props.selectedVideo.channel}</p>
          <p className="main__timestamp">
            {new Date(props.selectedVideo.timestamp).toLocaleDateString()}
          </p>
        </div>
        <div className="main__right">
          <div className="main__views">
            <img className="main__viewsicon" src={views} alt="view"></img>
            <p className="main__totalviews">{props.selectedVideo.views}</p>
          </div>
          <div className="main__likes">
            <img className="main__likesicon" src={likes} alt="like"></img>
            <p className="main__totallikes">{props.selectedVideo.likes}</p>
          </div>
        </div>
      </div>
      <div className="main__description">
        <p className="main__copy"> {props.selectedVideo.description}</p>
      </div>
    </section>
  );
}
export default Main;
