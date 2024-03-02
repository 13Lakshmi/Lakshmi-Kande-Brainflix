import "../Hero/HeroVideo.scss";
// import views from "../../assets/Icons/views.svg";
// import likes from "../../assets/Icons/likes.svg";
function HeroVideo(props) {
    return (

        <section className="selectedVideo">
            <video poster={props.selectedVideo.image} className="selectedVideo__video" controls={true}></video>
        

            {/* <h2 className="selectedVideo__title">Tech Trends: {props.heroVideo.title}</h2>
            <div className="selectedVideo__divider">
                <div className="selectedVideo__left">
                    <p className="selectedVideo__channel">By {props.heroVideo.channel}</p>
                    <p className="selectedVideo__timestamp">{new Date(props.heroVideo.timestamp).toLocaleDateString()}</p>

                </div>
                <div className="selectedVideo__right">
                    <div className="selectedVideo__views">
                        <img className="selectedVideo__viewsicon" src={views} alt="view"></img>
                        <p className="selectedVideo__totalviews">{props.heroVideo.views}</p>
                    </div>
                    <div className="selectedVideo__likes">
                        <img className="selectedVideo__likesicon" src={likes} alt="like"></img>
                        <p className="selectedVideo__totallikes">{props.heroVideo.likes}</p>
                    </div>
                </div>
            </div>
            <div className="selectedVideo__description">
                <p className="selectedVideo__copy"> {props.heroVideo.description}</p>
            </div> */}


        </section >

    );
}
export default HeroVideo;