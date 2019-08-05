import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';

// CONTAINERS
import Header from '../src/containers/Header';

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
                <style jsx global>{`
                    *,
                    html,
                    body {
                        padding: 0px;
                        margin: 0px;
                        box-sizing: border-box;
                    }
                `}</style>
                <Header />
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default MyApp;
