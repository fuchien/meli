import React from 'react';
import PropTypes from 'prop-types';

// STYLED-COMPONENTS
import { Container } from './styles';

const Item = ({
    result: {
        picture,
        title,
        price,
        address: { state_name }
    }
}) => (
    <Container>
        <img className="item__img" alt={title} src={picture} />
        <div className="item__content">
            <h5 className="item__price">$ {price.amount}</h5>
            <p className="item__description">{title}</p>
        </div>
        <div className="item__address">
            <p className="item__address__state">{state_name}</p>
        </div>
    </Container>
);

Item.propTypes = {
    result: PropTypes.shape({
        address: PropTypes.shape({
            state_name: PropTypes.string
        }).isRequired,
        picture: PropTypes.string.isRequired,
        price: PropTypes.shape({
            amount: PropTypes.number
        }).isRequired,
        title: PropTypes.string.isRequired
    }).isRequired
};

export default Item;
