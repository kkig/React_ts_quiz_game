import styles, { createGlobalStyle } from 'styled-components';
import BGImage from './images/bg_donny-jiang.jpg';

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


`