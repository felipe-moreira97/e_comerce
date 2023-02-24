import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const card = styled.div`
    width: 10rem;
    margin:0;
    max-height: 32rem;
    margin: 1.5rem;
    overflow: hidden;
    box-shadow: 10px 10px 20px #333;
    background-color: #eee;
    cursor: pointer;

    div {
    width: 100%;
    height: 10rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(http://localhost:3001/${({ image }) => image ? image : theme.defaultImage});

}   div:hover {
    transform: scale(1.1);
    transition: all .3s ease-out;
}   h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin:0;
}   span {
    display: block;
    margin:0.2rem;
    border-bottom: 1px solid black;
}   p {
    font-size: 1.6rem;
    font-weight: 700;
    margin:0;
}
`
