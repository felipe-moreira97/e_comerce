import styled from 'styled-components'

export const Footer = styled.footer`
    width: 100%;
    height: 8rem;
    color:#dadada;
    background-color: #222222;
    box-shadow: 0 -10px 20px #333;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 525px) {
        flex-direction: column;
    }
`
