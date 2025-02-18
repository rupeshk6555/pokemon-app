import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="pokemon-image"
        loading="lazy"
      />
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <div className="pokemon-types">
        {pokemon.types.map((type) => (
          <span key={type} className={`type ${type}`}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default React.memo(PokemonCard);
