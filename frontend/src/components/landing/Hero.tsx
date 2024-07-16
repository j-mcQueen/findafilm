import Reel from "../../assets/icons/Reel";

export default function Hero() {
  return (
    <header>
      <hgroup className="flex flex-col items-center gap-5">
        <h1 className="font-interB text-center text-2xl">FIND A FILM</h1>
        <Reel className="w-8 h-8" />
        <p className="font-inter text-gray xl:w-3/5 leading-snug px-3 xl:px-0 text-center xl:text-left">
          Tired of not knowing watch to watch? Look no further. Enter a movie
          you’d like some suggestions to be based on, and we’ll get you sorted
          with a little help from AI.
        </p>
      </hgroup>
    </header>
  );
}
