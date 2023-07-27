import { ChangeEvent, useRef, useState } from 'react';

export default function useTextarea(initialValue?: string, onSubmit?: () => void) {
  const [value, setValue] = useState(initialValue ?? '');

  const ref = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return {
    ref,
    value,
    setValue,
    bind: {
      ref,
      value,
      rows: 1,
      onChange: handleChange,
    },
  };
}
