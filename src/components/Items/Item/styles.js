import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .item__img {
        width: 100%;
        height: auto;
        flex: 1;
    }

    .item__content {
        align-self: flex-start;
        margin-left: 20px;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        justify-content: space-between;
        flex: 5;

        .item__price,
        .item__description {
            margin-top: 10px;
        }
    }

    .item__address {
        display: flex;
        flex: 1;
    }
`;
