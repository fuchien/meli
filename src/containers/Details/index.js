import React from 'react';

// COMPONENTS
import DetailsUI from '../../components/Details';

const Details = props => {
    const { err } = props;

    const handleBuyClick = (productId, sellerId) => {
        alert(`id: ${productId} do vendedor ${sellerId} comprado!`);
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
                <DetailsUI handleBuyClick={handleBuyClick} {...props} />
            )}
        </>
    );
};

export default Details;
