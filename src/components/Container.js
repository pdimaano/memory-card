import React, { useState, useEffect } from 'react';
import Card from './Card';
import australia from '../images/australia.jpg';
import brazil from '../images/brazil.jpg';
import canada from '../images/canada.jpg';
import france from '../images/france.png';
import germany from '../images/germany.png';
import italy from '../images/italy.png';
import japan from '../images/japan.jpg';
import mexico from '../images/mexico.jpg';
import philippines from '../images/philippines.png';
import spain from '../images/spain.jpg';
import ukraine from '../images/ukraine.png';
import usa from '../images/usa.png';

function Container(props) {
    const { handleGameLogic, score, highScore } = props;

    let images = [
        {
            src: australia,
            title: 'Australia',
            background: '#eeeeee',
            border: '1px solid #b2beb5',
        },
        {
            src: brazil,
            title: 'Brazil',
            background: '#eeeeee',
            border: '1px solid #b2beb5',
        },
        {
            src: canada,
            title: 'Canada',
            background: '#eeeeee',
            border: '1px solid #b2beb5',
        },
        {
            src: france,
            title: 'France',
            background: '#eeeeee',
            border: '1px solid #b2beb5',
        },
        {
            src: germany,
            title: 'Germany',
            background: '#eeeeee',
            border: '1px solid #b2beb5',
        },
        {
            src: italy,
            title: 'Italy',
            background: '#eeeeee',
            border: '1px solid #b2beb5',
        },
        {
            src: japan,
            title: 'Japan',
            background: '#eeeeee',
            border: '1px solid #b2beb5',
        },
        {
            src: mexico,
            title: 'Mexico',
            background: '#eeeeee',
            border: '1px solid #b2beb5',
        },
        {
            src: philippines,
            title: 'Philippines',
            background: '#eeeeee',
            border: '1px solid #b2beb5',
        },
        {
            src: spain,
            title: 'Spain',
            background: '#eeeeee',
            border: '1px solid #b2beb5',
        },
        {
            src: ukraine,
            title: 'Ukraine',
            background: '#eeeeee',
            border: '1px solid #b2beb5',
        },
        {
            src: usa,
            title: 'United States',
            background: '#eeeeee',
            border: '1px solid #b2beb5',
        },
    ];

    const [cards, setNewCards] = useState(images);

    const shuffle = (newCards) => {
        for (let i = newCards.length - 1; i > 0; i--) {
            let randomIdx = Math.floor(Math.random() * i);
            [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
        }
    };

    useEffect(() => {
        const newCards = [...cards];
        shuffle(newCards);
        setNewCards(newCards);
    }, [score, highScore]);

    return (
        <>
            {cards.map((card) => (
                <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
            ))}
        </>
    );
}

export default Container;