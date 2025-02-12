import {useState} from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className = "flex items-center">
      <p className="text-2x1">{count}</p>
      <button onClick={() => setCount(count + 1)} className="mt-2 bg-green-500 px-4 py-2 rounded-md">
        Aumentar contador que usa "useState"
      </button>
    </div>
  );
}