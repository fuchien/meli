import React from 'react';

// STYLED-COMPONENTS
import { Container } from './styles';

const Details = ({ details, description, handleBuyClick }) => (
    <Container>
        <div className="details">
            <div className="details__header">
                <div className="details__img__content">
                    <img
                        className="details__img"
                        src={details.pictures[0].secure_url}
                    />
                </div>
                <div className="details__content">
                    <p className="details__sold__qty">
                        {details.condition} - {details.sold_quantity}{' '}
                        {details.sold_quantity > 1 ? 'vendidos' : 'vendido'}
                    </p>
                    <p className="details__title">{details.title}</p>
                    <p className="details__price">$ {details.price}</p>
                    <button
                        className="details__buy__button"
                        onClick={() =>
                            handleBuyClick(
                                details.id,
                                details.seller_address.id
                            )
                        }
                    >
                        <span>COMPRAR</span>
                    </button>
                </div>
            </div>
            <div className="details__description__content">
                <h2 className="details__description__title">
                    Descricao do produto
                </h2>
                <p className="details__description__text">
                    {description.plain_text}
                </p>
            </div>
        </div>
    </Container>
);

export default Details;
