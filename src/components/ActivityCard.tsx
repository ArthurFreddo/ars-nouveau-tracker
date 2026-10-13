import { AnimatePresence, motion } from 'motion/react'
import type { Activity } from '../data/types'
import { GameIcon } from './GameIcon'
import { PixelIcon } from './PixelIcon'
import { ContentSections } from './ContentSections'
import { useMagicMotion } from './MagicPreferences'

export function ActivityCard({ task, number, completed, onToggle, expanded, onExpand }: {
  task: Activity; number: number; completed: boolean; onToggle: (target: HTMLElement) => void; expanded: boolean; onExpand: () => void
}) {
  const animated = useMagicMotion()
  const reducedMotion = !animated
  const detailId = `details-${task.id}`
  return <motion.article id={`activity-${task.id}`} className={`activity ${completed ? 'completed' : ''} ${expanded ? 'expanded' : ''}`}
    layout={animated ? 'position' : false} initial={animated ? { opacity: 0, y: 12 } : false} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: animated ? .97 : 1 }}
    transition={{ opacity: { duration: animated ? .25 : 0, delay: animated ? (number - 1) * .045 : 0 }, y: { duration: animated ? .3 : 0, delay: animated ? (number - 1) * .045 : 0 }, layout: { duration: animated ? .25 : 0 } }}>
    <div className="activity-top">
      <div className="item-slot"><GameIcon name={task.icon} /></div>
      <div className="activity-copy">
        <div className="task-meta"><span className="task-number">ATIVIDADE {String(number).padStart(2, '0')}</span>{task.location && <span className="task-location">{task.location}</span>}{completed && <span className="completed-badge"><PixelIcon name="check" />Concluída</span>}</div>
        <h3>{task.title}</h3><p>{task.summary}</p>
        <button className="expand-button" onClick={onExpand} aria-expanded={expanded} aria-controls={detailId}>
          <PixelIcon name="book" />{expanded ? 'Fechar anotações' : 'Ver detalhes'}
          <motion.span className="expand-chevron" animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: reducedMotion ? 0 : .18 }}><PixelIcon name="chevron" /></motion.span>
        </button>
      </div>
      <label className="task-checkbox" title={completed ? 'Marcar como pendente' : 'Marcar como concluída'}>
        <input type="checkbox" checked={completed} onChange={event => onToggle(event.currentTarget)} aria-label={`Concluir: ${task.title}`} />
        <motion.span initial={false} animate={{ scale: completed && animated ? [1, 1.22, 1] : 1 }} transition={{ duration: animated ? .32 : 0 }}><PixelIcon name="check" /></motion.span>
      </label>
    </div>
    <AnimatePresence initial={false}>
      {expanded && <motion.div id={detailId} className="details-reveal"
        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
        transition={{ duration: reducedMotion ? 0 : .23 }}>
        <div className="activity-details">
          <ContentSections sections={task.sections} />
          <div className="conclusion"><PixelIcon name="check" /><div><h4>Condição de conclusão</h4><p>{task.conclusion}</p></div></div>
          <div className="visual-reference"><GameIcon name={task.icon} /><div><h4>Referência dos itens</h4><p>{task.visualReference}</p><small>Ilustrações de equipamentos são referências visuais; confira os itens no jogo.</small></div></div>
          {task.sources && <div className="sources"><span>Referências fornecidas</span>{task.sources.map((source, i) => <a key={i} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>)}</div>}
          <div className="detail-actions"><button className={`primary-button ${completed ? 'secondary-button' : ''}`} onClick={event => onToggle(event.currentTarget)}><PixelIcon name="check" />{completed ? 'Voltar a pendente' : 'Concluir atividade'}</button><button className="text-button" onClick={onExpand}>Recolher detalhes <PixelIcon name="chevron" /></button></div>
        </div>
      </motion.div>}
    </AnimatePresence>
  </motion.article>
}
