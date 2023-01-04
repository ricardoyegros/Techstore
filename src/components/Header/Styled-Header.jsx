import styled from "styled-components";

export const NavStyled = styled.nav`
    background-color: red;
    color: white;
    ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
        li{
            text-decoration: none;
        }
    }
`;