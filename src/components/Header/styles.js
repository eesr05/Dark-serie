import styled from 'styled-components'

export const Head = styled.div`
overflow-x: hidden;
position: relative;
  img{
    position: relative;
    left: 50%;
    right: 50%;
    margin-top: -5%;
    margin-left: -50vw;
    margin-right: -50vw;
    width: 102%;     
  }
  
  p{
    z-index: 1;
    color: white;
    font-size:9rem;
    position: absolute;
    letter-spacing:15px;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  
    &:nth-child(1) {
      color: red;
      font-size: 1.5rem;
      letter-spacing: 0;
      top: 20%;
    }
    &:nth-child(3) {
      color: red;
      font-size: 1rem;
      top:50%;
      text-transform:uppercase;
      letter-spacing: 0;
      color: white;
    }
    
  }
  button{
      z-index: 2;
      position: absolute;
      top: 85%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: red;
      background: none;
      border: none;
      
      img{
        width:100px;
        height:100px;
      }
    }
  
`