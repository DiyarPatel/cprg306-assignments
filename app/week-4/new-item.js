"use client"

import { useState } from "react";
export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, quantity, category);
    };

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                className="w-full max-w-md bg-zinc shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
            >
                <label className="block mb-4">
                    Name:
                    <input
                        className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                        id="name"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
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
                <div className="mt-4 flex justify-center items-center">
                    <button
                        className="p-2.5 border-2 w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
                        type="submit"
                    >
                        +
                    </button>
                </div>
            </form>
        </div>
    );
}