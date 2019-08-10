import styled from 'styled-components';

// CSS
import { PageContainer } from '../../global/page_container';

export const Container = styled(PageContainer)`
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
    }
`;
