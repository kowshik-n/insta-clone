import UserAvatar from '../../../assets/images/user.jpg';

function UserInfo(){
    return(
        <div className="UserInfo row">
            {/* Displaying all users information */}
            <div className="col-4">
                <img className="AvatarCircle" src={UserAvatar} alt="User avatar" />
            </div>
            <div className="col-8 userInfoBox">
                <h4>through_my_quirky_lens</h4>
                <div className="userTotalStatus">
                    <span><b>40</b> posts</span>
                    <span><b>284</b> followers</span>
                    <span><b>272</b> following</span>
                </div>
                <br/>
                <div className="userAboutBox">
                    <h6 className="textBold">Rushabh Shah</h6>
                    <p>The world through my lens</p>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;