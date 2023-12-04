import React, { useEffect } from "react";

export const useFetch = (api_path, queryTerm = "") => {
  const [data, setData] = React.useState([]);
  const key = "1ed87d77314770a23462a892087e137b";
  const url = `https://api.themoviedb.org/3/${api_path}?api_key=${key}&query=${queryTerm}`;

  useEffect(() => {
    async function moviefetch() {
      const movie = await fetch(url);
      const moviedata = await movie.json();
      setData(moviedata.results);
    }
    moviefetch();
  }, [url]);

  return { data };
};
