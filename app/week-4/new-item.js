"use client";

import { useState } from "react";
export default function NewItem() {
    // const [count, setCount] = useState(0);
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
        <div>
            <p> </p>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input className="shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700"
                        id="name" type="text" value={name} onChange={handleNameChange} />

                </label>
                <label>
                    Quantity:
                    <input className="shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700" type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                </label>
                <label>
                    Category:
                    <select className="shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700" value={category} onChange={(event) => setCategory(event.target.value)}>
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

                <button className="w-100 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md" type="submit">Add Item</button>
            </form>
        </div>
    );


}