// useCounter.ts
import { useState } from 'react';
import useLocalStorage from './localstorage-manager';

function useStateManager(initialValue: number = 25) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 25);
  }
  const decrement = () => setCount(count - 25);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset};
}

export default useStateManager;