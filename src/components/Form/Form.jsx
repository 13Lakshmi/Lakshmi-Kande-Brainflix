import "../../components/Form/Form.scss";
import avatar from "../../assets/Images/avatar.jpg";
import comment from "../../assets/Icons/add_comment.svg"

function Form() {
    return (

        <div className="form">
            <div className="form__heading">
                <p className="form__headingname">3 Comments</p>
            </div>

            <div className="form__conversation">
                <div className="form__conversation1">
                    <img src={avatar} alt="avataricon" className="form__avataricon" />
                </div>
                <div className="form__conversation2">
                    <div className="form__input">
                        <h3 className="form__text">JOIN THE CONVERSATION</h3>
                        <textarea name="comment" className="form__textarea" placeholder="Add a new comment" required></textarea>
                    </div>


                    <div className="form__button">
                        <img className="form__buttonicon" src={comment} alt="comment" />
                        <button className="form__buttonname"> COMMENT</button>
                    </div>
                </div>
            </div>




        </div>
    );
}
export default Form;