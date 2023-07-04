export default function Input({ title, id, placeholder, value, onChange }) {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-left"
      >
        {title}
      </label>
      <input
        id={id}
        type="text"
        className="mb-2 block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
