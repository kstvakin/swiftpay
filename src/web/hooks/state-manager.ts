// useCounter.ts
import { useState } from 'react';

function useStateManager() {
  const [pinBoxes] = useState(Array(4).fill(""));
  return { pinBoxes};
}

export default useStateManager;