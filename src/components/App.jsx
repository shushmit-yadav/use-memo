import { useState, useMemo } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    const expensiveValue = useMemo(() => {
        console.log(`Computing expensive for ${count}`);
        return count * 2;
    }, [count]);

    return (
        <div>
            <h1>useMemo Example</h1>
            <p>Count: {count}</p>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <button onClick={() => setCount(count - 1)}>Decrease Count</button>
        </div>
    );
}