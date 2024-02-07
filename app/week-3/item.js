import Itemlist from "./itemlist";
export default function Item() {
    return (
        <div className="p-2.5 ml-5 pt2 border-2 mb-3 w-96 h-20 bg-zinc-800">
            <li className="font-bold text-xl">{name}</li>
            <li className="">
                But {quantity} in {category}
            </li>
        </div>
    );
}
