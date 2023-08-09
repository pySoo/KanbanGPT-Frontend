import { ForwardedRef, forwardRef, useEffect } from 'react';

import { autoResizeTextarea, blurTextarea, scrollToTextarea } from '@/utils/textarea';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  value: string;
  autoFocus?: boolean;
  onUpdate: (value: string) => void;
  onSubmit: () => void;
  onBlur?: () => void;
}

const Textarea = (
  { value, autoFocus, onUpdate, onSubmit, onBlur, ...props }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) => {
  const title = value.trim();

  const handleFocus = () => {
    scrollToTextarea(ref);
  };

  const handleBlur = () => {
    if (title !== '') {
      onUpdate(title);
    }
    if (onBlur) onBlur();
  };

  const handleSubmit = () => {
    onSubmit();

    if (!autoFocus) {
      blurTextarea(ref);
    } else {
      autoResizeTextarea(ref);

      setTimeout(() => {
        scrollToTextarea(ref);
      }, 200);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      if (!event.nativeEvent.isComposing && !event.shiftKey) {
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
      autoFocus={autoFocus}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      spellCheck={false}
      {...props}
    />
  );
};

export default forwardRef(Textarea);
