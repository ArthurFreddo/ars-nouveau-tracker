type ItemVisual = { src: string; block?: 'planks' | 'log' | 'slab' | 'cube' }
const items = '/images/items/'

export function itemVisual(label: string): ItemVisual | undefined {
  label = label.replace(/\s*\(.*$/, '').split(' — ')[0]
  if (/novice spell book|spell book/i.test(label)) return { src: '/images/book.svg' }
  if (/scribe.*table/i.test(label)) return { src: '/images/table.svg' }
  if (/imbuement chamber/i.test(label)) return { src: '/images/chamber.svg' }
  if (/agronomic sourcelink/i.test(label)) return { src: '/images/sourcelink.svg' }
  if (/source jars?/i.test(label)) return { src: '/images/jar.svg' }
  if (/source relay/i.test(label)) return { src: '/images/relay.svg' }
  if (/arcane core/i.test(label)) return { src: '/images/core.svg' }
  if (/enchanting apparatus/i.test(label)) return { src: '/images/apparatus.svg' }
  if (/arcane pedestals?/i.test(label)) return { src: '/images/pedestal.svg' }
  if (/dominion wand/i.test(label)) return { src: items + 'dominion_wand.png' }
  if (/starbuncle tokens?/i.test(label)) return { src: items + 'starbuncle_token.png' }
  if (/starbuncle charms?/i.test(label)) return { src: items + 'starbuncle_charm.png' }
  if (/starbuncle/i.test(label)) return { src: items + 'starbuncle.png' }
  if (/source gem block/i.test(label)) return { src: items + 'source_gem_block.png', block: 'cube' }
  if (/source gems?/i.test(label)) return { src: items + 'source_gem.png' }
  if (/sourcestones?/i.test(label)) return { src: items + 'sourcestone.png', block: 'cube' }
  if (/sourceberr/i.test(label)) return { src: items + 'source_berry.png' }
  if (/espada|iron sword/i.test(label)) return { src: items + 'iron_sword.png' }
  if (/picareta|iron pickaxe/i.test(label)) return { src: items + 'iron_pickaxe.png' }
  if (/machado|iron axe/i.test(label)) return { src: items + 'iron_axe.png' }
  if (/pá de ferro|iron shovel/i.test(label)) return { src: items + 'iron_shovel.png' }
  if (/pepita|gold nugget/i.test(label)) return { src: items + 'gold_nugget.png' }
  if (/ouro|gold ingot/i.test(label)) return { src: items + 'gold_ingot.png' }
  if (/ferro|iron ingot/i.test(label)) return { src: items + 'iron_ingot.png' }
  if (/trigo|wheat/i.test(label)) return { src: items + 'wheat.png' }
  if (/diamante|diamond/i.test(label)) return { src: items + 'diamond.png' }
  if (/vidro|glass/i.test(label)) return { src: items + 'glass.png', block: 'cube' }
  if (/\bstone\b/i.test(label)) return { src: items + 'stone.png', block: 'cube' }
  if (/bloco de ametista|amethyst block/i.test(label)) return { src: items + 'amethyst_block.png', block: 'cube' }
  if (/item frame/i.test(label)) return { src: items + 'item_frame.png' }
  if (/ba[uú]|chests?/i.test(label)) return { src: '/images/chest.svg' }
  if (/l[aá]pis|lapis/i.test(label)) return { src: items + 'lapis_lazuli.png' }
  if (/ametista|amethyst/i.test(label)) return { src: items + 'amethyst_shard.png' }
  if (/muda|sapling/i.test(label)) return { src: items + 'archwood_sapling.png' }
  if (/laje|slab/i.test(label)) return { src: items + 'archwood_planks.png', block: 'slab' }
  if (/t[áa]bua.*archwood|archwood planks/i.test(label)) return { src: items + 'archwood_planks.png', block: 'planks' }
  if (/t[áa]buas? de madeira|wood planks/i.test(label)) return { src: items + 'oak_planks.png', block: 'planks' }
  if (/tronco.*archwood|archwood logs?/i.test(label)) return { src: items + 'archwood_log.png', block: 'log' }
  if (/graveto|stick/i.test(label)) return { src: items + 'stick.png' }
  if (/pap[eé]is|papel|paper/i.test(label)) return { src: items + 'paper.png' }
  if (/couro|leather/i.test(label)) return { src: items + 'leather.png' }
  if (/livro|book/i.test(label)) return { src: items + 'book.png' }
}

export function ItemIcon({ label, className = '' }: { label: string; className?: string }) {
  const visual = itemVisual(label)
  if (!visual) return null
  if (!visual.block) return <img className={`item-icon ${className}`} src={visual.src} alt="" aria-hidden="true" />
  const top = visual.block === 'log' ? items + 'archwood_log_top.png' : visual.src
  return <span className={`block-item ${visual.block} ${className}`} aria-hidden="true">
    <i className="block-top" style={{ backgroundImage: `url(${top})` }} />
    <i className="block-left" style={{ backgroundImage: `url(${visual.src})` }} />
    <i className="block-right" style={{ backgroundImage: `url(${visual.src})` }} />
  </span>
}
