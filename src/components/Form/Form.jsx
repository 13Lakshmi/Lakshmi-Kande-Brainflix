import "../../components/Form/Form.scss"
function Form(){
    return(
        <div className="form">
            <h3 className="form__text">JOIN THE CONVERSATION</h3>
            <textarea name="comment"  class="form__textarea" 
                        placeholder="Add a new comment" required></textarea>
        </div>
    );
}
export default Form;