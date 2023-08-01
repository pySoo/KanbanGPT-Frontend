import { ChangeEvent, useRef, useState } from 'react';

export default function useInput<T extends HTMLInputElement | HTMLTextAreaElement>(
  initialValue?: string,
) {
  const [value, setValue] = useState(initialValue ?? '');

  const ref = useRef<T>(null);

  const handleChange = (e: ChangeEvent<T>) => {
    setValue(e.target.value);
  };

  return {
    ref,
    value,
    setValue,
    bind: {
      value,
      rows: 1,
      onChange: handleChange,
    },
  };
}
