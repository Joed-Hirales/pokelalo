import { useEffect, useState } from "react";
import { Row, InputGroup, Form, Button, Col, Card } from "react-bootstrap";

function Finder({ texto }) {
  const [name, setName] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    // Realizar una búsqueda inicial para mostrar todos los Pokémon
    getPokemonData("");
  }, []);

  function getPokemonData(filter = "") {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then((response) => response.json())
      .then((data) => {
        const pokemons = data.results.map((pokemon) => pokemon.name);

        // Filtrar los Pokémon según el nombre ingresado
        const filtered = pokemons.filter((pokemon) =>
          pokemon.toLowerCase().includes(filter.toLowerCase())
        );
        
        setFilteredPokemons(filtered);
      });
  }

  function handleSearch() {
    getPokemonData(name);
  }

  return (
    <Row>
      <h1>{name}</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Nombre del Pokémon"
          aria-label=""
          aria-describedby="basic-addon2"
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="primary" className="btnBuscar" id="button-addon2" onClick={handleSearch}>
          {texto}
        </Button>
      </InputGroup>

      <Row>
        {filteredPokemons.map((pokemonName, index) => (
          <Col lg={3} md={6} sm={12} key={index} className="mb-4">
            <Card className="Cartona" style={{ width: "18rem" }}>
              {/* Obtener la imagen del Pokémon desde la PokeAPI */}
              <Card.Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemonName} />
              <Card.Body className="cuerpoCarta">
                <Card.Title>{pokemonName}</Card.Title>
                {/* Puedes agregar una descripción breve del Pokémon aquí */}
                <Card.Text>
                  Descripción breve del Pokémon
                </Card.Text>
                <Button variant="primary">Ver</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Row>
  );
}

export default Finder;
