import { useEffect, useRef, useState } from 'react'
import { essences, essenceSteps, essenceReminder } from '../data/mage'
import { ItemIcon } from './ItemIcon'
import { PixelIcon } from './PixelIcon'

const translatedNames: Record<string, string> = {
  'Air Essence': 'Ar', 'Fire Essence': 'Fogo', 'Water Essence': 'Água', 'Earth Essence': 'Terra',
  'Abjuration Essence': 'Abjuração', 'Conjuration Essence': 'Conjuração', 'Manipulation Essence': 'Manipulação',
}
const normalized = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export function EssenceGuide({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [query, setQuery] = useState('')
  useEffect(() => {
    if (open && !dialog.current?.open) dialog.current?.showModal()
    else if (!open && dialog.current?.open) dialog.current.close()
  }, [open])
  const visible = essences.filter(essence => normalized([essence.name, translatedNames[essence.name], ...essence.catalysts, ...essence.uses].join(' ')).includes(normalized(query.trim())))
  return <dialog ref={dialog} className="essence-guide" aria-labelledby="essence-title" onCancel={onClose} onClose={onClose}>
    <div className="essence-guide-header"><div><div className="eyebrow">SEU CADERNO DE CONSULTA</div><h2 id="essence-title">Guia rápido de essências</h2><p>Encontre a receita quando precisar dela.</p></div><button className="guide-close" onClick={onClose} aria-label="Fechar guia de essências">×</button></div>
    <div className="essence-guide-body">
      <label className="essence-search"><PixelIcon name="book" /><span className="sr-only">Buscar no guia de essências</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar essência, ingrediente ou feitiço" /></label>
      <details className="stage-guidance essence-instructions"><summary><PixelIcon name="info" /><span>Como fabricar essências <small>Imbuement Chamber · laboratório do subsolo</small></span><PixelIcon name="chevron" /></summary><ol>{essenceSteps.map(step => <li key={step}>{step}</li>)}</ol><p><b>Source Gem:</b> {essenceReminder}</p></details>
      <p className="essence-rule"><ItemIcon label="Source Gem" /><span><b>1 Source Gem + 2.000 Source por essência.</b> Os três catalisadores ficam nos pedestais e não são consumidos.</span></p>
      <div className="essence-grid">{visible.map(essence => <article className="essence-card" key={essence.name}>
        <header><div className="item-slot"><ItemIcon label={essence.name} /></div><div><div className="eyebrow">{translatedNames[essence.name]}</div><h3>{essence.name}</h3><span className="essence-energy">{essence.source} Source</span></div></header>
        <p className="essence-reagent"><ItemIcon label={essence.reagent} /><span>{essence.reagent}<small>Na Imbuement Chamber</small></span></p>
        <h4>Nos três pedestais</h4><ul>{essence.catalysts.map(item => <li key={item}><ItemIcon label={item} /><span>{item}</span></li>)}</ul>
        {essence.uses.length > 0 && <p className="essence-uses"><span>Usos neste roteiro</span>{essence.uses.join(' · ')}</p>}
      </article>)}</div>
      {visible.length === 0 && <div className="empty-state"><h3>Nenhuma essência encontrada.</h3><p>Tente o nome da essência, de um catalisador ou de um feitiço do roteiro.</p><button className="text-button" onClick={() => setQuery('')}>Mostrar todas as essências</button></div>}
      <div className="essence-guide-footer"><span>Consulta livre · não altera o progresso</span><a href="https://ars.guide/book/crafting/imbuement_chamber/" target="_blank" rel="noreferrer">Imbuement Chamber ↗</a></div>
    </div>
  </dialog>
}
