import { FormEvent } from "react";

export default function Form() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      action=""
      className="flex flex-col items-center justify-center pt-10 font-inter"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label className="flex flex-col xl:w-2/5 w-full px-5 xl:px-0 font-interB">
        ENTER A MOVIE
        <input
          className="font-inter py-3 pl-3 mt-1 appearance-none bg-bg border border-solid border-bgL focus:outline-none focus:border-bgXL hover:border-bgXL transition-colors"
          type="text"
          placeholder="e.g. The Notebook"
        />
      </label>

      <button
        type="submit"
        className="border border-solid border-red font-interB py-3 px-4 mt-10 focus:outline-none focus:bg-tred focus:shadow-coral xl:hover:bg-tred xl:hover:shadow-coral transition-all"
      >
        GENERATE!
      </button>
    </form>
  );
}
