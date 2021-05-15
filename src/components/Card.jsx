import React from 'react';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Card = () => {
    return (  
        <div className="card">
        <img src={image1} alt=""/>
        <div className="card-body">
            <h4 className="card-title">My Title</h4>
            <p className="card-text text-secondary">
                Eu quis tempor qui officia occaecat sit cillum consequat labore. Sunt nostrud fugiat quis reprehenderit eiusmod. Quis culpa culpa velit sit do ullamco. Amet est nisi culpa tempor deserunt exercitation duis. Excepteur ex minim laborum velit consectetur culpa aliquip.
            </p>
        </div>

        </div>
    );
}
 
export default Card;