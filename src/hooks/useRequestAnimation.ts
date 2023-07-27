import { useEffect, useState } from 'react';

export default function useRequestAnimation() {
  const [isPainted, setIsPainted] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setIsPainted(true));

    return () => {
      cancelAnimationFrame(animation);
      setIsPainted(false);
    };
  }, []);

  return [isPainted];
}
