import styled from "styled-components";
export const Container = styled.div`
   
   border: 1px solid red;
   margin-top:150rem;
    height:900px;
    background:var(--background);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align:center;
    p, img{
        color: var(--shape);
        font-size: 2.7rem;
        position: relative;
        z-index: 2;
        left: 47%;
        top: 129%;
        letter-spacing: 10px;   
        /* display: inline-block;     */
    }
    img{
        z-index: 1;
        top:12%;
        left:46.5%;
        height:17%;
    }

    .Quem{
        position: relative;        
        left: 3%;
        top: 170rem;
        height:11rem;
        margin-bottom: 45px;        
       
    }
    .Quem-Nome{
        position: absolute;
        font-size:12px;
        left: 4%;
        color: var(--shape);        
        top: 190rem;
        margin-top:-2rem;
        letter-spacing:normal;            
    }
   
`
export const Containergrid = styled.div`  
    position: relative;
    display: grid; 
`