import React from 'react';

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
        const {
            data: { details, description }
        } = await api.get(`/api/items/${id}`);
        return {
            details,
            description
        };
    } catch (err) {
        return {
            err
        };
    }
};

export default Details;
