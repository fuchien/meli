import React, { useState, useEffect } from 'react';
import { Router } from '../../../routes';

// STORE
import Connect from '../../store/config/connect';
import { turnLoadingOn } from '../../store/ducks/products';

// COMPONENTS
import HeaderUI from '../../components/Header';

const Header = props => {
    const [value, setValue] = useState('');

    const handleInputChange = e => {
        setValue(e.target.value);
    };

    const handleImgClick = () => {
        Router.pushRoute('/');
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        props.dispatch(turnLoadingOn());
        Router.pushRoute(`/items/?search=${value}`);
    };

    const handleQuery = () => {
        const queryString = window.location.search;
        const params = new URLSearchParams(queryString);
        const search = params.get('search');
        if (search) {
            setValue(search);
        }
    };

    const handlerHomePage = () => {
        if (Router.route.includes('/home')) {
            Router.pushRoute('/');
        }
    };

    useEffect(() => {
        handleQuery();
        handlerHomePage();
    }, []);

    return (
        <HeaderUI
            handleImgClick={handleImgClick}
            handleSubmitForm={handleSubmitForm}
            value={value}
            handleInputChange={handleInputChange}
        />
    );
};

export default Connect()(Header);
