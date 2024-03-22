import type { HTMLAttributes } from 'react'
import {
  AtSign,
  Eye,
  Loader2,
  LockKeyhole,
  MoveRight,
  User,
} from 'lucide-react'

type IconProps = HTMLAttributes<SVGElement>

export const Icon = {
  atSign: (props: IconProps) => <AtSign {...props} />,
  eye: (props: IconProps) => <Eye {...props} />,
  loader2: (props: IconProps) => <Loader2 {...props} />,
  lockKeyhole: (props: IconProps) => <LockKeyhole {...props} />,
  moveRight: (props: IconProps) => <MoveRight {...props} />,
  user: (props: IconProps) => <User {...props} />,
}
