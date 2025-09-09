import React from 'react'

// Thumbnail
const CardThumbnail = ({ src, alt }) => (
  <div className="relative w-[250px] h-full overflow-hidden">
    <img
      src={src}
      alt={alt}
      className="absolute w-full h-full object-cover"
    />
  </div>
);

// Stars
const Stars = ({ count }) => (
  <span className="flex space-x-1 -mt-2">
    {Array.from({ length: count }).map((_, i) => (
      <i key={i} className="fas fa-star text-yellow-400"></i>
    ))}
  </span>
);

// Body
const CardBody = ({ title, year, duration, genre, rating, description, trailer }) => (
  <div className="flex flex-col justify-between items-start w-[400px] p-8 text-[12px] text-gray-400">
    <span className="text-[22px] text-gray-100 font-semibold line-clamp-1">
      {title}
    </span>

    <p className="-mt-5 space-x-2">
      <span>{year}</span>
      <span>{duration}</span>
      <span>{genre}</span>
    </p>

    <Stars count={rating} />

    <p className="text-justify line-clamp-6">{description}</p>

    <a href="#" className="block text-yellow-400 -mt-6">
      Read more
    </a>

    <a href={trailer}>
      <button className="border-2 border-yellow-400 text-yellow-400 px-3 py-1 rounded-md transition duration-200 hover:bg-yellow-400 hover:text-black flex items-center space-x-2">
        <i className="fas fa-play"></i>
        <span>Watch Trailer</span>
      </button>
    </a>
  </div>
);

// Wrapper
const CardLayout = ({ movie }) => (
  <div className="w-[650px] h-[350px] flex overflow-hidden rounded-lg bg-black shadow-2xl">
    <CardThumbnail src={movie.thumbnail} alt={movie.title} />
    <CardBody
      title={movie.title}
      year={movie.year}
      duration={movie.duration}
      genre={movie.genre}
      rating={movie.rating}
      description={movie.description}
      trailer={movie.trailer}
    />
  </div>
);


export default CardLayout
