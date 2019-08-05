import React from 'react';

import Head from 'next/head';

// API
import api from '../src/services/api';

// CONTAINERS
import ItemsUI from '../src/containers/Items';

const Items = () => (
    <div>
        <Head>
            <title>Items</title>
        </Head>
        <ItemsUI />
    </div>
);

Items.getInitialProps = async ({ query }) => {
    const { data } = await api.get(`/sites/MLA/search?q=${query.search}`);
    console.log(data);
    return { data };
};

export default Items;
