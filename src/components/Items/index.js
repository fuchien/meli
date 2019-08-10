import React from 'react';

// STYLED-COMPONENTS
import { Container } from './styles';

// COMPONENTS
import Item from './Item';

const Items = ({ data, handleItemClicked }) => {
    return (
        <Container>
            <div className="items">
                {data.results.length ? (
                    <ul className="items__list">
                        {data.results.map(result => (
                            <li
                                key={result.id}
                                onClick={() => handleItemClicked(result.id)}
                                className="items__list__item"
                            >
                                <Item {...result} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="items__empty__error">Nenhum item achado</p>
                )}
            </div>
        </Container>
    );
};

export default Items;
