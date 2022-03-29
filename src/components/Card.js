import React from 'react';

function Card(props) {
    const {
        card: { src, title, background, border },
        handleGameLogic,
    } = props;

    const cardStyle = {
        background: background,
        border: border,
    };

    return (
        <button
            className="card"
            style={cardStyle}
            onClick={handleGameLogic.bind(this, title)}
        >
            <figure>
                <img src={src} alt={title} />
                <figcaption>{title}</figcaption>
            </figure>
        </button>
    );
}

export default Card;