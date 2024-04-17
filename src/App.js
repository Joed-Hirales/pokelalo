
import "./App.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Image,
} from "react-bootstrap/";
import { useEffect, useState } from "react";
import Encabezado from "./Components/Encabezado.js";
import Finder from "./Components/Finder.js";
import PokemonCard from "./Components/PokemonCard.js";
import pokemonData from "./pokemonData.js";

function App() {
  const [nombre, setNombre] = useState("Nombre");
  const [name, setName] = useState("Nombre");
  const [pokemon, setPokemon] = useState("");

  return (
    <div className="App">
      <Container>
        <div className="contenedor-encabezado">
          <Encabezado logo={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/1280px-International_Pokémon_logo.svg.png'} titulo={"HiralesNúñez"} />
        </div>

        <div className="contenedor-finder">
          <Finder texto={"Buscar Pokemon"} foundPokemon={setPokemon} />
        </div>

        <div className="contendor-cartas">
          <Row className="row">
               
              
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
