import ItemList from "./item-list";
export default function Item({id, name, quantity, category, onDelete }) {
    return (
        <main>
            <div className="p-2.5 ml-5 pt2 border-black-2 mb-3 w-96 h-20 bg-zinc-200 rounded-md">
                <ul><li className="font-bold text-xl">{name}</li>
                    <li className="">
                        But {quantity} in {category}
                        <button onClick={() => onDelete(id)} type="button">
                        </button>
                    </li>
                </ul>
            </div>
        </main>

    );
}

