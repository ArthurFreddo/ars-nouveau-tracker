import type { IconName } from '../data/types'

export function GameIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const textures: Partial<Record<IconName, string>> = {
    pickaxe: 'iron_pickaxe', crystal: 'source_gem', berries: 'source_berry', tree: 'archwood_sapling', ingot: 'gold_ingot',
  }
  const src = textures[name] ? `/images/items/${textures[name]}.png` : `/images/${name}.svg`
  return <img className={`game-icon ${className}`} src={src} alt="" aria-hidden="true" />
}
