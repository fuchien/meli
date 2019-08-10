import styled from 'styled-components';

import media from './media_screen';

export const PageContainer = styled.div`
    width: 100vw;
    height: calc(100% - 56px);
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 50px 20px;
    ${media.SCREEN_1232`
        padding: 50px 200px;
    `}
`;
