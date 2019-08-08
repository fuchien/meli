import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    html,
    body {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    #__next,
    html,
    body {
        height: 100%;
    }
`;
