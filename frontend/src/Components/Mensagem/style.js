import styled from 'styled-components'

export const Mensagem = styled.div`
    width: 100%;
    height: 100vh;
    position:absolute;
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    display: ${({ display }) => display ? 'block' : 'none'};
    z-index: 100;
    div {
    position: absolute;
    top: 50%;
    display: inline-block;
    background-color: #979797;
    border: 1px solid #222;
    border-radius: 15px;
    padding: 2rem;
    transform: translate(-50%,-50%);
    }
    h2 {
    margin:0;
    }
`;
