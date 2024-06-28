import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components/Card";
import { useSearchParams } from "react-router-dom";

export const Search = ({ api_path }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(api_path, queryTerm);
  useTitle(`search for ${queryTerm}`);

  return (
    <main>
      <section className="py-7">
        <p>search_data</p>
        <p>
          {movies.length === 0
            ? `no result found for ${queryTerm}`
            : `result found for ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
