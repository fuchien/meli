import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

// API
import api from '../src/services/api';

// CONTAINERS
import ItemsUI from '../src/containers/Items';
import CategoriesUI from '../src/containers/Categories';

const Items = ({ data, errMsg }) => (
    <>
        <Head>
            <title>Items</title>
        </Head>
        <CategoriesUI categories={data.categories} />
        <ItemsUI data={data} errMsg={errMsg} />
    </>
);

Items.defaultProps = {
    data: null,
    errMsg: null
};

Items.propTypes = {
    data: PropTypes.shape(),
    errMsg: PropTypes.string
};

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
