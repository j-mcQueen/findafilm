import { v4 as uuidv4 } from "uuid";
import Open from "../../assets/icons/Open";

export default function Movie({ ...props }) {
  const { movie, premise } = props;

  return (
    <article className="font-inter py-10 xl:py-0">
      <div>
        <hgroup className="flex items-center justify-between">
          <h2 className="max-w-[250px] xl:max-w-80 font-interB text-lg">
            {movie.title.toUpperCase()}
          </h2>

          <p className="text-ylw">{movie.rating} / 10</p>
        </hgroup>

        <p className="py-5 leading-snug text-gray">{premise}</p>

        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {movie.genre.map((genre: string) => {
              return (
                <div key={uuidv4()} className="text-bgXL">
                  {genre.toUpperCase()}
                </div>
              );
            })}
          </div>

          <a
            href={movie.url}
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
