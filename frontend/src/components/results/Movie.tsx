import Open from "../../assets/icons/Open";

export default function Movie() {
  return (
    <article className="font-inter py-10 xl:py-0">
      <div></div>

      <div>
        <hgroup className="flex items-center justify-between">
          <h2 className="xl:max-w-80 font-interB text-lg">
            SAMPLE MOVIE TITLE
          </h2>

          <p className="text-ylw">9.9 / 10</p>
        </hgroup>

        <p className="py-5 leading-snug text-gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="border border-solid border-bgL p-2">GENRE 1</div>
            <div className="border border-solid border-bgL p-2">GENRE 2</div>
          </div>

          <a
            href={""}
            target="_blank"
            className="flex items-center gap-2 border border-solid border-ylw p-2 xl:hover:bg-tylw xl:focus:bg-tylw xl:transition-colors"
          >
            IMDb <Open className="w-[14px] h-[14px]" />
          </a>
        </div>
      </div>
    </article>
  );
}
