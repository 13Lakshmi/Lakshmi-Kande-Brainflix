import "../Videos/Videos.scss";
import Videos from "../../Data/Videos.json";

function List() {
    console.log(Videos);
    return (
        <div className="container">
            <h3 className="container__name">NEXT VIDEOS</h3>
            <div className="container__videos">
                {
                    Videos.map((video) => (
                        <div key={video.id}>
                            <div className="container__video">
                                <div className="container__picture">
                                    <img src={video.image} className="container__img" alt="video" />
                                </div>

                                <div className="container__heading">

                                    <h3 className="container__title">{video.title}</h3>
                                    <p className="container__channel">{video.channel}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );

}
export default List;
