import "../Videos/Videos.scss";

function VideoList(props) {
    
    function handleVideoClick(id){
        
        const clickedVideo = props.videos.filter((video) => {
            return video.id === id;
        }
        );
        props.updateVideo(clickedVideo[0].image)
    }
    
    return(
        <section className="container">
            <h2 className="container__name">NEXT VIDEOS</h2>
            <ul className="container__list">
                 {props.videos
                .map((video) => {
                    return (
                       <li key={video.id} className="container__item"
                        onClick={() => {handleVideoClick(video.id);
                       }}>
                        <img src={video.image} alt="img" className="container__img" />
                        <h3 className="container__title">{video.title}</h3>
                        <p className="container__channel">{video.channel}</p>
                        </li>
                    );
                } )
             } </ul>
        </section>    
    );
}
export default VideoList;