import React, { useState, useEffect } from "react";

const FindMovie = () => {
  const [movieData, setMovieData] = useState([]);
  const [MovieTitle, setMovieTitle] = useState();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const URL = `http://www.omdbapi.com/?s=${MovieTitle}&apikey=f2c67f94`;
      const response = await fetch(URL);
      const final_Data = await response.json();
      console.log(final_Data.Search);
      setMovieData(final_Data.Search);
    };
    fetchMovies();
        // eslint-disable-next-line
  }, [isClicked]);
  return (
    <>
      <div>
        <div className="header">
          <h2>Movies</h2>
        </div>
        <div className="body">
          <input
            type="text"
            name="search"
            placeholder="Search Your Favourite Movies"
            onChange={(e) => {
              setMovieTitle(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setIsClicked((prevState) => !prevState);
            }}
            className="searchBtn"
          >
            Search
          </button>
        </div>
        <div className="body-container">
        </div>
        <div className="display">
          {movieData.map((item, i) => {
            return (
              <div key={i} className="display-cards">
                <img src={item.Poster} className="picture" alt="poster"/>
                <h4>{item.Title}</h4>
                <p>Year- {item.Year}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="footer">
        <h3>Powerd By @ Harsh Dhande</h3>
      </div>
    </>
  );
};

export default FindMovie;