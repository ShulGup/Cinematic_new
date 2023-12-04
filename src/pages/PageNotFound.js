import React, { useEffect } from "react";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found/Cinemate`;
  });
  return (
    <main>
      <img
        className="rounded-t-lg"
        src="https://previews.123rf.com/images/juliatim/juliatim1612/juliatim161200019/68893341-404-error-page-not-found-concept-illustration-of-people-using-laptops-having-problems-with-website.jpg"
        alt="No_images"
      />
      <Link to="/">
        <Button>Back to cinematic</Button>
      </Link>
    </main>
  );
};
