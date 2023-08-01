import { RiDeleteBin5Line } from 'react-icons/ri';

import { theme } from '@/styles/theme';

type DeleteIconProps = {
  size?: number;
};

export default function DeleteIcon({ size }: DeleteIconProps) {
  return <RiDeleteBin5Line size={size} color={theme.colors.red} />;
}
