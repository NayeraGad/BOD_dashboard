/**
 * Custom React hook that debounces a value.
 * 
 * @param {*} value - The value to debounce.
 * @param {number} delay - Delay in milliseconds before updating the debounced value.
 * 
 * @returns {*} - The debounced value.
 */

import { useEffect, useState } from "react";

export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
