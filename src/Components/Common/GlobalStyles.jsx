import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html {
        font-size: 10px;
    }
    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    input, button {
        outline: none; 
        border: none;
        background-color: transparent;                                                                                                                                                                        
    }
    input:focus, button:focus {
        outline: none;
    }
    button {
        cursor: pointer;
    }
`;

export default globalStyles;
