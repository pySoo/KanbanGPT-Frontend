import { FiPlus } from 'react-icons/fi';

type PlusIconProps = {
  size?: number;
};

export default function PlusIcon({ size }: PlusIconProps) {
  return <FiPlus size={size} />;
}
