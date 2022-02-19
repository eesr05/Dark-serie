import { Container, Containergrid } from "./styles"
import onde from './image-onde'
export default function Onde(){
    return(
        <>
            <Container>
            <p> Onde </p>
            {onde.map((image)=>{
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