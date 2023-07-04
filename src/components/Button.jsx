import Loader from "./Loader";

export default function Button({ type = "button", title, onClick, isLoading }) {
  return (
    <button
      type={type}
      className="mt-4 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full"
      onClick={onClick}
    >
      {isLoading ? <Loader /> : title}
    </button>
  );
}
