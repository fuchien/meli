import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// API
import api from '../src/services/api';

// CONTAINERS
import DetailsUI from '../src/containers/Details';

const Details = props => {
    const { data, errMsg } = props;

    return (
        <>
            <Head>
                <title>Details</title>
            </Head>
            {errMsg ? (
                <p
                    className="details__error"
                    style={{ textAlign: 'center', marginTop: '350px' }}
                >
                    {errMsg}
                </p>
            ) : (
                <DetailsUI data={data} />
            )}
        </>
    );
};

Details.getInitialProps = async ({ query: { id } }) => {
    try {
        const { data } = await api.get(`/api/items/${id}`);
        return {
            data
        };
    } catch (err) {
        return {
            errMsg: 'Erro ao buscar os detalhes do produto'
        };
    }
};

Details.propTypes = {
    data: PropTypes.shape(),
    err: PropTypes.shape()
};

export default Details;
