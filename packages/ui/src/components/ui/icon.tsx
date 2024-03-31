import type { HTMLAttributes } from 'react'
import {
  ArrowUpRight,
  AtSign,
  Eye,
  Loader2,
  LockKeyhole,
  MapPin,
  MoveLeft,
  MoveRight,
  Newspaper,
  User,
  X,
} from 'lucide-react'

type IconProps = HTMLAttributes<SVGElement>

export const Icon = {
  arrowUpRight: (props: IconProps) => <ArrowUpRight {...props} />,
  atSign: (props: IconProps) => <AtSign {...props} />,
  eye: (props: IconProps) => <Eye {...props} />,
  loader2: (props: IconProps) => <Loader2 {...props} />,
  lockKeyhole: (props: IconProps) => <LockKeyhole {...props} />,
  mapPin: (props: IconProps) => <MapPin {...props} />,
  moveLeft: (props: IconProps) => <MoveLeft {...props} />,
  moveRight: (props: IconProps) => <MoveRight {...props} />,
  newspaper: (props: IconProps) => <Newspaper {...props} />,
  user: (props: IconProps) => <User {...props} />,
  x: (props: IconProps) => <X {...props} />,
}
