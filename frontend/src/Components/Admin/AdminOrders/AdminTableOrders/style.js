import styled from "styled-components";

export const TableOrders = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    table {
        margin-top: 3rem;
        border-collapse: collapse;
        box-shadow: 10px 10px 20px #333;
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
`
