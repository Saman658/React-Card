function Destination({ place }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-72 hover:shadow-2xl hover:scale-105 transition duration-300">
      
      <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">
        {place.name}
      </h2>

      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Country:</span> {place.country}
      </p>

      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Budget:</span> Rs. {place.budget}
      </p>

      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Duration:</span> {place.duration}
      </p>

      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Best Season:</span> {place.bestSeason}
      </p>

      <button
        className={`px-4 py-2 rounded-lg text-white ${
          place.budgetFriendly ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {place.budgetFriendly ? "Budget Friendly" : "Luxury Trip"}
      </button>

    </div>
  );
}

export default Destination;