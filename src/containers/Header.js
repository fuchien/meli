import React, { useState } from 'react';
import Router from 'next/router';

// COMPONENTS
import HeaderUI from '../components/Header';

export default function Header() {
    const [value, setValue] = useState('');

    const handleInputChange = e => {
        setValue(e.target.value);
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        Router.push(`/items/?search=${value}`);
    };

    return (
        <HeaderUI
            handleSubmitForm={handleSubmitForm}
            value={value}
            handleInputChange={handleInputChange}
        />
    );
}
