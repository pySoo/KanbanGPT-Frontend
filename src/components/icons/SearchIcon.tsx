import { BsSearch } from 'react-icons/bs';

type SearchIconProps = {
  size?: number;
};

export default function SearchIcon({ size }: SearchIconProps) {
  return <BsSearch size={size} />;
}
