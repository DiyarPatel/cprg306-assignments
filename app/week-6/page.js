import ItemList from './item-list';
import NewItem from './new-item';
import Itemsdata from './items-Data';

export default function Page() {
    const [items, setItems] = useState(Itemsdata)
    const addItem = (newItem) => {
        setItems([...items, newItem]);
    };


    return (
        <main>

            <h1 className="text-4xl font-bold p-5 text-black">Shoping List </h1>
            <ItemList items={items} />
            <NewItem onAddItem={addItem} />
        </main>
    );
}
