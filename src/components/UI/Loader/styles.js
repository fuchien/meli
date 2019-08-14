import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Container = styled.div`
    display: flex;
    position: relative;
    width: 64px;
    height: 64px;
    margin: 350px auto;
    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 51px;
        height: 51px;
        margin: 6px;
        border: 6px solid rgb(255, 230, 0);
        border-radius: 50%;
        animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: rgb(255, 230, 0) transparent transparent transparent;

        &:nth-child(1) {
            animation-delay: -0.45s;
        }
        &:nth-child(2) {
            animation-delay: -0.3s;
        }
        &:nth-child(3) {
            animation-delay: -0.15s;
        }
    }
`;
