import CenterModal from "../../../components/CenterModal/CenterModal";
import {useState} from "react";

function Gallery({imgURL}) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="Gallery col-4">
            <img onClick={() => setModalShow(!modalShow)} src={imgURL} alt="User gallery"/>
            {/* Loading Modal expand view after clicking image */}
            <CenterModal
                imgURL={imgURL}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default Gallery;