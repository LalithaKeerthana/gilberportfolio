import React from 'react';
import '../style/Testimonial.css'; // Import CSS for styling
import quotationMarkImage from './quote.png'; // Import the image file
import Testimonials from './Testimonials';

const Testimonial = () => {
    return (
      <div className="testimonial-container">
        <img
          src={quotationMarkImage}
          alt="quotation mark"
          className="quote-icon"
        />
        <div className="testimonial-content">
          <p className="testimonial-text">
            Creative & dedicated is things that gilber studio brings for your business.
          </p>
        </div>


      </div>

      
    );
  }
  
  export default Testimonial;