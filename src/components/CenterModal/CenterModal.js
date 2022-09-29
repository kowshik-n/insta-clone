import {Modal} from "react-bootstrap";
import CommentBox from "../CommentBox/CommentBox";
import LikeInformation from "../LikeInformation/LikeInformation";
import {useEffect, useState} from "react";

function CenterModal(props) {
    // State for storing all comments
    const [comment, updateComment] = useState([]);

    useEffect(() => {
        // Updating Comments
        updateComment([{
            username: "through_my_quirky_lens",
            post: "JungFrau, SwitzerLand",
            imgURL: props.imgURL
        }, {
            username: "through_my_quirky_lens",
            post: "Casual Ride on Swiss Train looks like ❤️❤️❤️.. Thank you for the memories",
            imgURl: props.imgURL
        }]);
    }, []);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="show-grid">
                <div className="row">
                    {/* Post image showing in modal */}
                    <div className="col-7">
                        <img className="ModalImg" src={props.imgURL} alt="Post img"/>
                    </div>
                    <div className="col-5 modalComments">
                        {/* Mapping all comments to Comment Component */}
                        {comment?.map((comment, key) => <CommentBox key={key} username={comment.username}
                                                                    post={comment.post} imgURL={comment.imgURL}/>)}
                        {/* Mapping like information to like information component */}
                        <LikeInformation imgURL={props.imgURL} like="Unnavti_vora" totalLike={64}
                                         dateTime="MAY 29, 2020"/>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default CenterModal;