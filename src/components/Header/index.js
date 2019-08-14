import React from 'react';
import PropTypes from 'prop-types';

// STYLED-COMPONENTS
import { Container } from './styles';

const Header = ({
    handleSubmitForm,
    handleInputChange,
    handleImgClick,
    value
}) => {
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
};

Header.propTypes = {
    handleSubmitForm: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleImgClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default Header;
