import React from 'react';

// STYLED-COMPONENTS
import { Container } from './styles';

// COMPONENTS
import Item from './Item';

const Items = ({ data }) => {
    const showResults = results => {
        return (
            <ul className="items__list">
                {results.map(result => (
                    <li key={result.id} className="items__list__item">
                        <Item {...result} />
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <Container>
            <div className="items">
                {data.results.length ? (
                    showResults(data.results)
                ) : (
                    <p className="items__empty__error">Nenhum item achado</p>
                )}
            </div>
        </Container>
    );
};

export default Items;
