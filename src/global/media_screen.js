import { css } from 'styled-components';

const sizes = {
    SCREEN_667: 667,
    SCREEN_812: 812,
    SCREEN_1024: 1024,
    SCREEN_1232: 1232,
    SCREEN_1440: 1440
};

export default Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label]}px) {
            ${css(...args)};
        }
    `;
    return acc;
}, {});
