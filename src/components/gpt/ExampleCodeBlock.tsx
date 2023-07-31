import { DEFAULT_LANGUAGE, EXAMPLE_CODE } from '@/constants/gpt';

import CodeBlock from './CodeBlock';

export default function ExampleCodeBlock({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div {...props}>
      <CodeBlock code={EXAMPLE_CODE} language={DEFAULT_LANGUAGE} />
    </div>
  );
}
