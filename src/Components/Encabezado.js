import {
  Container,
  Image,
} from "react-bootstrap/";
import DiseñoEncabezado from "./css/DiseñoEncabezado.css";
function Encabezado({ logo }) {
  return (
    <Container>
      <div className="container-logo"> 

      <Image
        className="img-logo"
        src={logo}
        
      />
      </div>
    </Container>
    
  );
}

export default Encabezado;
