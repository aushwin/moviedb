import { NavBar, MovieList } from "./components/index";
import "./App.css";
import { useState } from "react";

import axios from "axios";

const API_KEY = "apikey=c0597ee2";
const API_BASE_URL = `http://www.omdbapi.com/?${API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchHandler = async (e) => {
    if (e.code === "Enter") {
      setIsLoading(true);
      const res = await axios.get(`${API_BASE_URL}&s=${inputValue}`);
      console.log(res.data.Search);
      setMovies(res.data.Search);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <NavBar
        search={searchHandler}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <MovieList isLoading={isLoading} movieList={movies} />
    </div>
  );
}

export default App;
