import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Router } from '../../../routes';

// COMPONENTS
import ItemsUI from '../../components/Items';

const Items = ({ data, errMsg }) => {
    const handleItemClicked = id => {
        Router.pushRoute(`/items/${id}`);
    };

    // const validationErr = err => {
    //     if (err) {
    //         Router.pushRoute('/');
    //     }
    // };

    // useEffect(() => {
    //     validationErr(errMsg);
    // }, [errMsg]);

    return (
        <>
            {errMsg ? (
                <p style={{ textAlign: 'center', marginTop: '350px' }}>
                    {errMsg}
                </p>
            ) : data ? (
                <ItemsUI handleItemClicked={handleItemClicked} data={data} />
            ) : (
                <p style={{ textAlign: 'center', marginTop: '350px' }}>
                    Buscando...
                </p>
            )}
        </>
    );
};

Items.defaultProps = {
    data: null,
    errMsg: null
};

Items.propTypes = {
    data: PropTypes.shape(),
    errMsg: PropTypes.string
};

export default Items;
