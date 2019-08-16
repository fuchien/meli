import styled from 'styled-components';

import media from './media_screen';

export const PageContainer = styled.div`
    min-width: 100%;
    height: calc(100% - 56px);
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 20px 50px 20px;
    ${media.SCREEN_1232`
        padding: 0 200px 50px 200px;
    `}
`;
