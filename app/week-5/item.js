import ItemList from "./item-list";
export default function Item({ name, quantity, category }) {
    return (
        <main>
            <div className="p-2.5 ml-5 pt2 border-black-2 mb-3 w-96 h-20 bg-zinc-500 rounded-md">
                <ul><li className="font-bold text-xl">{name}</li>
                    <li className="">
                        But {quantity} in {category}
                    </li>
                </ul>
            </div>
        </main>

    );
}
