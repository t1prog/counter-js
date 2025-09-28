import CounterItemSlice from "./CounterItemSlice";

const valuesSheet = {
    "0": [0, 1, 2, 3, 4, 5, 6, 7],
    "1": [2, 3],
    "2": [1, 2, 4, 5, 7, 6, 8, 9],
    "3": [4, 2, 3, 5, 7, 8],
    "4": [0, 2, 3, 8, 9],
    "5": [0, 3, 4, 5, 6, 7, 8, 9],
    "6": [0, 1, 3, 4, 5, 6, 7, 8, 9],
    "7": [0, 2, 3, 5],
    "8": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    "9": [0, 2, 3, 4, 8, 9],
};

export default function CounterItem({ props, value }) {
    const { bgA, bgD } = props;

    const activeSegments = valuesSheet[value] || [];

    return (
        <CounterItemSlice activeSegments={activeSegments} bgA={bgA} bgD={bgD} />
    );
}
