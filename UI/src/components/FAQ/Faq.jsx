import React, { useState } from 'react';
import './faq.css';

const Faq = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index) => {
        setActiveItem(activeItem === index ? null : index);
    };

    return (
        <div id="faq-section" className="faq">
            <h1 className="faq-heading">FAQs: Food Recognition and Nutrition Analysis</h1>
            <div className="faq-container">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                    <div key={index} className={`faq-item ${activeItem === index ? 'active' : ''}`} onClick={() => handleItemClick(index)}>
                        <div className="faq-box">

                        <div className="faq-question">{index}. {getQuestion(index)}</div>
                        <div className="faq-answer">{getAnswer(index)}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const getQuestion = (index) => {
    switch (index) {
        case 1:
            return 'What is food recognition?';
        case 2:
            return 'How does the app identify food?';
        case 3:
            return 'What is ResNet?';
        case 4:
            return 'Can the app recognize any food?';
        case 5:
            return 'How do I use the camera to recognize food?';
        case 6:
            return 'Can I upload a photo from my gallery?';
        case 7:
            return 'Can I enter the food name manually?';
        case 8:
            return 'What if the app can\'t recognize my food?';
        case 9:
            return 'Does the app provide nutritional information?';
        case 10:
            return 'How accurate is the app?';
        default:
            return '';
    }
};

const getAnswer = (index) => {
    switch (index) {
        case 1:
            return 'Food recognition uses AI to identify foods from images. You take a photo, and the app tells you what food it is.';
        case 2:
            return 'The app uses ResNet, a type of deep learning model, to analyze images and recognize different foods based on patterns it has learned.';
        case 3:
            return 'ResNet (Residual Neural Network) is a powerful AI model that helps in accurately identifying objects in images, including various food items.';
        case 4:
            return 'The app can recognize a wide range of common foods. If the food is unusual or not well-represented in our training data, it might not be recognized accurately.';
        case 5:
            return 'Start the camera within the app, take a clear photo of your food, and the app will analyze it to identify the food item.';
        case 6:
            return 'Yes, you can upload a photo from your gallery. The app will analyze the uploaded image to recognize the food.';
        case 7:
            return 'Yes, you can type the food name manually to get nutritional information if the app doesn\'t recognize it from the image.';
        case 8:
            return 'If the app can\'t identify the food, try a clearer image or manually enter the food name. Continuous improvements are being made to recognize more foods.';
        case 9:
            return 'Yes, once the food is recognized, the app provides nutritional information such as calories, macronutrients, and vitamins.';
        case 10:
            return 'The app is highly accurate for many common foods, but accuracy may vary for complex or less common items.';
        default:
            return '';
    }
};

export default Faq;
