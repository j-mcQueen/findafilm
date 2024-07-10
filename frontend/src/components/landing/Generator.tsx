import Hero from "./Hero";
import Form from "./Form";

export default function Generator() {
  return (
    <main className="w-dvw h-dvh flex items-center justify-center">
      <section>
        <Hero />
        <Form />
      </section>
    </main>
  );
}
