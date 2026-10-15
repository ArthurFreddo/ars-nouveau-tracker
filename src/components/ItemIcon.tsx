type ItemVisual = { src: string; overlay?: string; block?: 'planks' | 'log' | 'slab' | 'cube' }
const items = '/images/items/'

export function itemVisual(label: string): ItemVisual | undefined {
  label = label.replace(/\s*\(.*$/, '').split(' — ')[0]
  const glyph = label.match(/^Glifo (Conjure Magelight|Leap|Bounce|Slowfall|Heal)$/i)
  if (glyph) return { src: items + 'glyph_' + (glyph[1].toLowerCase() === 'conjure magelight' ? 'light' : glyph[1].toLowerCase()) + '.png' }
  const essence = label.match(/\b(air|fire|water|earth|abjuration|conjuration|manipulation) essence/i)
  if (essence) return { src: items + essence[1].toLowerCase() + '_essence.png' }
  if (/magebloom fibers?/i.test(label)) return { src: items + 'magebloom_fiber.png' }
  if (/magebloom seeds?/i.test(label)) return { src: items + 'magebloom_seed.png' }
  if (/mageblooms?/i.test(label)) return { src: items + 'magebloom.png' }
  if (/magic capacity thread|thread: magic capacity/i.test(label)) return { src: items + 'thread_magic_capacity.png' }
  if (/blank thread/i.test(label)) return { src: items + 'blank_thread.png' }
  if (/wilden wings?/i.test(label)) return { src: items + 'wilden_wing.png' }
  if (/wilden horns?/i.test(label)) return { src: items + 'wilden_horn.png' }
  if (/wilden tribute/i.test(label)) return { src: items + 'wilden_tribute.png' }
  if (/battlemage/i.test(label)) return { src: items + 'battlemage_gambeson_tint.png', overlay: items + 'battlemage_gambeson_gold.png' }
  if (/diamond chestplate|peça de armadura de diamante/i.test(label)) return { src: items + 'diamond_chestplate.png' }
  if (/alteration table/i.test(label)) return { src: '/images/table.svg' }
  if (/fermented spider eye/i.test(label)) return { src: items + 'fermented_spider_eye.png' }
  if (/golden apple/i.test(label)) return { src: items + 'golden_apple.png' }
  if (/wheat seeds|semente.*compatível/i.test(label)) return { src: items + 'wheat_seeds.png' }
  if (/stone button/i.test(label)) return { src: items + 'stone_button.png', block: 'slab' }
  if (/snow block/i.test(label)) return { src: items + 'snow.png', block: 'cube' }
  if (/\bdirt\b|bloco de terra/i.test(label)) return { src: items + 'dirt.png', block: 'cube' }
  if (/obsidian/i.test(label)) return { src: items + 'obsidian.png', block: 'cube' }
  if (/quartz blocks?/i.test(label)) return { src: items + 'quartz_block.png', block: 'cube' }
  const simpleItems: [RegExp, string][] = [
    [/lantern|lanterna/i, 'lantern'], [/torch|tocha/i, 'torch'], [/feathers?|penas?/i, 'feather'],
    [/\barrows?\b/i, 'arrow'], [/flint and steel/i, 'flint_and_steel'], [/gunpowder/i, 'gunpowder'],
    [/water bucket/i, 'water_bucket'], [/milk bucket/i, 'milk_bucket'], [/kelp/i, 'kelp'],
    [/sugar/i, 'sugar'], [/redstone/i, 'redstone'], [/clock/i, 'clock'],
    [/blaze rods?/i, 'blaze_rod'], [/ender pearls?/i, 'ender_pearl'], [/emeralds?/i, 'emerald'],
    [/totem of undying/i, 'totem_of_undying'], [/nether star/i, 'nether_star'],
    [/slimeballs?/i, 'slime_ball'], [/nether wart/i, 'nether_wart'],
    [/glistering melon slices?/i, 'glistering_melon_slice'], [/chorus fruit/i, 'chorus_fruit'],
  ]
  const simple = simpleItems.find(([match]) => match.test(label))
  if (simple) return { src: items + simple[1] + '.png' }
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
  if (visual.overlay) return <span className={`item-icon layered-item ${className}`} aria-hidden="true"><img src={visual.src} alt="" /><img src={visual.overlay} alt="" /></span>
  if (!visual.block) return <img className={`item-icon ${className}`} src={visual.src} alt="" aria-hidden="true" />
  const top = visual.block === 'log' ? items + 'archwood_log_top.png' : visual.src
  return <span className={`block-item ${visual.block} ${className}`} aria-hidden="true">
    <i className="block-top" style={{ backgroundImage: `url(${top})` }} />
    <i className="block-left" style={{ backgroundImage: `url(${visual.src})` }} />
    <i className="block-right" style={{ backgroundImage: `url(${visual.src})` }} />
  </span>
}
