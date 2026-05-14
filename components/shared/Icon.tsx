import {
  QuestionIcon,
  CheckCircleIcon,
  HourglassIcon,
  LocationIcon,
  MortarBoardIcon,
  SyncIcon,
  MilestoneIcon,
} from '@primer/octicons-react'

const ICON_MAP = {
  mortarboard: MortarBoardIcon,
  hourglass: HourglassIcon,
  sync: SyncIcon,
  location: LocationIcon,
  check: CheckCircleIcon,
  milestone: MilestoneIcon,
}

interface Props {
  iconName?: string
  size?: number
  className?: string
}

export const Icon = ({ iconName, size, className }: Props) => {
  const Icon = ICON_MAP[iconName as keyof typeof ICON_MAP] || QuestionIcon
  return <Icon size={size} className={className} />
}
