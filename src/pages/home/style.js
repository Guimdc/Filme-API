import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;

    h1 {
        text-align: center;
    }
    h6 {
        text-align: center;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: solid 1px black;
    border-radius: 10px;
    box-shadow: 10px 10px 19px -8px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 19px -8px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 19px -8px rgba(0,0,0,0.75);
    img {
        width: 180px;
    }
    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }
    a {
        transition: all 0.3s;
    }
    a:hover {
        transform: scale(1.1);
    }
`;

export const Btn = styled.button`
width:140px;
  height:50px;
  border-width:1px;
color:#3a8a9e;
border-color:#d6bcd6;
font-weight:bold;
border-top-left-radius:15px;
border-top-right-radius:15px;
border-bottom-left-radius:15px;
border-bottom-right-radius:15px;
box-shadow: 3px 4px 0px 0px #899599;
text-shadow: 0px 1px 0px #e1e2ed;
background:linear-gradient(#ededed, #bab1ba);
margin-bottom: 10px;
`;
