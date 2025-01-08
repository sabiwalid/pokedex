/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getPokemonQuery } from "../api/pokemonApi";

const Description = ({ idOrName }: { idOrName: string | undefined }) => {
  const {
    data: descriptions,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["pokemon-test", idOrName],
    queryFn: () => getPokemonQuery(idOrName as string),
    enabled: !!idOrName,
    staleTime: Infinity,
  });
  function getFlavorTextString(data: any): string {
    const flavorTexts =
      data?.data.pokemon_v2_pokemonspecies[0]
        ?.pokemon_v2_pokemonspeciesflavortexts;

    const uniqueTexts = Array.from(
      new Set(
        flavorTexts?.map((entry: { flavor_text: string }) => entry.flavor_text)
      )
    );

    const cleanedTexts = uniqueTexts
      .slice(0, 2)
      .map((text: any) => text.replace(/\n|\f/g, " "));

    return cleanedTexts.join(" ");
  }

  const resultString = getFlavorTextString(descriptions);

  if (isLoading) {
    return (
      <span
        className="loading loading-spinner loading-lg"
        role="spinner"
      ></span>
    );
  }

  if (error || !resultString) {
    return (
      <p
        className="p-4 text-pokemon font-normal w-[972px] h-[46px] text-center font-abel"
        aria-label="desc"
      >
        No Description Found!
      </p>
    );
  }
  return (
    <p className="p-4 text-pokemon font-normal w-[972px] h-[46px] font-abel">
      {resultString}
    </p>
  );
};

export default Description;
