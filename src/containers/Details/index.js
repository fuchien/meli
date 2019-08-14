import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// STORE
import Connect from '../../store/config/connect';
import { turnLoadingOff } from '../../store/ducks/products';

// COMPONENTS
import DetailsUI from '../../components/Details';

const Details = ({ err, data: { item }, dispatch }) => {
    const handleBuyClick = productId => {
        alert(`Produto: ${productId} comprado!`);
        // FEATURES
        // ADICIONAR NO CARRINHO
        // REDIRECIONAR PARA CARRINHO DE COMPRAS
    };

    useEffect(() => {
        dispatch(turnLoadingOff());
    }, []);

    return <DetailsUI handleBuyClick={handleBuyClick} item={item} />;
};

Details.propTypes = {
    data: PropTypes.shape({
        item: PropTypes.shape()
    })
};

export default Connect()(Details);
