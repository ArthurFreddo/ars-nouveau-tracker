import { useRef, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { drygmyTasks, drygmyDescription, drygmyIntroduction, drygmyExpansions, drygmyCompatibility } from '../data/drygmy'
import { ActivityCard } from './ActivityCard'
import { ContentSections } from './ContentSections'
import { ItemIcon } from './ItemIcon'
import { PixelIcon } from './PixelIcon'
import { ProgressBar } from './ProgressBar'
import { useMagicMotion } from './MagicPreferences'

type DrygmyProps = { completed: Set<string>; saved: boolean }

export function DrygmyProgressEntry({ completed, active, onOpen }: DrygmyProps & { active: boolean; onOpen: () => void }) {
  const count = drygmyTasks.filter(task => completed.has(task.id)).length
  return <section className={`drygmy-entry ${active ? 'active' : ''}`} aria-labelledby="drygmy-entry-title">
    <div className="item-slot"><ItemIcon label="Drygmy Charm" /></div><div><div className="eyebrow">UMA NOVA AUTOMAÇÃO · TRILHA INDEPENDENTE</div><h2 id="drygmy-entry-title">Bestiário do Drygmy</h2><p>Dois trabalhadores, um Henge e criaturas preservadas.</p></div>
    <div className="drygmy-entry-progress"><ProgressBar completed={count} total={drygmyTasks.length} label="Resumo do Drygmy" /></div>
    <button className="primary-button" aria-pressed={active} onClick={onOpen}>Ver automação Drygmy <PixelIcon name="arrow" /></button>
  </section>
}

export function DrygmyProgressPanel({ completed, saved, onToggle, onBack, onEssences }: DrygmyProps & { onToggle: (id: string) => void; onBack: () => void; onEssences: () => void }) {
  const [pendingOnly, setPendingOnly] = useState(false)
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const requested = useRef<string | null>(null)
  const animated = useMagicMotion()
  const count = drygmyTasks.filter(task => completed.has(task.id)).length
  const visible = drygmyTasks.filter(task => !pendingOnly || !completed.has(task.id))
  const nextTask = drygmyTasks.find(task => !completed.has(task.id))
  function focusRequestedTask() {
    if (!requested.current) return
    const card = document.getElementById(`activity-${requested.current}`)
    if (!card) return
    card.scrollIntoView({behavior:animated ? 'smooth' : 'instant',block:'start'})
    card.querySelector<HTMLButtonElement>('.expand-button')?.focus({preventScroll:true})
    requested.current = null
  }
  function openNextTask() {
    if (!nextTask) return
    requested.current = nextTask.id
    setPendingOnly(false)
    setExpanded(previous => new Set([...previous,nextTask.id]))
    requestAnimationFrame(focusRequestedTask)
  }
  return <div className="workspace drygmy-workspace" id="drygmy-progress">
    <section className="stage-panel wood-frame" aria-labelledby="drygmy-panel-title">
      <div className="stage-intro"><div className="stage-heading"><div className="item-slot stage-emblem"><ItemIcon label="Drygmy Charm" /></div><div className="stage-heading-copy"><div className="eyebrow">BESTIÁRIO DO SUBSOLO · 11 ETAPAS</div><h2 id="drygmy-panel-title">Automação do Drygmy</h2><p>{drygmyDescription}</p></div></div><div className="stage-progress"><ProgressBar completed={count} total={drygmyTasks.length} label="Progresso do Drygmy" /></div></div>
      <div className="mage-actions"><button className="text-button" onClick={onBack}><PixelIcon name="arrow" />Voltar ao mago</button><button className="primary-button" onClick={onEssences}><PixelIcon name="book" />Consultar essências</button></div>
      <div className="drygmy-scope-note"><ItemIcon label="Containment Jar" /><p><b>Comece com 4–6 potes.</b> As 11 etapas acompanham a fazenda em funcionamento. A parede com 40 potes é uma expansão opcional.</p></div>
      <details className="stage-overview"><summary><PixelIcon name="book" /><span>Como funciona e por onde começar</span><PixelIcon name="chevron" /></summary><ContentSections sections={drygmyIntroduction} /></details>
      <div className="activity-toolbar"><h3>Montar o bestiário <span>{drygmyTasks.length - count} pendentes</span></h3><label className="pending-filter"><input type="checkbox" checked={pendingOnly} onChange={event => setPendingOnly(event.target.checked)} /><span className="filter-switch" aria-hidden="true" /><span>Só pendentes</span></label></div>
      <div className="activities"><AnimatePresence initial={false}>{visible.map(task => <ActivityCard key={task.id} task={task} number={drygmyTasks.indexOf(task)+1} completed={completed.has(task.id)} onToggle={() => onToggle(task.id)} expanded={expanded.has(task.id)} onExpand={() => setExpanded(previous => {const next = new Set(previous);if(next.has(task.id)) next.delete(task.id);else next.add(task.id);return next})} />)}</AnimatePresence></div>
      {visible.length === 0 && <div className="empty-state"><ItemIcon label="Drygmy Charm" /><h3>Bestiário em funcionamento.</h3><p>Revise as etapas desativando o filtro ou planeje as expansões opcionais abaixo.</p></div>}
      <details className="stage-overview drygmy-expansions" id="drygmy-expansoes"><summary><PixelIcon name="book" /><span>Expansões futuras · opcionais</span><PixelIcon name="chevron" /></summary><p className="optional-progress-note">Consulta livre. Estas sugestões não entram na porcentagem de conclusão.</p><ContentSections sections={drygmyExpansions} /></details>
      <p className="drygmy-compatibility">{drygmyCompatibility}</p>
    </section>
    <aside className="sidebar drygmy-sidebar">
      <section className="summary-panel wood-frame"><div className="panel-heading"><h2>Seu bestiário</h2><ItemIcon label="Drygmy Charm" /></div><ProgressBar completed={count} total={drygmyTasks.length} label="Resumo da automação do Drygmy" /><dl><div><dt>Concluídas</dt><dd>{count}</dd></div><div><dt>Pendentes</dt><dd>{drygmyTasks.length-count}</dd></div></dl><p className="summary-note">Progresso independente da torre e do mago.</p></section>
      <section className="next-task-panel"><div className="eyebrow">{nextTask?'SEU PRÓXIMO PASSO':'FAZENDA EM FUNCIONAMENTO'}</div><ItemIcon label={nextTask?.iconItem ?? 'Drygmy Charm'} /><h3>{nextTask?.title ?? 'Expanda no seu ritmo.'}</h3><p>{nextTask?'Avance com a infraestrutura que já existe na torre.':'Novas espécies e os quarenta potes ficam para quando você quiser.'}</p>{nextTask && <button className="primary-button" onClick={openNextTask}>Abrir próxima atividade <PixelIcon name="arrow" /></button>}</section>
      <section className="drygmy-ranges"><h3>Produção · Henge</h3><dl><div><dt>Drygmys no mesmo Henge</dt><dd>2</dd></div><div><dt>Baú de saída</dt><dd>Encostado</dd></div><div><dt>Source Jar</dt><dd>Até 7 blocos</dd></div><div><dt>Criaturas e potes</dt><dd>Até 10 blocos</dd></div><div><dt>Source por produção</dt><dd>1.000</dd></div></dl><p>Conte também a distância vertical. O Henge deve ficar sem sinal de redstone.</p></section>
      <section className="drygmy-ranges"><h3>Captura · Brazier</h3><dl><div><dt>Mob e pote</dt><dd>Até 3 blocos</dd></div><div><dt>Source Jar</dt><dd>Até 6 blocos</dd></div><div><dt>Primeira captura</dt><dd>Gratuita</dd></div><div><dt>Capturas seguintes</dt><dd>Usualmente 500 Source</dd></div></dl><p>Prefira uma estação externa, longe das máquinas e da decoração.</p></section>
      <p className={`local-note ${saved?'':'save-error'}`}><PixelIcon name="save" />{saved?'Bestiário salvo neste navegador.':'As marcações ficarão apenas nesta sessão.'}</p>
    </aside>
  </div>
}
