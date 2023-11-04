import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 8px;
    margin-right: 15px;
    font-size: 16px;
`;

export const Button = styled.button`
    display: flex;
align-items: center;
justify-content: center;
font-size: 18px;
width: 100px;
height: 36px;
border: none;
outline: none;
color: #4e2323;
background: #fff;
cursor: pointer;
position: relative;
z-index: 0;
border-radius: 10px;
border: 2px solid #000;

&:active{
    color: #000;
}



&:hover:{
    color: #4e2333;
}


`;