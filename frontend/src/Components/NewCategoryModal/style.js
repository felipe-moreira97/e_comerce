import styled from 'styled-components'

export const NewCategoryModal = styled.div`
    display: inline-block;
    position:absolute;
    margin:0;
`
export const Modal = styled.div`
    top:-100%;
    right:0;
    position:relative;
    display: inline-block;
    margin:0;
    background: #ccc;
    border: 1px solid black;
    border-radius: 15px;
    display: ${({ display }) => display ? 'block' : 'none'};
`
