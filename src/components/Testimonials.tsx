import React, { useState } from 'react';
import '../style/Testimonials.css'; // Assuming you will create a CSS file for this component

const Testimonials: React.FC = () => {
    const [currentPosition, setCurrentPosition] = useState<number>(0);

    // Event listener for clicking on the previous button
    const handlePrevClick = () => {
        if (currentPosition < 0) {
            setCurrentPosition(currentPosition + 800);
        }
    }

    // Event listener for clicking on the next button
    const handleNextClick = () => {
        if (currentPosition > -1600) {
            setCurrentPosition(currentPosition - 800);
        }
    }

    return (
        <div className="hero">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="testimonial">
                    <div className="slide-row" style={{ transform: `translateX(${currentPosition}px)` }}>
                        <div className="slide-col">
                            <div className="user-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minima reprehenderit dolores minus, quo quis provident incidunt eveniet totam </p>
                                <h3>zara</h3>
                            </div>
                        </div>
                        <div className="slide-col">
                            <div className="user-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minima reprehenderit dolores minus, quo quis provident incidunt eveniet totam veritatis quod ipsa enim quasi eligendi corrupti fuga aliquid, ab veniam.</p>
                                <h3>zara</h3>
                            </div>
                        </div>
                        <div className="slide-col">
                            <div className="user-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minima reprehenderit dolores minus, quo quis provident incidunt eveniet totam veritatis quod ipsa enim quasi eligendi corrupti fuga aliquid, ab veniam.</p>
                                <h3>zara</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navigation-buttons">
                    <div className="prev-btn" onClick={handlePrevClick}><i className="fas fa-chevron-left"></i></div>
                    <div className="next-btn" onClick={handleNextClick}><i className="fas fa-chevron-right"></i></div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
