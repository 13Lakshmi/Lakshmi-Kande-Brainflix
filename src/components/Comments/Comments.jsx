import "./Comments.scss";
function Comments(props) {

    return (
        <div className="comments">
        {
            props.comments.map((comment) => (
                <div key={comment.id}>
                 <div className="comments__divider">
                    <div className="comments__left">
                        <div className="comments__picture">
                         </div>
                     </div>
                <div className="comments__right">
                    <div className="comments__top">
                        <div className="comments__namediv">
                        <p className="comments__name">{comment.name}</p>
                        </div>
                        <div className="comments__datediv">
                        <p className="comments__date">{new Date(comment.timestamp).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="comments__bottom">
                        <p className="comments__description">{comment.comment}</p>
                    </div>
                </div>
                </div>
            </div>
            ))
            }
        </div>
    
    );
}
export default Comments;




















