import styled from 'styled-components';
import {AiOutlineSearch as Search} from 'react-icons/ai';

export const Form = styled.form`
width: (100vw)/2;
background-color: #0e0220;
padding: 3rem;


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
    margin:5rem 2rem;

    @media screen and (max-width:768px){
        display: flex;
        flex-direction: column;
    }
`