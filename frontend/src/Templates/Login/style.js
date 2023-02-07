import styled from "styled-components";

export const Login = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    max-width: 90%;
    margin:auto;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        background-color: #f1f7fe;
        padding: 3rem;
        border: 1px solid #333333;
        border-radius: 15px;
        box-shadow: 5px 5px 15px #555;

        h2 {
            margin: 0;
            text-transform: uppercase;
            font-weight:750;
        }
        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            background: #ffffff;
	        box-shadow: 0 0 1em #e6e9f9;
	        padding: .8em;
            gap: 0.5em;
	        border-radius: 20px;
	        color: #3b3b3b;

            label {
                font-size: .8rem;
            }
            input {
                outline: none;
	            border: none;
            }
        }
        & div:last-child {
            font-size: .8rem;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`
