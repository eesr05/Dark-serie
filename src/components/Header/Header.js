import React from 'react';
import {Head} from './styles'
import img from '../../assets/hero.jpg'
import img2 from '../../assets/arrow.png'
import ScrollToTop from 'react-scroll-to-top';


export default function Header(children) {
  return(
    <>
    <Head>
        <div>
          <p>Original Netflix</p>
          <p>DARK</p>
          <p>Tudo está conectado</p>    
          <img src={img} alt="" srcset="" /> 
          <button>
            <ScrollToTop smooth component={<p></p>}/>
            <img src={img2} alt="" srcset></img>
          </button>
        </div>  
    </Head>   
    </>
  )
}