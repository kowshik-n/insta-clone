import UserInfo from "./components/UserInfo";
import './style.css';
import P1 from '../../assets/images/photo1.jpeg';
import P2 from '../../assets/images/photo2.jpeg';
import P3 from '../../assets/images/photo3.jpeg';
import P4 from '../../assets/images/photo4.jpeg';
import P5 from '../../assets/images/photo5.jpeg';
import P6 from '../../assets/images/photo6.jpeg';
import {useEffect, useState} from "react";
import Gallery from "./components/Gallery";

function Home() {
    // Storing gallery image src in array
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        // Setting gallery image src in array
        setGallery([P1, P2, P3, P4, P5, P6])
    }, []);

    return (
        <div className="container">
            {/* To load user information */}
            <UserInfo/>
            <br/>
            {/* Loading all the gallery images */}
            <div className="row">
                {gallery?.map((imgURL, key) => <Gallery key={key} imgURL={imgURL}/>)}
            </div>
        </div>
    )
}

export default Home;