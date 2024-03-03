import "../Hero/HeroVideo.scss";
function HeroVideo(props) {
  return (
    <section className="selectedVideo">
      <video
        poster={props.selectedVideo.image}
        className="selectedVideo__video"
        controls={true}
      ></video>
    </section>
  );
}
export default HeroVideo;
