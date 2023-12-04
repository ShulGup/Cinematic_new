import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ api_path, title }) => {
  const { data: movies } = useFetch(api_path);
  useTitle(title);

  return (
    <main>
      <p>Movie List</p>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap others:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
