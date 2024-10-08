import { useState, useRef } from "react";
import axios from 'axios';
import Output from "./Output";
import Webcam from "react-webcam";
import img1 from "./close-up-hands-taking-smartphone.jpg";
import img2 from "./FoodImage.png";
import img3 from "./foodWithName.png";
import './Serv.css';

const Services = () => {
    const [cam, setCam] = useState(0);
    const [foodProperty, setFoodProperty] = useState([]);
    const [flag, setFlag] = useState(0);
    const [imgSrc, setImgSrc] = useState(null);
    const [showOutput, setShowOutput] = useState(false);

    const webRef = useRef(null);

    const onCamera = (event) => {
        event.preventDefault();
        setCam(1);
    };

    const offCamera = (event) => {
        event.preventDefault();
        setCam(0);
    };

    const dataURLtoFile = (dataurl, filename) => {
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const processResponse = (data) => {
        if (data.length === 0) {
            setFlag(3);  
        } else {
            const formattedData = data.map(item => {
                return { ...item, name: capitalizeFirstLetter(item.name) };
            });
            setFoodProperty(formattedData);
            setFlag(2); 
            setShowOutput(true);
        }
    };

    const sendByName = (event) => {
        event.preventDefault();
        const name = document.getElementById('food-name').value.trim().toLowerCase();

        if (name === '') {
            alert("Please enter a food name.");
            return;  
        }

       
        resetState();
        setFlag(1);  
        const url = `http://localhost:5000/api/fooddata/${name}`;
        axios.get(url)
            .then(res => {
                processResponse(res.data);
            })
            .catch(err => {
                console.error("Error in Sending Name:", err);
                setFlag(3); 
            });
    };

    const sendByCamera = (event) => {
        event.preventDefault();
        if (cam === 0) {
            alert("Please start the camera");
            return; 
        }

        
        resetState();
        setFlag(1);  
        const imageSrc = webRef.current.getScreenshot();
        setImgSrc(imageSrc);
        const formData = new FormData();
        formData.append('image', dataURLtoFile(imageSrc, 'webcam-image.jpg'));
        axios.post('http://127.0.0.1:4000/flaskapi/findname', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                processResponse(response.data);
                offCamera(event);
            })
            .catch(error => {
                console.error('Error uploading image:', error);
                offCamera(event);
                setFlag(3); 
            });
    };

    const sendImage = (event) => {
        event.preventDefault();
        const form = document.getElementById('home-form-image');
        const formData = new FormData(form);
        const imageFile = document.getElementById('imageFile').files[0];

        if (!imageFile) {
            alert("Please select an image file.");
            return;
        }

        resetState();
        setFlag(1);  

        const reader = new FileReader();
        reader.onloadend = () => {
            setImgSrc(reader.result);
        };
        reader.readAsDataURL(imageFile);

        formData.append('image', imageFile);

        axios.post('http://127.0.0.1:4000/flaskapi/findname', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                processResponse(response.data);
            })
            .catch(error => {
                console.error('Error uploading image:', error);
                setFlag(3); // Handle error
            });
    };

    const resetState = () => {
        setFoodProperty([]);
        setFlag(0);
        setImgSrc(null);
        setShowOutput(false);
    };

    return (
        <div id="service-section" className="service">
            <div className="service-container">
                <h1 className="service-heading">Food Recognition and Nutrition Analysis</h1>
                <div className="service-panel1">
                    {cam === 0
                        ? <img src={img1} alt="error" className="service-panel1-image" />
                        : <Webcam screenshotFormat="image/jpg" ref={webRef} className="service-panel1-image" />}
                    <form className="service-panel1-form" id="service-panel1-form-id">
                        <h6 className="service-panel1-heading">Food Recognition Through Camera</h6>
                        <p className="service-panel1-about">Using a camera to detect food helps identify what you are eating by analyzing pictures. This can provide nutritional information and help track your diet, making it easier to eat healthily and manage your food intake.</p>
                        <br />
                        <div className="service-panel1-camera-div">
                            <button className="service-panel1-capture-on" onClick={onCamera}>Start</button>
                            <button className="service-panel1-capture-off" onClick={offCamera} type="submit">Stop</button>
                        </div>
                        <button href="#service-output-section" className="service-panel1-submit" onClick={sendByCamera} type="submit">Search</button>
                    </form>
                </div>
                <div className="service-panel2">
                    <img src={img2} alt="error" className="service-panel2-image" />
                    <form className="service-panel2-form" id="home-form-image">
                        <h6 className="service-panel2-heading">Food Recognition Through Image Upload</h6>
                        <p className="service-panel2-about">Uploading images for food recognition helps identify different foods in a picture. This technology can analyze the uploaded image to provide nutritional information and track your diet, making it easier to manage your food intake and maintain a healthy lifestyle.</p>
                        <label className="service-panel2-label">Please Select Food Photo</label>
                        <input className="service-panel2-input" id="imageFile" type="file" required />
                        <br />
                        <button className="service-panel2-submit" onClick={sendImage} type="submit">Submit</button>
                    </form>
                </div>
                <div className="service-panel3">
                    <img src={img3} alt="error" className="service-panel2-image" />
                    <form className="service-panel3-form" id="service-panel3-id">
                        <h6 className="service-panel3-heading">Food Recognition By Food Name</h6>
                        <p className="service-panel3-about">Recognizing food by its name allows you to input the name of a food item to get detailed information about it. This technology can provide nutritional information and help track your diet, making it easier to manage your food intake and maintain a healthy lifestyle.</p>
                        <label className="service-panel3-label">Enter Food Name</label>
                        <input placeholder="Food Name" className="service-panel3-input" id="food-name" type="text" required />
                        <br />
                        <button className="service-panel3-submit" onClick={sendByName} type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div id="service-output-section" className="service-output">
                {flag === 1 && <h1>Loading...</h1>}
                {flag === 2 && showOutput && <Output foodProperty={foodProperty} imgSrc={imgSrc} />}
                {flag === 3 && <h1>Food Not Found</h1>}
            </div>
        </div>
    );
}

export default Services;
