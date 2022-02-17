import styled from 'styled-components'

export const Container = styled.div`
    margin: 500px;
    height:900px;
    background:var(--background);
    
    p, img{
        color: var(--shape);
        font-size: 2.7rem;
        position: absolute;
        z-index: 2;
        left: 47%;
        top: 129%;
        letter-spacing: 10px;       
    }
    img{
        z-index: 1;
        top:126%;
        left:46.5%;
        height:17%;
    }
   
`
export const ContainerCard = styled.div`
    position: relative;
    left: 8%;
    top: 100px;
    display: grid;
   border: 1px solid red;   
 
    text-align: center;
    
    .Quem{
        position: relative;
        left: 8%;
        top: 200px;
        height:10rem;
        margin-bottom: 45px;        
       
    }
    .Quem-Nome{
        font-size:12px;
        left: -5%;
        color: white;
        font-weight: 600;
        top: 150px;
        text-transform: uppercase;
        
    }

`