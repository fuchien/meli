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
        const detailsResponse = await api.get(`/items/${id}`);
        const descriptionResponse = await api.get(`/items/${id}/description`);
        return {
            details: detailsResponse.data,
            description: descriptionResponse.data
        };
    } catch (err) {
        return {
            err
        };
    }
};

export default Details;
