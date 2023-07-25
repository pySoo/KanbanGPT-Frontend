import { RiDeleteBack2Line } from 'react-icons/ri';

type DeleteIconProps = {
  size?: number;
};

export default function DeleteIcon({ size }: DeleteIconProps) {
  return <RiDeleteBack2Line size={size} />;
}
