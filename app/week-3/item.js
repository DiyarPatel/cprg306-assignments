import Itemlist from "./itemlist";
export default function Item(props) {
    return (
        <div className="p-2.5 ml-5 pt2 border-2 mb-3 w-96 h-20 bg-zinc-800">
            <li className="font-bold text-xl">{props.name}</li>
            <li className="">
                But {props.quantity} in {props.category}
            </li>
        </div>
    );
}
