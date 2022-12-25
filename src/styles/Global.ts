import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --color-white: #FFFFFF;
        --color-detail: #aa8232;
        --color-header: #FDFDFD; 
        --color-red: #b90032;
        --color-beige: #E1DCD5; //search-bar and footer
        --color-buy-info: #F5F8FA;
        --color-card: rgba(247, 247, 247, 0.5);
        --color-card-border: #F2F2F2;
        --color-buy-button: #F2994A; 
        --color-black: #000000;
        --color-grey: #333333;
        --color-detail-2: #009baa;
        --color-carousel: #bdbdbd;
        --color-dark-blue: #00002D;
        

        
        --shadow-main-header: 0px 4px 10px rgba(0, 0, 0, 0.08);
        --shadow-buy-info: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        
        --font-open: 'Open Sans', sans-serif;
        --font-oswald: 'Oswald', sans-serif;
        --font-playfair: 'Playfair Display', serif;
        --font-roboto: 'Roboto', sans-serif;
        --font-montserrat: 'Montserrat', sans-serif;

        @font-face {
            font-family: Aktiv;
            src: url('src/assets/fonts/AktivGrotesk-Regular.ttf');
        }

        @font-face {
            font-family: Aktiv;
            src: url('src/assets/fonts/AktivGrotesk-Bold.ttf');
            font-weight: bold;
        }
    }

    *{
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
    box-sizing: border-box;
    font-family: var(--font-open);
    }

    body{
        background-color: var(--color-white);
    }

    a, button{
        cursor: pointer;
        outline: none;
        text-decoration: none;
        color: var(--color-black);
        background: none;
        border: none;

    }

    figcaption{
    display: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }
`;
