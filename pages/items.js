import React from 'react';

import Head from 'next/head';

// API
import api from '../src/services/api';

// CONTAINERS
import ItemsUI from '../src/containers/Items';

const Items = ({ data }) => (
    <>
        <Head>
            <title>Items</title>
        </Head>
        <ItemsUI data={data} />
    </>
);

Items.getInitialProps = async ({ query }) => {
    const limit = 4;
    const { data } = await api.get(
        `/sites/MLA/search?q=${query.search}&limit=${limit}`
    );
    // const { data } = await api.get();
    return { data };
};

export default Items;
