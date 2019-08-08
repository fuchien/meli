import React from 'react';

// STYLED-COMPONENTS
import { Container } from './styles';

const Item = ({ thumbnail, title, price, address: { state_name } }) => {
    return (
        <Container>
            <img className="item__img" alt={title} src={thumbnail} />
            <div className="item__content">
                <h5 className="item__price">$ {price}</h5>
                <p className="item__description">{title}</p>
            </div>
            <div className="item__address">
                <p className="item__address__state">{state_name}</p>
            </div>
        </Container>
    );
};

export default Item;
