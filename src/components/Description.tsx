/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getPokemonQuery } from "../api/pokemonApi";

const Description = ({ idOrName }: { idOrName: string | undefined }) => {
  const { data: ljadid, error } = useQuery({
    queryKey: ["pokemon-test", idOrName],
    queryFn: () => getPokemonQuery(idOrName as string),
    enabled: !!idOrName,
    staleTime: Infinity,
  });
  //const flavorTextEntries = ljadid.data.flavor_text_entries;
  function getFlavorTextString(data: any): string {
    const flavorTexts =
      data?.data.pokemon_v2_pokemonspecies[0]
        ?.pokemon_v2_pokemonspeciesflavortexts;

    // Extract flavor texts and remove duplicates
    const uniqueTexts = Array.from(
      new Set(
        flavorTexts?.map((entry: { flavor_text: string }) => entry.flavor_text)
      )
    );

    // Clean up and get the first two unique texts
    const cleanedTexts = uniqueTexts
      .slice(0, 2)
      .map((text: any) => text.replace(/\n|\f/g, " "));

    // Combine the texts into a single string
    return cleanedTexts.join(" ");
  }

  // Example usage
  const resultString = getFlavorTextString(ljadid);
  console.log(resultString);
  if (error || !resultString) {
    return (
      <p className="p-4 color-[#4F4F4F] w-[972px] h-[46px] font-abel">
        No Description Found!
      </p>
    );
  }
  return (
    <p className="p-4 color-[#4F4F4F] w-[972px] h-[46px] font-abel">
      {resultString}
    </p>
  );
};

export default Description;
