import styled from 'styled-components'

export const Container = styled.div`
     margin: 500px; 
    height:900px;
    background:var(--background);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align:center;
    margin-bottom:100px;
    p, img{
        color: var(--shape);
        font-size: 2.7rem;
        position: absolute;
        z-index: 2;
        left: 47%;
        top: 129%;
        letter-spacing: 10px;   
        display: inline-block;    
    }
    img{
        z-index: 1;
        top:126%;
        left:46.5%;
        height:17%;
    }

    .Quem{
        position: relative;        
        left: 3%;
        top: 20px;
        height:11rem;
        margin-bottom: 45px;        
       
    }
    .Quem-Nome{
        position: absolute;
        font-size:12px;
        left: 4%;
        color: var(--shape);        
        top: 11rem;
        margin-top:1.5rem;
        letter-spacing:normal;            
    }
   
`
export const Containergrid = styled.div`  
    position: relative;
    display: grid; 
`