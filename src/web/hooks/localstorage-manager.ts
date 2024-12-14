import { useState, useEffect } from "react";

function useLocalStorage<T> (key: string, initialValue: T)  {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return initialValue;
    }
  });

  const storeValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      sessionStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error("Error setting localStorage value:", error);
    }
  };

  const storeValueAsync = async (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      sessionStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error("Error setting localStorage value:", error);
    }
  };

  const removeValue = () => {
    try {
      sessionStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error("Error removing localStorage value:", error);
    }
  };

  const removeValueAsync = async () => {
    try {
      sessionStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error("Error removing localStorage value:", error);
    }
  };

  // Update state if localStorage changes (optional)
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const item = sessionStorage.getItem(key);
        setStoredValue(item ? JSON.parse(item) : initialValue);
      } catch (error) {
        console.error("Error updating localStorage state:", error);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, initialValue]);

  return {storedValue, storeValue, removeValue, storeValueAsync, removeValueAsync};
}

export default useLocalStorage;