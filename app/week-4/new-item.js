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
            <form className="w-full max-w-md bg-zinc shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input className="mt-4 text-1xl flex justify-center border rounded w-50 py-2 px-3 text-white-700"
                        id="name" type="text" value={name} onChange={handleNameChange} />

                </label>
                <label>
                    Quantity:
                    <input className="mt-4 text-1xl flex justify-center border rounded w-50 py-2 px-3 text-gray-700" type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                </label>
                <label>
                    Category:
                    <select className="mt-4 text-1xl flex justify-center border rounded w-50 py-2 px-3 text-gray-700" value={category} onChange={(event) => setCategory(event.target.value)}>
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
                <div className="mt-4 flex justify-center items-center mb-4">
                    <button className=" p-2.5 ml-5 pt2 border-2 mb-3 w-80 h-15 bg-blue-500 text-2xl w-26 hover:bg-blue-700 text-white font-bold rounded-md" type="submit"> + </button>
                </div>
            </form>
        </div>
    );


}