import React from 'react';
import Card from './Card';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const cards = [
    {
        id: 1,
        title: "Awesome Title 1",
        image: image1,
        url: 'https://google.com.mx'
    },
    {
        id: 2,
        title: "Awesome Title 2",
        image: image2,
        url: 'https://google.com.mx'
    },
    {
        id: 3,
        title: "Awesome Title 3",
        image: image3,
        url: 'https://google.com.mx'
    },
];

const Cards = () => {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
                {cards.map(card => (
                    <div className="col-md-4" key={card.id}>
                        <Card
                            image={card.image}
                            title={card.title}
                            url={card.url}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
