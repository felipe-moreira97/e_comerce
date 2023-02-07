import styled from "styled-components";

export const Span = styled.span`
    color:#dadada;
    font-weight: 800;
    width: 10rem;
    position: absolute;
    display: inline-block;
    padding: 1.5rem 1rem;
    transition: all 4s;
    box-sizing: border-box;
    right: 0;
    top:0;

    div {
        display: none;
        flex-direction: column;
        background-color: #333;
        position: relative;
        top:-50%;
        max-width: 10rem;
    }
    &:hover {
        div {
            display: flex;
            flex-direction: column;
        }
    }
`

