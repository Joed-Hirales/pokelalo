import { Col, Button, Card } from 'react-bootstrap';
import '../Components/css/diseñoCarta.css';

function PokemonCard({ name, brief, image }) {
  return (
      <Col lg={3}  md={6} sm={12}>
      <Card className='card-pokemon'>
        <Card.Img variant="top" src={image} className='img-pokemon' />
        
      </Card>
      </Col>

  );
}

export default PokemonCard;