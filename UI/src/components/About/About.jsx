import './About.css'

const About = () => {
    return <div id='about-section' className="about">
        <div className="about-container">
            <h1 className="about-h1">About Us</h1>
            <p className="about-p">Welcome to our platform! We're dedicated to helping you make smart food choices and improve your health with our easy-to-use tools.</p>

            <h2 className="about-h2" >Our Mission</h2>
            <p className="about-p">Our mission is to make healthy eating easy and accessible for everyone. We provide simple tools to help you understand what you're eating and make better dietary choices.</p>

            <h2 className="about-h2" >What We Do</h2>
            <p className="about-p" >We offer a range of features that allow you to get detailed nutritional information about your food:</p>
            <ul className="about-ul">
                <li className="about-li"><strong>Image Upload</strong>: Upload a photo of your meal from your device.</li>
                <li className="about-li"><strong>Live Camera</strong>: Use your smartphone camera to capture your meal in real-time.</li>
                <li className="about-li"><strong>Search by Name</strong>: Enter the name of the food to get its nutritional details.</li>
            </ul>

            <h2 className="about-h2">How It Works</h2>
            <ol className="about-ol">
                <li className="about-li"><strong>Choose a Method</strong>: Upload an image, use the live camera, or search by food name.</li>
                <li className="about-li"><strong>Identify the Food</strong>: Our system helps you identify the foods in your meal.</li>
                <li className="about-li"><strong>Nutritional Analysis</strong>: Get detailed information about the nutrients in your meal.</li>
                <li className="about-li" ><strong>Track and Learn</strong>: Keep track of your diet over time and get helpful insights.</li>
            </ol>

            <h2 className="about-h2">Who We Serve</h2>
            <ul className="about-ul">
                <li className="about-li"><strong>Individuals</strong>: Anyone who wants to manage their diet, reach fitness goals, or improve health.</li>
                <li className="about-li"><strong>Healthcare Professionals</strong>: Doctors, dietitians, and nutritionists monitoring patients' diets.</li>
                <li className="about-li"><strong>Researchers</strong>: Scientists studying eating habits and nutrition-related health issues.</li>
                <li className="about-li"><strong>Food Industry</strong>: Companies looking to improve their products and provide accurate nutritional info.</li>
            </ul>

            <h2 className="about-h1">Our Vision</h2>
            <p className="about-p">We believe technology can make healthy eating a natural part of life. Our goal is to help everyone eat better and live healthier.</p>

            <h2 className="about-h1">Join Us</h2>
            <p className="about-p">Join our community of health-conscious individuals and professionals. Explore our platform, see how easy it is to get nutritional information, and start your journey to better health today!</p>
            <p className="about-p">If you have any questions or feedback, we’re here to help.</p>
        </div>
    </div>
}

export default About;