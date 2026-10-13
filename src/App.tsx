import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { AnimatePresence, MotionConfig, motion, useReducedMotion, usePageInView } from 'motion/react'
import { stages } from './data/stages'
import { beatrizPortraits, companionArtwork } from './data/artwork'
import { GameIcon } from './components/GameIcon'
import { ProgressBar } from './components/ProgressBar'
import { ActivityCard } from './components/ActivityCard'
import { PixelIcon } from './components/PixelIcon'
import { useProgress } from './useProgress'
import { ContentSections } from './components/ContentSections'
import { MagicPreferences } from './components/MagicPreferences'
import { celebrateCompletion, stopCompletionMagic } from './components/completionMagic'
const ArcaneAtmosphere = lazy(() => import('./components/ArcaneAtmosphere'))

export default function App() {
  const [selected, setSelected] = useState(stages[0].id)
  const [pendingOnly, setPendingOnly] = useState(false)
  const [expandedTasks, setExpandedTasks] = useState<Set<string>>(new Set())
  const [portraitOffset] = useState(() => Math.floor(Math.random() * beatrizPortraits.length))
  const { completed, toggle, saved } = useProgress()
  const reducedMotion = useReducedMotion()
  const pageVisible = usePageInView()
  const [magicPaused, setMagicPaused] = useState(false)
  const animated = !reducedMotion && !magicPaused && pageVisible
  const [celebration, setCelebration] = useState<{ id: number; title: string; chapterComplete: boolean } | null>(null)
  const requestedTaskFocus = useRef<string | null>(null)
  const celebrationTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(() => { if (!animated) stopCompletionMagic() }, [animated])
  useEffect(() => () => { clearTimeout(celebrationTimer.current); stopCompletionMagic() }, [])
  const stage = stages.find(item => item.id === selected) ?? stages[0]
  const stageIndex = stages.indexOf(stage)
  const allTasks = stages.flatMap(item => item.tasks)
  const total = allTasks.length
  const completedCount = allTasks.filter(task => completed.has(task.id)).length
  const percent = Math.round(completedCount / total * 100)
  const stageCompleted = stage.tasks.filter(task => completed.has(task.id)).length
  const stageDone = stageCompleted === stage.tasks.length
  const remaining = stage.tasks.length - stageCompleted
  const visibleTasks = stage.tasks.filter(task => !pendingOnly || !completed.has(task.id))
  const nextTask = stage.tasks.find(task => !completed.has(task.id))
  const completedStages = stages.filter(item => item.tasks.every(task => completed.has(task.id))).length
  const provisionalCount = stages.filter(item => item.provisional).flatMap(item => item.tasks).length
  const portrait = beatrizPortraits[(portraitOffset + stageIndex + completedCount) % beatrizPortraits.length]
  const creaturesCompleted = stages[4].tasks.filter(task => completed.has(task.id)).length
  const companions = creaturesCompleted >= Math.ceil(stages[4].tasks.length / 2) ? companionArtwork.magic : companionArtwork.garden

  function toggleActivity(id: string, target: HTMLElement) {
    const completing = !completed.has(id)
    toggle(id)
    if (!completing) {
      clearTimeout(celebrationTimer.current)
      setCelebration(null)
      return
    }
    const chapterComplete = stage.tasks.every(task => task.id === id || completed.has(task.id))
    if (animated) void celebrateCompletion(target, chapterComplete)
    const task = allTasks.find(item => item.id === id)!
    setCelebration({ id: Date.now(), title: task.title, chapterComplete })
    clearTimeout(celebrationTimer.current)
    celebrationTimer.current = setTimeout(() => setCelebration(null), 3400)
  }

  function expand(id: string) {
    setExpandedTasks(previous => {
      const next = new Set(previous)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }
  function focusRequestedTask() {
    const id = requestedTaskFocus.current
    if (!id) return
    const card = document.getElementById(`activity-${id}`)
    if (!card) return
    card.scrollIntoView({ behavior: animated ? 'smooth' : 'instant', block: 'start' })
    card.querySelector<HTMLButtonElement>('.expand-button')?.focus({ preventScroll: true })
    requestedTaskFocus.current = null
  }
  function openNextTask() {
    if (!nextTask) return
    requestedTaskFocus.current = nextTask.id
    setExpandedTasks(previous => new Set([...previous, nextTask.id]))
    requestAnimationFrame(focusRequestedTask)
  }

  return <MagicPreferences value={animated}><MotionConfig reducedMotion={animated ? "user" : "always"}>
    {animated && <Suspense fallback={null}><ArcaneAtmosphere /></Suspense>}
    <main className={`tracker ${animated ? "magic-active" : "magic-paused"}`}>
      <header className="hero">
        <div className="hero-shade" />
        <motion.div className="hero-aura" aria-hidden="true" animate={{ opacity: animated ? [.35, .65, .35] : .45 }} transition={{ duration: 5, repeat: animated ? Infinity : 0, ease: 'easeInOut' }} />
        <AnimatePresence mode="wait" initial={false}><motion.img key={portrait.id} className="hero-portrait"
          src={portrait.src} alt={portrait.alt}
          initial={animated ? { opacity: 0, x: 12 } : false} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: animated ? .35 : 0 }} /></AnimatePresence>
        <motion.div className="hero-emblem" aria-hidden="true" animate={{ y: animated ? [0, -9, 0] : 0, rotate: animated ? [-2, 2, -2] : 0 }} transition={{ duration: 5, repeat: animated ? Infinity : 0, ease: 'easeInOut' }}><img className="game-icon" src="/images/enchanted-book-emblem-v3.png" alt="" /></motion.div>
        <div className="hero-copy">
          <div className="hero-kicker"><span>✧</span> O GRIMÓRIO DE BEATRIZ <i /> EDIÇÃO ARCANA</div>
          <h1>Ars Nouveau <span>Progress Tracker</span></h1>
          <p className="hero-subtitle"><span>✦</span> Diário de progressão mágica <span>✦</span></p>
          <div className="hero-progress"><ProgressBar completed={completedCount} total={total} label="Progresso geral" /></div>
        </div>
        <div className="hero-art-label" title="A pose muda ao trocar de etapa ou atualizar o progresso."><span>BEATRIZ</span><small>{portrait.label}</small></div>
        <button className="magic-toggle" aria-pressed={magicPaused} onClick={() => setMagicPaused(value => !value)} title={reducedMotion ? "O movimento reduzido está ativo no sistema." : undefined}><span aria-hidden="true">{animated ? "✦" : "◇"}</span>{reducedMotion ? "Movimento reduzido" : magicPaused ? "Ativar efeitos" : "Pausar efeitos"}</button>
        <div className="masthead-meta"><span className="version-tag">JAVA <b>1.20.1</b></span><span className={saved ? 'save-status' : 'save-status save-error'} role="status"><i />{saved ? 'Progresso salvo' : 'Salvamento indisponível'}</span></div>
      </header>

      <nav className="stage-nav wood-frame" aria-label="Etapas da jornada">
        {stages.map((item, index) => {
          const count = item.tasks.filter(task => completed.has(task.id)).length
          const done = count === item.tasks.length
          return <motion.button key={item.id} aria-current={selected === item.id ? 'step' : undefined}
            className={`stage-tab ${selected === item.id ? 'active' : ''} ${done ? 'done' : ''}`}
            onClick={() => setSelected(item.id)} whileHover={!animated ? undefined : { y: -2 }} whileTap={!animated ? undefined : { scale: .97 }}>
            {selected === item.id && <motion.span className="tab-sigil" layoutId="active-chapter" transition={{ type: "spring", stiffness: 350, damping: 32, duration: animated ? undefined : 0 }} aria-hidden="true" />}
            <span className="tab-index">{String(index + 1).padStart(2, '0')}</span>
            <GameIcon name={item.icon} /><span className="tab-name">{item.name}</span>
            <span className="tab-count">{done ? <><PixelIcon name="check" />Concluída</> : item.provisional ? 'Provisória' : `${count} / ${item.tasks.length}`}</span>
            <span className="tab-progress" style={{ width: `${count / item.tasks.length * 100}%` }} />
          </motion.button>
        })}
      </nav>

      <div className="workspace">
        <AnimatePresence mode="wait" initial={false}><motion.section key={stage.id} className="stage-panel wood-frame" aria-labelledby="stage-title" onAnimationComplete={focusRequestedTask}
          initial={animated ? { opacity: 0, y: 16 } : false} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: animated ? -8 : 0 }} transition={{ duration: animated ? .28 : 0, ease: [.22, 1, .36, 1] }}>
          <div className="stage-intro"><div className="stage-heading">
            <div className="item-slot stage-emblem"><GameIcon name={stage.icon} /></div>
            <div className="stage-heading-copy"><div className="eyebrow">CAPÍTULO {String(stageIndex + 1).padStart(2, '0')} <span>·</span> {stage.difficulty}</div><h2 id="stage-title">{stage.title}</h2><p>{stage.description}</p></div>
          </div>
          <div className="stage-progress"><ProgressBar completed={stageCompleted} total={stage.tasks.length} label="Progresso da etapa" /></div></div>
          <div className="activity-toolbar"><h3>{stageDone ? <><PixelIcon name="check" />Etapa concluída</> : <>Suas atividades <span>{remaining} {remaining === 1 ? 'pendente' : 'pendentes'}</span></>}</h3>
            <label className="pending-filter"><input type="checkbox" checked={pendingOnly} onChange={event => setPendingOnly(event.target.checked)} /><span className="filter-switch" aria-hidden="true" /><span>Só pendentes</span></label>
          </div>
          {stage.provisional && <p className="provisional-note"><PixelIcon name="info" />Conteúdo provisório. O roteiro desta etapa ainda será fornecido.</p>}
          {stage.note && <details className="stage-guidance"><summary><PixelIcon name="info" /><span>Antes de começar <small>Metas e observações</small></span><PixelIcon name="chevron" /></summary><p>{stage.note}</p></details>}
          {stage.overview && <details className="stage-overview"><summary><PixelIcon name="book" /><span>Planejamento e materiais da etapa</span><PixelIcon name="chevron" /></summary><ContentSections sections={stage.overview} /></details>}
          <div className="activities">
            <AnimatePresence initial={false}>
              {visibleTasks.map(task => <ActivityCard key={task.id} task={task} number={stage.tasks.indexOf(task) + 1}
                completed={completed.has(task.id)} onToggle={target => toggleActivity(task.id, target)} expanded={expandedTasks.has(task.id)} onExpand={() => expand(task.id)} />)}
            </AnimatePresence>
          </div>
          {visibleTasks.length === 0 && <div className="empty-state"><GameIcon name="crystal" /><h3>Mais um capítulo completo.</h3><p>Todas as atividades desta etapa estão concluídas.<br />Desative o filtro para revisitar suas anotações.</p>{stageIndex < stages.length - 1 && <button className="primary-button" onClick={() => setSelected(stages[stageIndex + 1].id)}>Continuar a jornada <PixelIcon name="arrow" /></button>}</div>}
          <div className="stage-pagination"><span>Etapa {stageIndex + 1} de 8</span>{stageIndex < stages.length - 1 && <button onClick={() => setSelected(stages[stageIndex + 1].id)}>Próxima: {stages[stageIndex + 1].name}<PixelIcon name="arrow" /></button>}</div>
        </motion.section></AnimatePresence>

        <aside className="sidebar">
          <section className="summary-panel wood-frame"><div className="panel-heading"><h2>Progresso geral</h2><GameIcon name="crystal" /></div>
            <ProgressBar completed={completedCount} total={total} label="Resumo do progresso" />
            <dl><div><dt><i className="status-square green" />Concluídas</dt><dd>{completedCount}</dd></div><div><dt><i className="status-square" />Pendentes</dt><dd>{total - completedCount}</dd></div><div><dt><i className="status-square violet" />Total</dt><dd>{total}</dd></div></dl>
            <p className="stages-stat">{completedStages} de 8 etapas completas · {percent}% da jornada</p>
            <p className="summary-note">{total - provisionalCount} atividades do roteiro · {provisionalCount} {provisionalCount === 1 ? 'provisória' : 'provisórias'}<br />{provisionalCount === 1 ? 'A demonstração também entra no total.' : 'As demonstrações também entram no total.'}</p>
          </section>
          <section className="next-task-panel"><div className="eyebrow">{stageDone ? 'ETAPA COMPLETA' : 'SEU PRÓXIMO PASSO'}</div>{nextTask ? <><GameIcon name={nextTask.icon} /><h3>{nextTask.title}</h3><p>Etapa {stageIndex + 1} · {stage.name}</p><button className="primary-button" onClick={openNextTask}>Abrir próxima atividade <PixelIcon name="arrow" /></button></> : <><GameIcon name="crystal" /><h3>Tudo pronto por aqui.</h3><p>{stageIndex < 7 ? 'Continue para a próxima etapa do grimório.' : 'Sua jornada está completa.'}</p>{stageIndex < 7 && <button className="primary-button" onClick={() => setSelected(stages[stageIndex + 1].id)}>Próxima etapa <PixelIcon name="arrow" /></button>}</>}</section>
          <section className="journal-panel"><span className="journal-star">✦</span><blockquote>Todo grande feitiço começa com um único ponto de Source.</blockquote><p>ARS NOUVEAU</p></section>
          <section className="companions-panel"><div className="eyebrow">COMPANHEIROS DO GRIMÓRIO</div>
            <AnimatePresence mode="wait" initial={false}><motion.img key={companions.id} src={companions.src} alt={companions.alt} loading="lazy"
              initial={animated ? { opacity: 0 } : false} animate={{ opacity: 1, y: animated ? [0, -6, 0] : 0 }} exit={{ opacity: 0 }}
              transition={{ opacity: { duration: animated ? .3 : 0 }, y: { duration: 4, repeat: animated ? Infinity : 0, ease: 'easeInOut' } }} /></AnimatePresence>
            <p className="companions-caption">Beatriz, Starbuncle e Whirlisprig</p>
            <button className="text-button" onClick={() => { setSelected(stages[4].id); document.querySelector(".stage-nav")?.scrollIntoView({ behavior: animated ? "smooth" : "instant", block: "start" }) }}>Visitar criaturas <PixelIcon name="arrow" /></button>
          </section>
          <div className="grimoire-decoration" aria-hidden="true"><motion.img className="potion-props" src="/images/alchemy-potions-v4.png" alt="" loading="lazy" animate={{ y: animated ? [0, -4, 0] : 0 }} transition={{ duration: 6, repeat: animated ? Infinity : 0, ease: 'easeInOut' }} /><img className="book-props" src="/images/enchanted-grimoire-v3.png" alt="" loading="lazy" /></div>
          <p className={`local-note ${saved ? '' : 'save-error'}`}><PixelIcon name="save" />{saved ? 'Salvo automaticamente neste navegador.' : 'As marcações ficarão apenas nesta sessão.'}</p>
        </aside>
      </div>
      <div className="completion-announcement" role="status" aria-live="polite"><AnimatePresence>{celebration && <motion.div className="completion-toast" key={celebration.id} initial={animated ? { opacity: 0, y: 24, scale: .96 } : false} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: animated ? 12 : 0 }} transition={{ duration: animated ? .25 : 0 }}><GameIcon name="crystal" /><div><strong>{celebration.chapterComplete ? 'Capítulo completo!' : 'Atividade concluída'}</strong><span>{celebration.title}</span></div><PixelIcon name="check" /></motion.div>}</AnimatePresence></div>
      <footer><span><span>✦</span> Ars Nouveau · Minecraft 1.20.1</span><span>Feito para descobrir, construir e lembrar.</span></footer>
    </main>
  </MotionConfig></MagicPreferences>
}
