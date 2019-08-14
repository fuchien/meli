import React from 'react';

import Head from 'next/head';

// STORE
import Connect from '../src/store/config/connect';

// COMPONENTS
import Loader from '../src/components/UI/Loader';

const Home = ({ loading }) => {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            {loading ? (
                <Loader />
            ) : (
                <p style={{ textAlign: 'center', marginTop: '350px' }}>
                    Bem vindo ao Mercado Livre
                </p>
            )}
        </div>
    );
};

const mapStateToProps = ({ loading }, props) => {
    return {
        loading,
        ...props
    };
};

export default Connect(mapStateToProps)(Home);
