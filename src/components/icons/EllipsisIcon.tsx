import { BsThreeDots } from 'react-icons/bs';

type EllipsisIconProps = {
  size?: number;
};

export default function EllipsisIcon({ size }: EllipsisIconProps) {
  return <BsThreeDots size={size} />;
}
