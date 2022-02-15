import styled from "styled-components";

export const Navbar = styled.nav`
    width: 100%;
    top: 0;
    height: 115px;
    border-bottom: 1px solid;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
     background-color:var(--background); 
    color: var(--shape)
`
export const Logo = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:15px;
        height:30px;
        position:absolute;
        margin: 0 45px 0 0 ;    
        right: 0;
    }
    p{        
        color:red;
        display: inline-block;
        padding: 12px;
        margin: 0 0 0 45px;
        align-items: left;
        margin-top: 12px;
    }  
    li{
        color: white;
        display: inline-block;
        padding: 1rem;
        margin: 0 -10rem 0 25rem;
        align-items: center;
        margin-top: 12px;
    }
   
`

