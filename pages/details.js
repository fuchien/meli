import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// API
import api from '../src/services/api';

// CONTAINERS
import DetailsUI from '../src/containers/Details';

const Details = props => (
    <>
        <Head>
            <title>Details</title>
        </Head>
        <DetailsUI {...props} />
    </>
);

Details.getInitialProps = async ({ query: { id } }) => {
    try {
        const { data } = await api.get(`/api/items/${id}`);
        return {
            data
        };
    } catch (err) {
        return {
            err
        };
    }
};

Details.propTypes = {
    data: PropTypes.shape(),
    err: PropTypes.shape()
};

export default Details;
