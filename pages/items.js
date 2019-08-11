import React from 'react';
import Head from 'next/head';

// API
import api from '../src/services/api';

// CONTAINERS
import ItemsUI from '../src/containers/Items';

const Items = ({ data, errMsg }) => (
    <>
        <Head>
            <title>Items</title>
        </Head>
        <ItemsUI data={data} errMsg={errMsg} />
    </>
);

Items.getInitialProps = async ({ query }) => {
    if (!query.search) {
        return {
            errMsg: 'Nao buscou nenhum item'
        };
    }
    try {
        const { data } = await api.get(`/api/items?q=${query.search}`);
        return { data };
    } catch (err) {
        return {
            errMsg: 'Erro ao buscar os produtos'
        };
    }
};

export default Items;
