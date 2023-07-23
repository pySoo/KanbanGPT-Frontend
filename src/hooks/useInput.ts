import { ChangeEvent, useState } from 'react';

import useDebounce from './useDebounce';

export default function useInput(initialValue?: string, delay?: number) {
  const [value, setValue] = useState(initialValue ?? '');
  const debouncedValue = useDebounce(value, delay);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value: debouncedValue,
    bind: {
      value,
      onChange: handleChange,
    },
  };
}
