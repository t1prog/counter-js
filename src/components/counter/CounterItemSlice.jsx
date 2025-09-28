import clsx from "clsx";

const segments = [
    // Л-В
    { rowStart: 1, rowEnd: 4, colStart: 1, colEnd: 4 },
    // Л-Н
    { rowStart: 4, rowEnd: 7, colStart: 1, colEnd: 4 },
    // П-В
    { rowStart: 1, rowEnd: 4, colStart: 4, colEnd: 7 },
    // П-Н
    { rowStart: 4, rowEnd: 7, colStart: 4, colEnd: 7 },
    // В-Л
    { rowStart: 1, rowEnd: 3, colStart: 1, colEnd: 5 },
    // В-П
    { rowStart: 1, rowEnd: 3, colStart: 3, colEnd: 7 },
    // Н-П
    { rowStart: 5, rowEnd: 7, colStart: 3, colEnd: 7 },
    // Н-Л
    { rowStart: 5, rowEnd: 7, colStart: 1, colEnd: 5 },
    // Ц-П
    { rowStart: 3, rowEnd: 5, colStart: 3, colEnd: 7 },
    // Ц-Л
    { rowStart: 3, rowEnd: 5, colStart: 1, colEnd: 5 },
];

export default function CounterItemSlice({
    activeSegments = [],
    bgA = "bg-white",
    bgD = "bg-gray-700",
}) {
    return (
        <div className="flex-1 grid aspect-2/3 grid-rows-6 grid-cols-6 gap-1">
            {segments.map((segment, index) => {
                const isActive = activeSegments.includes(index);
                const segmentClass = clsx(
                    "min-h-full min-w-full",
                    `row-start-${segment.rowStart}`,
                    `row-end-${segment.rowEnd}`,
                    `col-start-${segment.colStart}`,
                    `col-end-${segment.colEnd}`,
                    isActive ? bgA : "",
                );

                return <div key={index} className={segmentClass}></div>;
            })}
        </div>
    );
}
