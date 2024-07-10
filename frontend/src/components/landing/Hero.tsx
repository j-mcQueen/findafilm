import Reel from "../../assets/icons/Reel";

export default function Hero() {
  return (
    <header>
      <hgroup className="flex flex-col items-center gap-5">
        <h1 className="font-interB text-center text-2xl">FIND A FILM</h1>
        <Reel className="w-8 h-8" />
        <p className="font-inter text-gray xl:w-3/5 px-3 text-center xl:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </hgroup>
    </header>
  );
}
