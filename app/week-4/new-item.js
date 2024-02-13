"use clinte";

import { useState } from "react";
export default function NewItem() {
    const [name, setName] = useState('');

    const increment = () => setCount(count + 1);

    return (
        <div>
            <p> counter: {a} </p>
            <button onClick={increment}>Increment</button>

        </div>
    )


}