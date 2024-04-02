"use client";
import React, { useState, useEffect } from 'react';
import { getItems, addItem } from './_services/shopping-list-service'; // Adjust the path as needed
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';


export default function Page({ user }) { // Assuming user is passed as a prop
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState();

    useEffect(() => {
        async function loadItems() {
            const items = await getItems(user.uid);
            setItems(items);
        }
        loadItems();
    }, [user]); // useEffect dependency

    const handleAddItem = async (newItem) => {
        const newItemId = await addItem(user.uid, newItem);
        newItem.id = newItemId;
        setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanedItemName = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, "");
        setSelectedItemName(cleanedItemName);
    };

    return (
        <main className="flex">
            <div className="w-1/2">
                <h1 className="text-4xl font-bold p-5 text-black">Shopping List </h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass onItemSelect prop */}
            </div>
            <div className="w-1/2">
                {selectedItemName && <MealIdeas ingredient={selectedItemName} />} {/* Render MealIdeas component */}
            </div>
        </main>
    );
}
