import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import StatusHandler from "./components/StatusHandler/StatusHandler";
import PokemonCard from "./components/PokemonCard/PokemonCard";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        const results = response.data.results;

        const pokemonData = await Promise.all(
          results.map(async (result) => {
            const response = await axios.get(result.url);
            return {
              id: response.data.id,
              name: result.name,
              image:
                response.data.sprites.other["official-artwork"].front_default,
              types: response.data.types.map((type) => type.type.name),
            };
          })
        );

        setPokemon(pokemonData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1 className="title">Pokédex</h1>
      <SearchBar onSearch={setSearchTerm} />
      <StatusHandler loading={loading} error={error} />

      <div className="pokemon-container">
        {filteredPokemon.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </div>
  );
};

export default App;
