import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Router } from '../../../routes';

// STORE
import Connect from '../../store/config/connect';
import { turnLoadingOff, turnLoadingOn } from '../../store/ducks/products';

// COMPONENTS
import ItemsUI from '../../components/Items';
import Loader from '../../components/UI/Loader';

const Items = ({ data, dispatch, loading }) => {
    const handleItemClicked = id => {
        dispatch(turnLoadingOn());
        Router.pushRoute(`/items/${id}`);
    };

    useEffect(() => {
        dispatch(turnLoadingOff());
    }, []);

    return (
        <>
            {!loading ? (
                <ItemsUI handleItemClicked={handleItemClicked} data={data} />
            ) : (
                <Loader />
            )}
        </>
    );
};

Items.defaultProps = {
    data: null
};

Items.propTypes = {
    data: PropTypes.shape()
};

const mapStateToProps = ({ loading }, props) => {
    return {
        loading,
        ...props
    };
};

export default Connect(mapStateToProps)(Items);
