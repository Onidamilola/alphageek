import { useState } from 'react';

// Custom hook to handle local storage
const useLocalStorage = (key, initialValue) => {
  // Retrieve the initial value from local storage or use the provided initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error retrieving value from local storage:', error);
      return initialValue;
    }
  });

  // Update the value in local storage and state
  const setValue = (value) => {
    try {
      // Save the state to local storage
      window.localStorage.setItem(key, JSON.stringify(value));
      // Update the state with the new value
      setStoredValue(value);
    } catch (error) {
      console.error('Error setting value in local storage:', error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
