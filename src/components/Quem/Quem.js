import { Container, Containergrid } from "./styles"
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
                        <Containergrid>
                        <img key={image.id} className="Quem" src={require(`${image.img}`)} alt={image.title}></img>
                        <p className="Quem-Nome">{image.title}</p>
                        </Containergrid>                  
                    )
            })}
        
        </Container>
       
       
        </>
    )
}