export default function Item(props) {
    return (
        <div className="bg-gray-200 p-4 m-2 rounded-md">
            <h2 className="text-green-500">{props.name}</h2>
            <p className="text-xs">
                {props.name}, {props.quantity},{props.category}
            </p>
        </div>
    );
}
