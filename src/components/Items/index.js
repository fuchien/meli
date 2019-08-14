import React from 'react';
import PropTypes from 'prop-types';

// STYLED-COMPONENTS
import { Container } from './styles';

// COMPONENTS
import Item from './Item';

const Items = ({ data, handleItemClicked }) => (
    <Container>
        <div className="items">
            {data.items.length ? (
                <ul className="items__list">
                    {data.items.map(result => (
                        <li
                            key={result.id}
                            onClick={() => handleItemClicked(result.id)}
                            className="items__list__item"
                        >
                            <Item result={result} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="items__empty__error">Nenhum item achado</p>
            )}
        </div>
    </Container>
);

Items.propTypes = {
    data: PropTypes.shape().isRequired,
    handleItemClicked: PropTypes.func.isRequired
};

export default Items;
