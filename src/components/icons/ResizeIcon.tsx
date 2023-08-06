import { BsArrowsExpand } from 'react-icons/bs';

import { DirectionType } from '../common/ResizeHandle';

type ResizeIconProps = {
  size?: number;
  direction: DirectionType;
};

export default function ResizeIcon({ size, direction }: ResizeIconProps) {
  return (
    <BsArrowsExpand
      style={{ strokeWidth: '1', rotate: direction === 'horizontal' ? '0deg' : '90deg' }}
      size={size}
    />
  );
}
