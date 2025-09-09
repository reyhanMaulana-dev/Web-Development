import React, { useEffect, useState } from 'react'
import CardLayout from '../components/CardLayout';

const Home = () => {
  const [anime, setAnime] = useState([])

  useEffect(() =>{
    const fetchAnime = async () => {
      const response = await fetch("https://api.jikan.moe/v4/anime?page=6&limit=10")
      const { data }  = await response.json()
      
      const mappedAnime = data.map(item =>({
        title: item.title,                                
        year: item.year || "Unknown",  
        duration: item.duration || "N/A",                 
        genre: item.genres?.[0]?.name || "Unknown",       
        rating: Math.round((item.score || 8) / 1),        
        thumbnail: item.images.jpg.large_image_url,
        description: item.synopsis || "No description available.",
        trailer: item.trailer.url
      }));
      
      setAnime(mappedAnime)
    }

    fetchAnime()
  },[])

  return (
    <div className="min-h-screen bg-gray-200 font-poppins p-6">
      {anime.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-3">
          {anime.map((anime, idx) => (
            <CardLayout key={idx} movie={anime} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
