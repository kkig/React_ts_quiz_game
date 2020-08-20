import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/bg_sarah-boudreau.jpg';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    html {
        height: 100%;
        width: auto;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: 'Roboto Slab', serif;
        background-image: linear-gradient(180deg, #fff, #face1e);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-background-fill-color: transparent;
        filter: drop-shadow(2px 2px #f2ae2e);
        font-size: 70px;
        font-weight: 400;
        letter-spacing: .075em;
        text-align: center;
        margin: 20px;

        color: transparent;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #ffb691, orangered);
        border: 2px solid orangered;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        height: 3em;
        margin: 1.5em 0;
        padding: 0 3em;

        text-transform: uppercase;
        letter-spacing: .05em;
    }

    .start {
        max-width: 200px;
    }
`;