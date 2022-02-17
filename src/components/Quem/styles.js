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
    top: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;
    .Quem{
        position: relative;
    left: 8%;
    top: 200px;

    }
    .Quem-Nome{
        font-size:12px;
    }

`