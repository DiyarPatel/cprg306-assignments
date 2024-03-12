"use client"
import ItemList from './item-list';
import NewItem from './new-item';
import Itemsdata from './items-Data';
import { useState } from 'react';
export default function Page() {
    const [items, setItems] = useState(Itemsdata)
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };
   

    return (
        <main>

            <h1 className="text-4xl font-bold p-5 text-black">Shoping List </h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />

        </main>
    );
}
