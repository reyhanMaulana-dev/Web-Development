import React, { useEffect, useState } from "react";
import CardLayout from "../components/CardLayout";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true); // mulai loading
        const response = await fetch("https://api.jikan.moe/v4/anime?limit=20");
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const { data } = await response.json();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // selesai loading
      }
    };

    fetchMovies();
  }, []);

  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading anime...</p>
      </div>
    );
  }

  
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#E1E1E1] p-5 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Anime List</h1>
      <div className="flex flex-wrap gap-1.5">
        {movies.map((movie) => (
          <CardLayout
            key={movie.mal_id}
            title={movie.title}
            image={movie.images.jpg.large_image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
