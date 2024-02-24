import "./Comments.scss";
import ConvertDate from "../../util/date";
function Comments({statevariable}) {
    console.log(statevariable);

    return (
        <div className="formcomments">
        {
            statevariable.comments.map((comment) => (
                <div key={comment.id}>
                <div className="formcomments__list">
                    
                <div className="form__divider"></div>
                
                <p className="formcomments__channel">{new Date(comment.timestamp).toLocaleDateString()}</p>
                <p className="formcomments__channel">{comment.name}</p>
                <p className="formcomments__title">{comment.comment}</p>
                
                </div>
                </div>
            ))
            }
        </div>
    
    );
}
export default Comments;






// import CommentsArray from "../../Data/Videos-details.json";
// function Comments({statevariable}) {
//     return (
//         <div className="comments">
//         {
//         // CommentArray*.commentList?.comment
//             //CommentArray.map((commentList) => (
//                statevariable.comments.map((comment) => {
//         <div key={comment.id}
//     })
//                 <ul>
//                     // for each comment in commentList, create a <div>
//                 </ul>
//             ))
//             }
//         </div>
    
//     );
// }
// export default Comments;













// Videos.map((video) => (
//     <div key={video.id}>
//         <div className="container__video">
//             <div className="container__picture">
//                 <img src={video.image} className="container__img" alt="video" />
//             </div>
