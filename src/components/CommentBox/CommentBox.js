import './style.css';
import userAvatar from '../../assets/images/user.jpg';

function CommentBox({username, post}) {
    return (
        <div className="CommentBox">
            {/* Image Avatar */}
            <img className="AvatarCircle" src={userAvatar} alt="User avatar"/>
            {/* Post and user information*/}
            <div className="commentInnerBox">
                <h6 className="userName">{username}</h6>
                <p>{post}</p>
            </div>
        </div>
    )
}

export default CommentBox;