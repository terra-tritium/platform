import type { HTMLAttributes } from 'react'
import {
  Coins,
  ArrowUpRight,
  AtSign,
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
  MapPin,
  MoveLeft,
  MoveRight,
  Newspaper,
  Play,
  User,
  X,
} from 'lucide-react'

type IconProps = HTMLAttributes<SVGElement>

export const Icon = {
  coins: (props: IconProps) => <Coins {...props} />,
  arrowUpRight: (props: IconProps) => <ArrowUpRight {...props} />,
  atSign: (props: IconProps) => <AtSign {...props} />,
  eye: (props: IconProps) => <Eye {...props} />,
  eyeOff: (props: IconProps) => <EyeOff {...props} />,
  loader2: (props: IconProps) => <Loader2 {...props} />,
  lockKeyhole: (props: IconProps) => <LockKeyhole {...props} />,
  mapPin: (props: IconProps) => <MapPin {...props} />,
  moveLeft: (props: IconProps) => <MoveLeft {...props} />,
  moveRight: (props: IconProps) => <MoveRight {...props} />,
  newspaper: (props: IconProps) => <Newspaper {...props} />,
  play: (props: IconProps) => <Play {...props} />,
  user: (props: IconProps) => <User {...props} />,
  x: (props: IconProps) => <X {...props} />,
}
