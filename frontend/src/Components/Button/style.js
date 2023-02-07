import styled, { css } from 'styled-components'

export const Button = styled.button`
    padding: .75rem 1rem;
    text-align: center;
    background-color: #0c50b6;
    color: #dadada;
    cursor: pointer;
    font-weight: 800;
    border: none;
    border-radius: 0;
    opacity:0.7;
    transition: opacity .2s;
    &:hover {
        opacity:1;
    }
    ${({secondary}) => secondary && css`
        border: 2px solid #0c50b6;
        background-color: transparent;
        color: #0c50b6;
    `}
    ${({disable}) => disable && css`
        background-color: #4b4b4b;
        border: 2px solid #dadada;
        color: #dadada;
        cursor:not-allowed;
        &:hover {
            box-shadow: none;
        }
    `}
    ${({small}) => small && css`
    font-size: .7rem;
    padding: .4rem .8rem;
    border-width: 1px;
    font-weight: 300;
    `}
    ${({red}) => red && css`
        background-color: #cf302a;
        border: none;
        color: #dadada;
    `}
    ${({link}) => link && css`
        background-color: transparent;
        font-size: 1rem;
        &;:hover {
            text-decoration: underline;
        }
    `}
    ${({color}) => color && css`
        color:${color}
    `}
`
