import { AiOutlineClose } from 'react-icons/ai';

type CloseIconProps = {
  size?: number;
};
export default function CloseIcon({ size }: CloseIconProps) {
  return <AiOutlineClose size={size ?? 20} />;
}
