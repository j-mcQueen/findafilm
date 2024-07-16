import Header from "./Header";

export default function Results({ ...props }) {
  const { results } = props;

  return (
    <main>
      <section>
        <Header input={results.input} />
      </section>
    </main>
  );
}
