import styled from 'styled-components';

import media from '../../global/media_screen';

// CSS
import { PageContainer } from '../../global/page_container';

export const Container = styled(PageContainer)`
    .items {
        width: 100%;

        .items__list {
            background-color: #fff;

            li {
                cursor: pointer;

                &:hover {
                    transform: scale(1);
                    box-shadow: 14px 14px 30px 0px rgba(0, 0, 0, 0.3);
                }
            }
        }

        .items__empty__error {
            text-align: center;
            margin-top: 350px;
        }
    }
`;
