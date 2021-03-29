import styled from 'styled-components';
import { AiOutlineSearch as Search } from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';

export const Form = styled.form`
background-color: #0e0220;
display: flex;
flex-direction: row;
margin: 0 1rem;
width:100%;


@media screen and (max-width: 768px){
    width: 75%;
}
`

export const SearchBar = styled.input`
    border-radius: 25px;
    font-size:1.5rem;
    border: 1px solid #de006f;
    color: #e40474;
    background-color: #0e0220;
    width:100%;
    
`

export const SearchBtn = styled.nav`
    display: flex;
    align-items:center;
    margin-right: 24px;
    justify-content:center;
    margin-top: 1rem;
    cursor: pointer;
`
export const SearchIcon = styled(Search)`
    color: #e40475;
    font-size:2rem;
`

export const MainImage = styled.img`
    width:50%;

    @media screen and (max-width:768px){
        width: 100%;
        align-items:center;
        justify-content: center;
    }
`

export const MainSearchSection = styled.div`
    display:flex;
    flex-direction:row;
     margin: 2rem;

    @media screen and (max-width:768px){
        display: flex;
        flex-direction: column;
    }
`
export const SearchBtnLink = styled.button`
    border-radius: 4px;
    background: #e40475;
    padding:10px 22px;
    margin-left: 0 0.5rem;
    color:#fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        background:#48e0e4;
        transition: all 0.2s ease-in-out;
        color:#0e0220;
    }
`

export const SearchImage = styled.img`
    // width:100%;
    // height: 100%;
    // float: left;
    width:  200px;
    height: 200px;
    object-fit: cover;
    display: block;
  margin-left: auto;
  margin-right: auto;

    // @media screen and (max-width:768px){
    //     width: 100%;
    //     align-items:center;
    //     justify-content: center;
    // }
`

export const Card = styled.div`
  margin: 1rem;
//   border: 1px solid #e40475;
text-align: center;
  justify-content: center;
  align-items:center;

`

export const GameLink = styled.button`
cursor:pointer;
justify-content: center;
align-items:center;

border-radius: 4px;
background: #e40475;
padding:10px 22px;
margin: 0 0.5rem;
color:#fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    border: 1px solid #e40475;
}
`