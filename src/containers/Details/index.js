import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import DetailsUI from '../../components/Details';

const Details = ({ err, data: { item } }) => {
    const handleBuyClick = productId => {
        alert(`Produto: ${productId} comprado!`);
        // FEATURES
        // ADICIONAR NO CARRINHO
        // REDIRECIONAR PARA CARRINHO DE COMPRAS
    };

    return (
        <>
            {err ? (
                <p
                    className="details__error"
                    style={{ textAlign: 'center', marginTop: '350px' }}
                >
                    Produto inexistente
                </p>
            ) : (
                <DetailsUI handleBuyClick={handleBuyClick} item={item} />
            )}
        </>
    );
};

Details.defaultProps = {
    errMsg: null
};

Details.propTypes = {
    errMsg: PropTypes.string,
    data: PropTypes.shape({
        item: PropTypes.shape()
    })
};

export default Details;
