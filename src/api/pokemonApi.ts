import { execute } from "../gql/execute";
import { Pokemon_V2_Pokemon, Pokemon_V2_Pokemonspecies } from "../gql/graphql";

export const fetchPokemon = <T>(endpoint: string): Promise<T> => {
  return fetch(`https://pokeapi.co/api/v2/${endpoint}`).then((res) =>
    res.json()
  );
};

export const fetchPokemonSpecies = <T>(endpoint: string): Promise<T> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${endpoint}`).then(
    (res) => res.json()
  );
};

export const getPokemonQuery = (pokemonName: string) =>
  execute<{
    data: {
      pokemon_v2_pokemon: Pokemon_V2_Pokemon[];
      pokemon_v2_pokemonspecies: Pokemon_V2_Pokemonspecies[];
    };
  }>(
    `query {
   
    pokemon_v2_pokemonspecies(where: {name: {_eq: "${pokemonName}"}}) {
      pokemon_v2_pokemonspeciesflavortexts {
        flavor_text
      }
    }
  }
  `
  );
