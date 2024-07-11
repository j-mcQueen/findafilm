import Hero from "./Hero";
import Form from "./Form";

export default function Generator({ ...props }) {
  const { setResults } = props;

  return (
    <main className="w-dvw h-dvh flex items-center justify-center">
      <section>
        <Hero />
        <Form setResults={setResults} />
      </section>
    </main>
  );
}
