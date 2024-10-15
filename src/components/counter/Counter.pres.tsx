import { FunctionComponent, useState } from "react";

export const Counter: FunctionComponent = () => {
    const [counter, setCounter] = useState(0);


    const incrementCounter = (amountToIncrement: number) => {
        const newValue = counter + amountToIncrement;
        setCounter(newValue);
    }


    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => incrementCounter(-1)}>-</button>
            <button onClick={() => incrementCounter(1)}>+</button>
        </div>
    )
}