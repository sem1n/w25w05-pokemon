import { Link } from "react-router-dom";

export default function PokemonCard({ pokemon }) {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="relative cursor-poiter bg-white shadow-md rounded-2x1 p-4 flex flex-col items-center hover:scale-105 transition-transform"
    >
      <div className="absoulute top-2 left-2 bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-md">
        {pokemon.id}
      </div>

      <img src={pokemon.image} alt={pokemon.name} className="w-32 h-32 mb-2" />
      <p className="text-lg font-bold">{pokemon.name}</p>
      {/* <p className="text-gray-500">#{pokemon.id}</p> */}
    </Link>
  );
}
