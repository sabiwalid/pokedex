import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router";
import { useState } from "react";
import { fetchPokemon } from "../api/pokemonApi";
import { typeColors } from "../types/colors";
import Evolutions from "../components/Evolutions";
import Description from "../components/Description";
import { Tabs } from "../components/Tabs";
import StatsComponent from "../components/stats";
import TypeBadge from "../components/typeColor";
import BackButton from "../components/BackButton";

type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type PokemonData = {
  sprites: {
    front_default: string;
  };
  name: string;
  stats: Stat[];
  types: PokemonType[];
  id: number;
};

export default function Pokemon() {
  const { idOrName } = useParams<{ idOrName: string }>();
  const [activeTab, setActiveTab] = useState(1);

  const {
    data: pokemon,
    error,
    isLoading,
  } = useQuery<PokemonData>({
    queryKey: ["pokemon", idOrName],
    queryFn: () => fetchPokemon<PokemonData>(`/pokemon/${idOrName}`),
    enabled: !!idOrName,
    retry: false,
  });

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (error) {
    return <Navigate to="/404" />;
  }

  const backgroundColor =
    typeColors[pokemon?.types[0]?.type.name || "normal"] || "#9CA3AF";

  const tabs = [
    {
      label: "STATS",
      content: (
        <StatsComponent stats={pokemon?.stats} color={backgroundColor} />
      ),
    },
    {
      label: "EVOLUTIONS",
      content: <Evolutions id={pokemon?.id} color={backgroundColor} />,
    },
    {
      label: "MOVES",
      content: <span>Tab not implemented</span>,
    },
  ];

  return (
    <div
      className="h-screen w-screen flex flex-col"
      style={{ backgroundColor }}
    >
      {/* Header */}
      <div style={{ backgroundColor }} className="h-1/5 relative">
        {/* Back Button */}
        <BackButton className="left-8 top-6 absolute" />
      </div>

      {/* Content */}
      <div className="flex items-center justify-center h-4/5">
        <div className="flex flex-col h-full w-4/5 bg-white rounded-t-lg shadow-lg relative">
          {/* Pokemon Details */}
          <div className="flex flex-col items-center h-full">
            <img
              src={pokemon?.sprites.front_default}
              alt={pokemon?.name}
              className="size-60 max-w-sm absolute -top-[130px] mb-4"
            />
            <div className="mt-20 flex flex-col items-center">
              <h1 className="text-2xl text-[#4F4F4F] capitalize">
                {pokemon?.name}
              </h1>
              <div className="flex flex-wrap justify-center mt-4 gap-4">
                {pokemon?.types.map((type) => (
                  <TypeBadge key={type.type.name} type={type.type.name} />
                ))}
              </div>
            </div>

            {/* Description */}
            <Description idOrName={idOrName || ""} />

            {/* Tabs */}
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              backgroundColor={backgroundColor}
            />

            {/* Tab Content */}
            <div className="mt-6">{tabs[activeTab - 1].content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
