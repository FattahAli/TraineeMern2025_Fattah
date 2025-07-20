import { useState } from "react";

export const ListGroups = () => {
  let items = ["America", "Ukraine", "Tokyo", "China"];
  const [selectedItem, setSelectedItem] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedItem(index);
            }}
            className={selectedItem === index && "bg-amber-300"}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
