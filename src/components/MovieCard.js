import { useState } from "react";
import { Modal } from "./index";
const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="p-8"
      onClick={() => {
        setShowModal(true);
      }}
    >
      <Modal
        showModal={showModal}
        onClose={() => {
          console.log("[MovieCard.js] onClose called");
          setShowModal(false);
        }}
      />
      )
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.title}</p>
      <p>Year: {movie.Year}</p>
    </div>
  );
};

export default MovieCard;
