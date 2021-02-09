import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg'

export const Nav = styled.nav`
    background: #0e0220;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw-1000px) /2);
    z-index: 10;
`
export const NavLink = styled(Link)`
    color: #e40475;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: e40475;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #e40475;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor:pointer
    }
`

export const Profile = styled(CgProfile)`
    color: #e40475;
`

export const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right:-24px;

    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items:center;
    margin-right: 24px;

    @media screen and (max-width:768px){
        display:none
    }
`

export const NavBtnLink = styled(Link)`
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
        background:#48e0e4;
        transition: all 0.2s ease-in-out;
        color:#0e0220;
    }
`