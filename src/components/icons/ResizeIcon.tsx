import { BsArrowsExpand } from 'react-icons/bs';

type ResizeIconProps = {
  size?: number;
};

export default function ResizeIcon({ size }: ResizeIconProps) {
  return <BsArrowsExpand style={{ strokeWidth: '1' }} size={size} />;
}
