import { AiFillCode } from 'react-icons/ai';
type CodeIconProps = {
  size?: number;
};

export default function CodeIcon({ size }: CodeIconProps) {
  return <AiFillCode size={size} />;
}
