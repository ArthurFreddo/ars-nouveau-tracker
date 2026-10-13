import type { IconName } from '../data/types'

export function GameIcon({ name, className = '' }: { name: IconName; className?: string }) {
  return <img className={`game-icon ${className}`} src={`/images/${name}.svg`} alt="" aria-hidden="true" />
}
