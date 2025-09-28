import CounterItem from "./CounterItem";
import { useMemo } from "react";

export default function CounterContainer({ params }) {
    const { item, counter } = params;

    const counterItems = useMemo(() => {
        const items = [];
        const paddedCount = String(counter.count).padStart(counter.len, "0");

        for (let i = 0; i < counter.len; i++) {
            items.push(
                <CounterItem
                    key={i}
                    value={Number(paddedCount[i])}
                    props={{ ...item }}
                />,
            );
        }

        return items;
    }, [counter.len, counter.count, item]);

    return <div className="flex gap-1">{counterItems}</div>;
}
