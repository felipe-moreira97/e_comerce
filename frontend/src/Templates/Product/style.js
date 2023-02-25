import styled from "styled-components";

export const Product = styled.div`
    max-width: 90%;
    margin:5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    gap: 2rem;
    img {
        height: 100%;
        width: 100%;
        margin: auto;
        max-width:360px;
    }
    div {
        width: 40%;
        max-width: 32rem;
        display: flex;
        flex-direction: column;
        align-items: right;
        gap: 2rem;
    }
    h2,h3,h4,p {
        margin: 0;
    }
    @media (max-width: 716px) {
            flex-direction: column;
            margin: 3rem;
    }
    div {
        width: 80%;
    }
`
