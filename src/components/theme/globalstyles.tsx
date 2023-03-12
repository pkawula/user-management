import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html, body {
        color: ${({ theme }) => theme.colors.dark};
        padding: 0;
        margin: 0;
        background-color: ${({ theme }) => theme.colors.light};
    }

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
