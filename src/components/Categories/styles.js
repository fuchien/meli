import styled from 'styled-components';

import media from '../../global/media_screen';

export const Container = styled.div`
    min-width: 100%;
    padding: 20px 0 20px 20px;
    background-color: #eee;
    ${media.SCREEN_1232`
        padding: 20px 200px 20px 200px;
    `}

    .items__categories {
        display: flex;
        .category__arrow {
            margin: 0 10px;
        }
    }
`;
