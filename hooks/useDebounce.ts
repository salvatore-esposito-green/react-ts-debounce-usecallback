import { useEffect, useState } from 'react';

function useDebounce<T>(fc: T, delay: number = 500): T {
  const [debunce, setDebounce] = useState<T>(fc);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(fc);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [fc, delay]);

  return debunce;
}

export default useDebounce;
