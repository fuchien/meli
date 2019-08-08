import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';

// CONTAINERS
import Header from '../src/containers/Header';

// STYLED-COMPONENTS
import { GlobalStyle } from '../src/global/styles';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta charSet="utf-8" />
                </Head>
                <GlobalStyle />
                <Header />
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default MyApp;
