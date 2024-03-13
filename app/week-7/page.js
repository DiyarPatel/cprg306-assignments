"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import ItemsData from './items-Data';

export default function Page() {
    const [items, setItems] = useState(ItemsData);
    const [selectedItemName, setSelectedItemName] = useState();

    const handleAddItem = (newItem) => {
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
