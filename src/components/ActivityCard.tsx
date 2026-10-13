import { useState } from 'react'
import type { Activity } from '../data/types'
import { GameIcon } from './GameIcon'
import { PixelIcon } from './PixelIcon'
import { ContentSections } from './ContentSections'

export function ActivityCard({ task, number, completed, onToggle }: { task: Activity; number: number; completed: boolean; onToggle: () => void }) {
  const [expanded, setExpanded] = useState(false)
  const detailId = `details-${task.id}`
  return <article className={`activity ${completed ? 'completed' : ''} ${expanded ? 'expanded' : ''}`}>
    <div className="activity-top">
      <div className="item-slot"><GameIcon name={task.icon} /></div>
      <div className="activity-copy"><span className="task-number">ATIVIDADE {String(number).padStart(2, '0')}{task.location && <> · {task.location}</>}</span><h3>{task.title}</h3><p>{task.summary}</p>
        <button className="expand-button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls={detailId}>{expanded ? 'Recolher detalhes' : 'Ver detalhes'}<PixelIcon name="chevron" /></button>
      </div>
      <label className="task-checkbox" title={completed ? 'Marcar como pendente' : 'Marcar como concluída'}>
        <input type="checkbox" checked={completed} onChange={onToggle} aria-label={`Concluir: ${task.title}`} />
        <span><PixelIcon name="check" /></span>
      </label>
    </div>
    <div id={detailId} hidden={!expanded} className="activity-details">
      <ContentSections sections={task.sections} />
      <div className="conclusion"><PixelIcon name="check" /><div><h4>Condição de conclusão</h4><p>{task.conclusion}</p></div></div>
      <div className="visual-reference"><GameIcon name={task.icon} /><div><h4>Referência visual · imagem a incluir</h4><p>{task.visualReference}</p><small>Ícone ilustrativo local; não é uma textura do mod.</small></div></div>
      {task.sources && <div className="sources"><span>Referências fornecidas</span>{task.sources.map((source, i) => <a key={i} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>)}</div>}
    </div>
  </article>
}
