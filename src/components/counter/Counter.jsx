import { useMemo, useState } from "react";
import CounterContainer from "./CounterContainer";

export default function Counter() {
    const [count, setCount] = useState(0);

    const params = useMemo(() => {
        let bgA = "bg-white";

        if (count > 0) {
            bgA = "bg-green-300";
        } else if (count < 0) {
            bgA = "bg-red-300";
        }

        return {
            item: {
                bgD: "bg-gray-700",
                bgA,
            },
            counter: {
                len: 4,
                count: Math.abs(count),
            },
        };
    }, [count]);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="bg-gray-700 p-4 shadow-lg rounded-lg flex flex-col">
            <CounterContainer params={params} />
            <div className="flex pt-2 gap-2">
                <button
                    onClick={decrement}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold flex-1 rounded-lg text-xl flex items-center justify-center"
                >
                    <span>-</span>
                </button>
                <button
                    onClick={increment}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold flex-1 rounded-lg text-xl flex items-center justify-center"
                >
                    <span>+</span>
                </button>
            </div>
            <button
                onClick={reset}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold flex-1 rounded-lg text-xl flex items-center justify-center mt-2"
            >
                <span>RESET</span>
            </button>
        </div>
    );
}
