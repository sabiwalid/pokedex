import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.SyntheticEvent, type: "search" | "random") => {
    e.preventDefault();

    const trimmedQuery = query.trim();

    if (type === "search" && trimmedQuery) {
      navigate(`/pokemon/${trimmedQuery.toLowerCase()}`);
    } else if (type === "random") {
      const randomId = Math.floor(Math.random() * 100) + 1;
      navigate(`/pokemon/${randomId}`);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-home-pikachu min-h-screen">
      <div className="flex flex-col min-w-96 mx-auto">
        <div className="w-full p-6 rounded-xl shadow-md border border-primary bg-white">
          <form
            onSubmit={(e) => handleSubmit(e, "search")}
            className="flex flex-col space-y-4 justify-center items-center"
          >
            <img
              className="size-20"
              src="/images/pokeball.png"
              alt="pokeball"
            />
            <span className="text-secondary text-start">
              Pokemon Name or id
            </span>
            <input
              className="input bg-white border border-gray-300 text-black"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              role="textbox"
            />
            <div className="flex space-x-4">
              <button
                className="btn bg-button text-white border-0"
                type="submit"
              >
                Search
              </button>
              <button
                className="btn bg-button text-white border-0"
                type="submit"
                onClick={(e) => handleSubmit(e, "random")}
              >
                Random
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
