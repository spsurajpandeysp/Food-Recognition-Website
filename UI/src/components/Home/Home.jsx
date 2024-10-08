import { useState } from 'react';
import img1 from './foodRecognition.png';
import img2 from './NutritionAnalysis.png';
import img3 from './Image3.jpg';
import './Home.css'; 

const Home = () => {

    const [image, setImage] = useState(0);

    const onClickNavButton = (val) => {
        setImage(val);
    }

    const onClickRight = () => {
        if (image === 2) {
            setImage(0);
        } else {
            setImage(image + 1);
        }
    }

    const onClickLeft = () => {
        if (image === 0) {
            setImage(2);
        } else {
            setImage(image - 1);
        }
    }

    return (
        <div id="carouselExampleIndicators " className="carousel slide home-container">
            <div className="carousel-indicators">
                <button onClick={() => onClickNavButton(0)} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={image === 0 ? 'active' : ''} aria-current="true" aria-label="Slide 1"></button>
                <button onClick={() => onClickNavButton(1)} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className={image === 1 ? 'active' : ''} aria-label="Slide 2"></button>
                <button onClick={() => onClickNavButton(2)} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className={image === 2 ? 'active' : ''} aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className={"carousel-item " + (image === 0 ? 'active' : '')}>
                    <img src={img1} className="d-block w-100 carousel-img" alt="error" />
                </div>
                <div className={"carousel-item " + (image === 1 ? 'active' : '')}>
                    <img src={img2} className="d-block w-100 carousel-img" alt="error" />
                </div>
                <div className={"carousel-item " + (image === 2 ? 'active' : '')}>
                    <img src={img3} className="d-block w-100 carousel-img" alt="error" />
                </div>
            </div>
            <button onClick={onClickLeft} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button onClick={onClickRight} className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Home;
