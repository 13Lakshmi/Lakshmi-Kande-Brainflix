function Main(props){
    // console.log(props);
    // console.log("heroVideo",props.heroVideo);
    return(
        
        <div className="main__details">
        <h2 className="main__name">Tech Trends:</h2>
        <h2 className="main__title">{props.heroVideo.title}</h2>
        <p className="main__channel">{props.heroVideo.channel}</p>
        <p className="main__views">{props.heroVideo.views}</p>
        <p className="main__date">{props.heroVideo.timestamp}</p>
        <p className="main__likes">{props.heroVideo.likes}</p>
        </div>
    );
}
export default Main;