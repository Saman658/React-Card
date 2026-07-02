import Destination from "./components/DestinationCard";
import destinations from "./data/destination";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Popular Travel Destinations
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {destinations.map((place) => (
          <Destination key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}

export default App;