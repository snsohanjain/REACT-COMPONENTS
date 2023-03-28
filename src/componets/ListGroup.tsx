import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook
  const [selecetedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h3>{heading}</h3>
      {items.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            className={
              selecetedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

// function App() {
//   let items = ["India", "New York", "Tokey", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <ListGroup items={items} heading="Cites" onSelectItem={handleSelectItem} />
//   );
// }
