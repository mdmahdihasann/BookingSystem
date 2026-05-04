"use client";

const SearchBox = () => {
  return (
    <form className="w-full bg-white rounded-2xl shadow-lg p-4 md:p-5 flex flex-col md:flex-row gap-3 md:gap-4 items-center">

      <input
        type="text"
        placeholder="Bhola → Barishal"
        className="w-full px-4 py-3 border rounded-lg outline-none focus:border-blue-500"
      />

      <input
        type="datetime-local"
        className="w-full px-4 py-3 border rounded-lg focus:border-blue-500"
      />

      <select className="px-4 py-3.5 border bg-white rounded-lg outline-none w-full">
        <option>Select Launch</option>
        <option>MV Green Line</option>
        <option>MV Manami</option>
        <option>MV Sundarban</option>
        <option>MV Kalam Khan</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition w-full md:w-auto"
      >
        Search
      </button>

    </form>
  );
};

export default SearchBox;