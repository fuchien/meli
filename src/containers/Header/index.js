import React, { useState, useEffect } from 'react';
import { Router } from '../../../routes';

// COMPONENTS
import HeaderUI from '../../components/Header';

export default function Header() {
    const [value, setValue] = useState('');

    const handleInputChange = e => {
        setValue(e.target.value);
    };

    const handleImgClick = () => {
        Router.pushRoute('/');
    };

    const handleSubmitForm = e => {
        e.preventDefault();
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

    useEffect(() => {
        handleQuery();
    }, []);

    return (
        <HeaderUI
            handleImgClick={handleImgClick}
            handleSubmitForm={handleSubmitForm}
            value={value}
            handleInputChange={handleInputChange}
        />
    );
}
