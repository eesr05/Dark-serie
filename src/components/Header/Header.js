import React from 'react';
import {Head} from './styles'
import img from '../../assets/hero.jpg'


export default function Header(){
  return(
    <>
    <Head>
     <img src={img} alt="" srcset="" /> 
    </Head>
      
    </>
  )
}