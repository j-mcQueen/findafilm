import { useNavigate } from "react-router-dom";
import Reel from "../../assets/icons/Reel";
import Return from "../../assets/icons/Return";

export default function Header({ ...props }) {
  const { input } = props;
  const navigate = useNavigate();

  const handleReturn = () => {
    return navigate("/");
  };

  return (
    <header className="flex flex-col xl:flex-row items-center justify-between px-5 font-inter pt-5">
      <div className="flex items-center gap-5">
        <button
          type="button"
          className="border border-solid border-red p-1 xl:p-2 xl:hover:bg-tred xl:focus:bg-tred xl:transition-colors"
          onClick={() => handleReturn()}
        >
          <Return className="w-5 h-5" />
        </button>

        <h1 className="font-interB text-2xl xl:text-3xl">FIND A FILM</h1>

        <Reel className="w-7 h-7" />
      </div>

      <p className="text-gray pt-5 xl:pt-0 leading-snug">
        Showing 10 films similar to:&nbsp;
        <span className="text-bgXL">{input.toUpperCase()}</span>
      </p>
    </header>
  );
}
