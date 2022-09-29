import './style.css';

function LikeInformation({imgURL,like,totalLike,dateTime}) {
    return (
        <div className="likeInformation">
            <ion-icon name="heart-outline"></ion-icon>
            <br/>
            <img className="AvatarCircle" src={imgURL} alt="User avatar"/>
            <span>Like by <b>{like}</b> and <b>{totalLike} others</b></span>
            <br/>
            <span className="postDate">{dateTime}</span>
        </div>
    )
}

export default LikeInformation;