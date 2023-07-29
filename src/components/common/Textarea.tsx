import { ForwardedRef, forwardRef, useEffect } from 'react';

import { autoResizeTextarea, blurTextarea } from '@/utils/textarea';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  value: string;
  onUpdate: (value: string) => void;
  onSubmit: () => void;
  onBlur?: () => void;
}

const Textarea = (
  { value, onUpdate, onSubmit, onBlur, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) => {
  const title = value.trim();

  const handleBlur = () => {
    if (title !== '') {
      onUpdate(title);
    }
    if (onBlur) onBlur();
  };

  const handleSubmit = () => {
    onSubmit();
    blurTextarea(ref);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      if (!event.shiftKey) {
        event.preventDefault();
        handleSubmit();
      }
    }
  };

  useEffect(() => {
    if (value) {
      autoResizeTextarea(ref);
    }
  }, [value]);

  return (
    <textarea
      area-abel="title-textarea"
      ref={ref}
      value={value}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
};

export default forwardRef(Textarea);
