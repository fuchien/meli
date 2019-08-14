import styled from 'styled-components';

import media from '../../global/media_screen';

// CSS
import { PageContainer } from '../../global/page_container';

export const Container = styled(PageContainer)`
    padding-top: 20px;
    ${media.SCREEN_1232`
        padding-top: 20px;
    `}
    .items {
        width: 100%;
        background-color: #fff;

        li {
            cursor: pointer;

            &:hover {
                transform: scale(1);
                box-shadow: 14px 14px 30px 0px rgba(0, 0, 0, 0.3);
            }
        }

        .items__empty__error {
            text-align: center;
            margin-top: 350px;
        }
    }
`;
