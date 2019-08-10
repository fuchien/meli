import React from 'react';

// STYLED-COMPONENTS
import { Container } from './styles';

export default function Header({
    handleSubmitForm,
    handleInputChange,
    handleImgClick,
    value
}) {
    return (
        <Container>
            <div className="header">
                <img
                    onClick={() => handleImgClick()}
                    className="header__img"
                    src="/static/images/Logo_ML.png"
                    alt="Mercado Livre"
                />
                <form onSubmit={handleSubmitForm}>
                    <input
                        autoFocus
                        type="text"
                        value={value}
                        onChange={handleInputChange}
                        className="header__input"
                        placeholder="Nunca dejes de buscar"
                    />
                    <button type="submit">
                        <img
                            className="header__search"
                            alt="Search icon"
                            src="/static/images/ic_Search.png"
                        />
                    </button>
                </form>
            </div>
        </Container>
    );
}
