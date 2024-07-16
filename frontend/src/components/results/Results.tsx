import Header from "./Header";
import Movie from "./Movie";

export default function Results({ ...props }) {
  const { results } = props;

  return (
    <main>
      <Header input={results.input} />

      <section className="xl:grid xl:grid-cols-3 xl:gap-10 p-5">
        <Movie />
      </section>
    </main>
  );
}
