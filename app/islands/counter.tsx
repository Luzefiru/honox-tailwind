import { useState } from 'hono/jsx';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p className="text-red-500">{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
