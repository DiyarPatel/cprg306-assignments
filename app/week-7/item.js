import ItemList from "./item-list";

export default function Item({ id, name, quantity, category, onDelete, onSelect }) {
  return (
    <main>
      <div className="p-2.5 ml-5 pt2 border-black-2 mb-3 w-96 h-20 bg-zinc-200 rounded-md" onClick={() => onSelect(id)}>
        <ul>
          <li className="font-bold text-xl">{name}</li>
          <li className="">Buy {quantity} in {category}</li>
          <button onClick={() => onDelete(id)} type="button"></button>
        </ul>
      </div>
    </main>
  );
}
