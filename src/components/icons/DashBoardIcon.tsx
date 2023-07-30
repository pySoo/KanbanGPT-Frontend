import { MdDashboardCustomize } from 'react-icons/md';
type DashBoardIconProps = {
  size?: number;
};

export default function DashBoardIcon({ size }: DashBoardIconProps) {
  return <MdDashboardCustomize size={size} />;
}
