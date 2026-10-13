import type { IconName } from '../data/types'
import { ItemIcon } from './ItemIcon'

export function GameIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const items: Partial<Record<IconName, string>> = {
    sourcelink: 'Agronomic Sourcelink', jar: 'Source Jar', starbuncle: 'Starbuncle',
    token: 'Starbuncle Token', sourcestone: 'Sourcestone', apparatus: 'Enchanting Apparatus',
    pedestal: 'Arcane Pedestal', charm: 'Starbuncle Charm', wand: 'Dominion Wand',
    chest: 'Chest', gemblock: 'Source Gem Block', relay: 'Source Relay',
  }
  if (items[name]) return <ItemIcon label={items[name]} className={`game-icon ${className}`} />
  const textures: Partial<Record<IconName, string>> = {
    pickaxe: 'iron_pickaxe', crystal: 'source_gem', berries: 'source_berry', tree: 'archwood_sapling', ingot: 'gold_ingot',
  }
  const src = textures[name] ? `/images/items/${textures[name]}.png` : `/images/${name}.svg`
  return <img className={`game-icon ${className}`} src={src} alt="" aria-hidden="true" />
}
