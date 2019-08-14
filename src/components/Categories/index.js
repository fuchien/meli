import React from 'react';

// STYLED-COMPONENTS
import { Container } from './styles';

const Categories = ({ categories }) => (
    <Container>
        <div className="items__categories">
            {categories.map((categorie, index) => (
                <span key={categorie + index}>
                    {index === categories.length - 1 ? (
                        <strong>{categorie}</strong>
                    ) : (
                        categorie
                    )}{' '}
                    {index === categories.length - 1 ? null : (
                        <span className="category__arrow"> ></span>
                    )}
                </span>
            ))}
        </div>
    </Container>
);

export default Categories;
