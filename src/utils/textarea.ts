import { ForwardedRef } from 'react';

export function blurTextarea(ref: ForwardedRef<HTMLTextAreaElement>) {
  if (ref !== null && typeof ref !== 'function') {
    const current = ref.current;
    if (current) {
      current.blur();
      document.body.focus();
    }
  }
}

export function autoResizeTextarea(ref: ForwardedRef<HTMLTextAreaElement>) {
  if (ref !== null && typeof ref !== 'function') {
    const textarea = ref.current;
    if (textarea !== null) {
      setTimeout(() => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }, 0);
    }
  }
}
