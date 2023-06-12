import { useEffect, useState } from "react";

const PopularClass = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12">
        <div className="container mx-auto flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl font-bold mb-4">Popular Classes</h2>
          <p className="text-lg mb-8">Discover our most sought-after classes!</p>
          <button className="bg-white text-indigo-600 py-3 px-8 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out">
            Explore Now
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {games.map((game) => (
          <div key={game._id} className="game-card bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <img src={game.image} alt={game.name} className="mb-4 object-cover h-40 rounded-lg shadow-md" />
            <div>
              <h3 className="text-2xl font-bold mb-2">{game.name}</h3>
              <p className="text-gray-600">Instructor: {game.instructorName}</p>
              <p className="text-gray-600">Available Seats: {game.availableSeats}</p>
            </div>
            <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
