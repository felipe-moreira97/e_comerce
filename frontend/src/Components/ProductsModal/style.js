import styled from "styled-components";

export const Modal = styled.div`
top: 0;
right: 0;
width: 100%;
height: 100vh;
position:absolute;
background: rgba( 255, 255, 255, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 13.5px );
-webkit-backdrop-filter: blur( 13.5px );
display: ${({ display }) => display ? 'block' : 'none'};
z-index:101;
    section {
        background-color: #979797;
        border: 1px solid #222;
        border-radius: 15px;
        max-width: 90%;
        margin:5rem auto;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-wrap: nowrap;
        gap:1.5rem;
    }
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin: 0;
        box-sizing: border-box;
        span {
            cursor:pointer;
        }
        h3 {
            margin:0;
        }
    }
    table {
        margin:0;
        border-collapse: collapse;
        th {
            background-color: #333;
            color: #ccc;
            padding: .5rem .5rem;
            text-align: center;
        }
        tbody tr:nth-child(odd) {
            background-color: #aaa;
        }
        tbody tr:nth-child(even) {
            background-color: #777;
        }
        td {
            padding: .25rem .25rem;
        }
    }
    img {
        max-height:6rem;
    }
`
