import { Routes, Route } from "react-router-dom";
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages";

import React from "react";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      {/* <div className="dark:bg-blue-500"> */}
      <Routes>
        <Route
          path="/"
          element={<MovieList api_path="movie/now_playing" title="Home" />}
        />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route
          path="movie/upcoming"
          element={<MovieList api_path="movie/upcoming" title="Upcoming" />}
        />
        <Route
          path="movie/top"
          element={<MovieList api_path="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="movie/popular"
          element={<MovieList api_path="movie/popular" title="Popular" />}
        />
        <Route path="search" element={<Search api_path="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
