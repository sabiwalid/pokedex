import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.SyntheticEvent, type: "search" | "random") => {
    e.preventDefault();

    if (type === "search") {
      navigate(`/pokemon/${query.toLowerCase()}`);
    } else if (type === "random") {
      const randomId = Math.floor(Math.random() * 100) + 1;
      navigate(`/pokemon/${randomId}`);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-home-pikachu">
      <div className="flex flex-col min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-white">
          <form
            onSubmit={(e) => handleSubmit(e, "search")}
            className="flex flex-col space-y-4 justify-center items-center"
          >
            <img
              className="size-20"
              src="/images/pokeball.png"
              alt="pokeball"
            />
            <span className="text-black">Pokemon Name or id</span>
            <input
              className="input bg-white border border-gray-300 text-black"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="flex space-x-2">
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
