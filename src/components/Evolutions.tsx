import React from "react";
import { Pokemon_V2_Evolutionchain } from "../gql/graphql";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router";
import { execute } from "../gql/execute";

const Evolutions = ({
  id,
  color,
}: {
  id: number | undefined;
  color: string;
}) => {
  const ArrowSVG = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 98 12"
      className={className}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="4"
        d="M2 6h93.039M91.5 2.287 95.039 6M91.5 9.287 95.039 6"
      />
    </svg>
  );

  const getPokemonEvolutionChainQuery = (pokemonId: number) =>
    execute<{
      data: { pokemon_v2_evolutionchain: Pokemon_V2_Evolutionchain[] };
    }>(`
      query {
        pokemon_v2_evolutionchain(where: {pokemon_v2_pokemonspecies: {id: {_eq: ${pokemonId}}}}) {
          id
          pokemon_v2_pokemonspecies {
            id
            name
            pokemon_v2_pokemons {
              name
              pokemon_v2_pokemonsprites {
                id
                sprites
              }
            }
          }
        }
      }`);

  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemon-evolution-chain", id !== undefined ? id : 0],
    queryFn: () => getPokemonEvolutionChainQuery(id as number),
    enabled: !!id,
    staleTime: Infinity,
  });

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  console.log({ data });
  const evolutionChain = data?.data.pokemon_v2_evolutionchain[0];

  if (error || !evolutionChain) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="flex gap-6 items-center">
      {evolutionChain.pokemon_v2_pokemonspecies.map((species, index, arr) => {
        const pokemon = species.pokemon_v2_pokemons[0];
        const sprite = pokemon?.pokemon_v2_pokemonsprites[0]?.sprites;

        return (
          <React.Fragment key={species.id}>
            <div className="flex flex-col items-center">
              <div className="w-[107px] h-[107px]">
                <img
                  src={sprite?.front_default || "/images/default-pokemon.png"}
                  alt={species.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-bold capitalize text-center mt-2">
                {species.name}
              </h3>
            </div>
            {index < arr.length - 1 && (
              <ArrowSVG className="w-24 text-[backgroundColor]" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Evolutions;
