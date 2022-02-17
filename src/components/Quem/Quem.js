import { Container, ContainerCard } from "./styles"
import logo from "../../assets/sic.png"
import imagem from "./image-quem"
export default function Quem(){
    return(
        <>
        <Container> 
        <p>QUEM</p>
        <img src={logo} alt="logo dark"></img>

        {imagem.map((image)=>{
            return(
                 <ContainerCard>
                     <img className="Quem" src={image.img} alt={image.title}></img>
                     <p key={image.id}className="Quem-Nome">{image.title}</p>
                    
                 </ContainerCard>   
            )
        })}
        
        </Container>
       
       
        </>
    )
}