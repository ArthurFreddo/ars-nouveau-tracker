import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { mageCategories, mageTasks, magePracticalOrder, magicStations, threadReference, type MageCategory } from '../data/mage'
import { magePortraitFor, magePortraits } from '../data/mageArtwork'
import { ActivityCard } from './ActivityCard'
import { ContentSections } from './ContentSections'
import { PixelIcon } from './PixelIcon'
import { ProgressBar } from './ProgressBar'
import { useMagicMotion } from './MagicPreferences'

type MageProps = { completed: Set<string>; saved: boolean; onEssences: () => void }

export function MageProgressEntry({ completed, saved, active, onOpen, onEssences }: MageProps & { active: boolean; onOpen: () => void }) {
  const count = mageTasks.filter(task => completed.has(task.id)).length
  const percent = Math.round(count / mageTasks.length * 100)
  const portrait = magePortraitFor(percent)
  return <div className="parallel-entry">
    <section className={`mage-entry ${active ? 'active' : ''}`} aria-labelledby="mage-entry-title">
      <img src={portrait.src} alt={portrait.alt} />
      <div><div className="eyebrow">SUA JORNADA PESSOAL · {portrait.label}</div><h2 id="mage-entry-title">Progressão do Mago</h2><ProgressBar completed={count} total={mageTasks.length} label="Resumo da progressão do mago" /><p>{saved ? 'Progresso independente da torre' : 'Salvamento indisponível'}</p></div>
      <button className="primary-button" aria-pressed={active} onClick={onOpen}>Ver progresso do mago <PixelIcon name="arrow" /></button>
    </section>
    <button className="essence-entry" onClick={onEssences}><PixelIcon name="book" /><span><b>Guia rápido de essências</b><small>Receitas, catalisadores e usos · consulta</small></span><PixelIcon name="arrow" /></button>
  </div>
}

export function MageProgressPanel({ completed, saved, onToggle, onBack, onEssences }: MageProps & { onToggle: (id: string) => void; onBack: () => void }) {
  const [category, setCategory] = useState<MageCategory | 'Todas'>('Feitiços')
  const [pendingOnly, setPendingOnly] = useState(false)
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const animated = useMagicMotion()
  const count = mageTasks.filter(task => completed.has(task.id)).length
  const percent = Math.round(count / mageTasks.length * 100)
  const portrait = magePortraitFor(percent)
  const visible = mageTasks.filter(task => (category === 'Todas' || task.category === category) && (!pendingOnly || !completed.has(task.id)))
  return <div className="workspace mage-workspace" id="mage-progress">
    <section className="stage-panel wood-frame" aria-labelledby="mage-panel-title">
      <div className="stage-intro"><div className="eyebrow">TRILHA PARALELA · 17 OBJETIVOS</div><h2 id="mage-panel-title">Progressão do Mago</h2><p>Feitiços, livros, armadura e Threads. Avance no seu ritmo, em paralelo à construção da torre.</p><div className="stage-progress"><ProgressBar completed={count} total={mageTasks.length} label="Progresso do mago" /></div></div>
      <div className="mage-actions"><button className="text-button" onClick={onBack}><PixelIcon name="arrow" />Voltar à torre</button><button className="primary-button" onClick={onEssences}><PixelIcon name="book" />Consultar essências</button></div>
      <nav className="mage-categories" aria-label="Categorias do mago">{(['Todas', ...mageCategories] as const).map(item => {
        const tasks = mageTasks.filter(task => item === 'Todas' || task.category === item)
        const done = tasks.filter(task => completed.has(task.id)).length
        return <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}<small>{done}/{tasks.length}</small></button>
      })}</nav>
      <div className="activity-toolbar"><h3>{category === 'Todas' ? 'Seus objetivos' : category}<span>{visible.length} à vista</span></h3><label className="pending-filter"><input type="checkbox" checked={pendingOnly} onChange={event => setPendingOnly(event.target.checked)} /><span className="filter-switch" aria-hidden="true" /><span>Só pendentes</span></label></div>
      <details className="stage-guidance"><summary><PixelIcon name="info" /><span>Ordem prática sugerida</span><PixelIcon name="chevron" /></summary><p>{magePracticalOrder}</p></details>
      <div className="activities"><AnimatePresence initial={false}>{visible.map(task => <ActivityCard key={task.id} task={task} number={mageTasks.indexOf(task) + 1} completed={completed.has(task.id)} onToggle={() => onToggle(task.id)} expanded={expanded.has(task.id)} onExpand={() => setExpanded(previous => { const next = new Set(previous); if (next.has(task.id)) next.delete(task.id); else next.add(task.id); return next })} />)}</AnimatePresence></div>
      {visible.length === 0 && <div className="empty-state"><h3>Tudo conferido por aqui.</h3><p>Escolha outra categoria ou desative o filtro para revisitar suas anotações.</p></div>}
      <details className="stage-overview mage-reference"><summary><PixelIcon name="book" /><span>Threads adicionais · consulta</span><PixelIcon name="chevron" /></summary><ContentSections sections={[{ title: 'Threads adicionais para consulta', table: threadReference, paragraphs: ['Não contam como tarefas. As receitas usam Blank Thread no centro do Enchanting Apparatus.'] }]} /><div className="sources">{['feather', 'heights', 'repairing', 'magic_capacity'].map(name => <a key={name} href={`https://ars.guide/book/armor/thread_${name}/`} target="_blank" rel="noreferrer">{name.replaceAll('_', ' ')} ↗</a>)}</div></details>
      <details className="stage-overview mage-reference"><summary><PixelIcon name="book" /><span>Estações mágicas · referência rápida</span><PixelIcon name="chevron" /></summary><ContentSections sections={[{ title: 'Onde trabalhar na torre', table: magicStations }]} /></details>
    </section>
    <aside className="sidebar mage-sidebar">
      <section className="mage-portrait-panel wood-frame"><div className="eyebrow">SEU RETRATO ARCANO</div><div className="mage-portrait-art"><AnimatePresence mode="wait" initial={false}><motion.img key={portrait.id} src={portrait.src} alt={portrait.alt} initial={animated ? { opacity: 0, y: 8 } : false} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: animated ? .3 : 0 }} /></AnimatePresence></div><h3>{portrait.title}</h3><p>{count} de 17 objetivos · {percent}%</p><ol className="mage-milestones">{magePortraits.map(item => <li key={item.id} aria-current={portrait.id === item.id ? 'step' : undefined}><span>{item.label}</span><b>{item.range}</b></li>)}</ol><p className="mage-portrait-note">O retrato evolui com o progresso desta trilha.</p></section>
      <p className={`local-note ${saved ? '' : 'save-error'}`}><PixelIcon name="save" />{saved ? 'Progresso do mago salvo neste navegador.' : 'As marcações ficarão apenas nesta sessão.'}</p>
    </aside>
  </div>
}
