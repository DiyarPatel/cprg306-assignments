import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleNameChange(event) {
        event.preventDefault();
        const newId = Math.random().toString(18).substr(4, 9);
        const newItem = { id: newId, name, quantity: parseInt(quantity), category };
        onAddItem(newItem);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <div className="">
            <form
                className="w-full max-w-md bg-zinc-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleNameChange}
            >
                <label className="block mb-4">
                    Name:
                    <input
                        className="mt-2 p-2 border border-gray-200 rounded-md w-full"
                        id="name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <label className="block mb-4">
                    Quantity:
                    <input
                        className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                        type="number"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                    />
                </label>
                <label className="block mb-4">
                    Category:
                    <select
                        className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen-foods">Frozen Foods</option>
                        <option value="canned-goods">Canned Goods</option>
                        <option value="dry-goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <div className="mt-4  items-center">
                    <button
                        className="p-2.5 border-2 w-80 bg-zinc-700 hover:bg-pink-300 text-white font-bold rounded-md"
                        type="submit"
                    >
                        +
                    </button>
                </div>
            </form>
        </div>
    );
}
