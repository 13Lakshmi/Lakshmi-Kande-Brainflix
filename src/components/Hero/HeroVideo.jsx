import "../Hero/HeroVideo.scss";
import Main from "../Main/Main";
function HeroVideo(props){
    return(

        <section className="selectedVideo">
            <video poster={props.heroVideo} className="selectedVideo__video" controls={true}></video>
        </section>
    );
}
export default HeroVideo;