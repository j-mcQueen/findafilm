import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../assets/icons/Loading";

export default function Form({ ...props }) {
  const { setResults } = props;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/results", {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();

      if (data) {
        setResults(data);
        setLoading(false);
        return navigate("/results");
      }
    } catch (err) {
      if (err) setLoading(false);
    }
  };

  return (
    <form
      action=""
      method="POST"
      className="flex flex-col items-center justify-center pt-10 font-inter"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label className="flex flex-col xl:w-2/5 w-full px-5 xl:px-0 font-interB">
        TYPE A MOVIE TITLE
        <input
          className="font-inter py-3 pl-3 mt-1 appearance-none bg-bg border border-solid border-bgL focus:outline-none focus:border-bgXL hover:border-bgXL transition-colors"
          type="text"
          placeholder="e.g. The Notebook"
          onChange={(e) => setMovie(e.target.value)}
        />
      </label>

      <button
        type="submit"
        className="border border-solid border-red font-interB py-3 px-4 mt-10 focus:outline-none focus:bg-tred focus:shadow-coral xl:hover:bg-tred xl:hover:shadow-coral transition-all"
      >
        {loading ? <Loading className="w-5 h-5" /> : "GENERATE!"}
      </button>
    </form>
  );
}
