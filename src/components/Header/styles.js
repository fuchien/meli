import styled from 'styled-components';

import media from '../../global/media_screen';

export const Container = styled.div`
    min-width: 100vw;
    height: 56px;
    display: flex;

    .header {
        flex: 1;
        background-color: rgb(255, 230, 0);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 50px;

        ${media.SCREEN_1232`
            padding: 0 200px;
        `}

        .header__img {
            cursor: pointer;
            background-size: 44px 31px;
            width: 44px;
            height: 32px;
        }

        form {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            .header__input {
                display: flex;
                margin-left: 18px;
                padding: 8px;
                outline: none;
                flex: 1;
                border: none;
            }

            button {
                padding: 6px;
                height: 31px;
                border: none;
            }
        }
    }
`;
