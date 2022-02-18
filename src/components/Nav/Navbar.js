import React from 'react';
import  {Navbar, Logo}  from './styles'
import img from '../../assets/Nlogo.png'

export default function Nav (children) {
    return(
         <>
              <Navbar >      
                  <Logo>
                    <img src={img} alt="" srcset="" />
                    <p> Dark </p>
                    <ul>
                        <li>QUEM</li>
                        <li>O QUÊ</li>
                        <li>QUANDO</li>
                    </ul>
                  </Logo> 
                </Navbar>  
        </>      
    )
}