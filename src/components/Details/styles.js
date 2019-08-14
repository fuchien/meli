import styled from 'styled-components';

import media from '../../global/media_screen';

// CSS
import { PageContainer } from '../../global/page_container';

export const Container = styled(PageContainer)`
    padding-top: 50px;
    ${media.SCREEN_1232`
        padding-top: 50px;
    `}
    .details {
        width: 100%;
        background-color: #fff;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        padding: 20px;

        .details__header {
            width: 100%;
            display: flex;
            flex-flow: column;
            align-items: center;
            ${media.SCREEN_667`
                flex-flow: row;
                justify-content: space-between;
                align-items: flex-start;
            `}

            .details__img__content {
                ${media.SCREEN_667`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex: 3;
                `}
                .details__img {
                    width: 200px;
                    ${media.SCREEN_667`
                        width: 250px;
                    `}
                    ${media.SCREEN_812`
                        width: 300px;
                    `}
                    ${media.SCREEN_1024`
                        width: 320px;
                    `}
                    ${media.SCREEN_1440`
                        width: 330px;
                    `}
                }
            }

            .details__content {
                display: flex;
                flex-flow: column;
                align-items: flex-start;
                ${media.SCREEN_667`
                    flex: 1;
                `}

                .details__title {
                    font-size: 20px;
                    font-weight: bold;
                    margin: 8px 0 12px 0;
                }

                .details__price {
                    font-size: 30px;
                    font-weight: bold;
                }

                .details__buy__button {
                    margin-top: 20px;
                    padding: 10px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    border: none;
                    width: 100%;
                    background-color: #3483fd;

                    span {
                        text-transform: lowercase;
                        &::first-letter {
                            text-transform: uppercase;
                        }
                    }

                }
            }
        }

        .details__description__content {
            display: flex;
            flex-flow: column;

            .details__description__title {
                padding-left: 5px;
            }

            .details__description__text {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                line-height: 16px; /* fallback */
                max-height: 86px; /* fallback */
                -webkit-line-clamp: 5; /* number of lines to show */
                -webkit-box-orient: vertical;
                padding: 5px;
            }
        }
    }
`;
