import { Link } from "react-router-dom";

export default function SearchDropdown() {
  const searches = [
    "stickers",
    "envelopes",
    "stamp",
    "id card",
    "bill book",
  ];

  return (
    <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg p-4 z-50">
      <p className="text-sm text-gray-500 mb-3">Popular searches</p>

      <ul className="space-y-2">
        {searches.map((item) => (
         <Link to={`/${item}`}><li
            key={item}
            className="cursor-pointer hover:text-blue-600"
          >
            {item}
          </li></Link>
        ))}
      </ul>
    </div>
  );
}
