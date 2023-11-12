import styled from "styled-components";
export const ButtonSection = styled.div`
display: flex;
gap: 30px;
justify-content: center;
margin-bottom: 30px;
`;
export const Button = styled.button`
width: 120px;
height: 50px;
font-size: 18px;
background-color: #9ED0F6;
border: none;
box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
&:hover {
    background-color: #33A3F7;
    cursor: pointer;
}`;