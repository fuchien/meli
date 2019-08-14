import React from 'react';
import PropTypes from 'prop-types';

// STYLED-COMPONENTS
import { Container } from './styles';

const Details = ({ item, handleBuyClick }) => {
    const {
        picture,
        condition,
        sold_quantity,
        title,
        price,
        id,
        description
    } = item;
    return (
        <Container>
            <div className="details">
                <div className="details__header">
                    <div className="details__img__content">
                        <img className="details__img" src={picture} />
                    </div>
                    <div className="details__content">
                        <p className="details__sold__qty">
                            {condition} - {sold_quantity}{' '}
                            {sold_quantity > 1 ? 'vendidos' : 'vendido'}
                        </p>
                        <p className="details__title">{title}</p>
                        <p className="details__price">$ {price.amount}</p>
                        <button
                            className="details__buy__button"
                            onClick={() => handleBuyClick(id)}
                        >
                            <span>COMPRAR</span>
                        </button>
                    </div>
                </div>
                <div className="details__description__content">
                    <h2 className="details__description__title">
                        Descricao do produto
                    </h2>
                    <p className="details__description__text">{description}</p>
                </div>
            </div>
        </Container>
    );
};

Details.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.shape({
            currency: PropTypes.string,
            amount: PropTypes.number,
            decimals: PropTypes.string
        }),
        picture: PropTypes.string,
        condition: PropTypes.string,
        free_shopping: PropTypes.bool,
        sold_quantity: PropTypes.number,
        description: PropTypes.string
    }),
    handleBuyClick: PropTypes.func
};

export default Details;
