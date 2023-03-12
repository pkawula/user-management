import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html, body {
        color: ${({ theme }) => theme.colors.darkGrey};
        padding: 0;
        margin: 0;
        background-color: ${({ theme }) => theme.colors.light};
    }

    body {
        padding: 30px;
    }

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
