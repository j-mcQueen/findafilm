import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import Movie from "./Movie";

export default function Results({ ...props }) {
  const { results } = props;

  interface IMovie {
    genre: string[];
    rating: number;
    title: string;
    url: string;
  }

  return (
    <main>
      <Header input={results.input} />

      <section className="xl:grid xl:grid-cols-3 xl:gap-10 p-5">
        {results.chosen.map((movie: IMovie, index: number) => {
          return (
            <Movie
              key={uuidv4()}
              movie={movie}
              premise={results.premises[index].premise}
            />
          );
        })}
      </section>
    </main>
  );
}
