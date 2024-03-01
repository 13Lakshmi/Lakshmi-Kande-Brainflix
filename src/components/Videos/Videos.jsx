import "../Videos/Videos.scss";

function VideoList(props) {

    return (
        <section className="container">
            <div className="container__top">
            <h2 className="container__name">NEXT VIDEOS</h2>
            </div> 
            <div className="container__bottom">
            <ul className="container__list">

                {props.videos.filter((video) => video.id !== props.heroVideo.id).map((video) => {
                    return (
                        <li key={video.id} className="container__item"
                            onClick={() => {
                                props.handleVideoClick(video.id);
                            }}>
                            <div className="container__block">
                                <div className="container__picture">
                                    <img src={video.image} alt="img" className="container__img" />
                                </div>
                                <div className="container__details">
                                    <h3 className="container__title">{video.title}</h3>
                                    <p className="container__channel">{video.channel}</p>
                                </div>
                            </div>
                        </li>

                    );
                })

                }
            </ul>
            </div>

        </section>
    );
}
export default VideoList;