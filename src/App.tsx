import { useState, type CSSProperties } from 'react'
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'motion/react'
import { stages } from './data/stages'
import { GameIcon } from './components/GameIcon'
import { ProgressBar } from './components/ProgressBar'
import { ActivityCard } from './components/ActivityCard'
import { PixelIcon } from './components/PixelIcon'
import { useProgress } from './useProgress'
import { ContentSections } from './components/ContentSections'

export default function App() {
  const [selected, setSelected] = useState(stages[0].id)
  const [pendingOnly, setPendingOnly] = useState(false)
  const [expandedTasks, setExpandedTasks] = useState<Set<string>>(new Set())
  const { completed, toggle, saved } = useProgress()
  const reducedMotion = useReducedMotion()
  const stage = stages.find(item => item.id === selected)!
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

  function expand(id: string) {
    setExpandedTasks(previous => {
      const next = new Set(previous)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }
  function openNextTask() {
    if (!nextTask) return
    setExpandedTasks(previous => new Set([...previous, nextTask.id]))
    requestAnimationFrame(() => {
      const card = document.getElementById(`activity-${nextTask.id}`)
      card?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' })
      card?.querySelector<HTMLButtonElement>('.expand-button')?.focus({ preventScroll: true })
    })
  }

  return <MotionConfig reducedMotion="user">
    <main className="tracker">
      <div className="masthead">
        <div className="brand"><GameIcon name="book" /><span>O GRIMÓRIO <b>ARCANO</b></span></div>
        <div className="masthead-meta"><span className="version-tag">MINECRAFT JAVA <b>1.20.1</b></span><span className={saved ? 'save-status' : 'save-status save-error'} role="status"><i />{saved ? 'Progresso salvo' : 'Salvamento indisponível'}</span></div>
      </div>
      <header className="hero">
        <img className="hero-scene" src="/images/arcane-workshop.png" alt="" />
        <div className="hero-shade" />
        <img className="hero-portrait" src="/images/beatriz-mage.png" alt="Beatriz em uma versão de maga, com seu grimório e um cristal violeta." />
        <div className="magic-motes" aria-hidden="true">{Array.from({ length: 7 }, (_, i) => <i key={i} style={{ '--i': i } as CSSProperties} />)}</div>
        <div className="hero-copy">
          <p className="eyebrow"><span className="magic-star">✦</span> DIÁRIO DE PROGRESSÃO MÁGICA</p>
          <h1>Ars Nouveau <span>Progress Tracker</span></h1>
          <p className="hero-subtitle">Uma descoberta. Um feitiço. Um novo capítulo.</p>
          <div className="hero-progress"><div className="progress-caption"><span>Sua jornada até aqui</span><b>{completedStages} de 8 etapas concluídas</b></div><ProgressBar completed={completedCount} total={total} label="Progresso geral" /></div>
        </div>
        <div className="hero-art-label"><span>BEATRIZ</span><small>EDIÇÃO ARCANA · TGT</small></div>
      </header>

      <div className="journey-heading"><h2><span>✦</span> O caminho do mago</h2><span>8 etapas · uma jornada</span></div>
      <nav className="stage-nav wood-frame" aria-label="Etapas da jornada">
        {stages.map((item, index) => {
          const count = item.tasks.filter(task => completed.has(task.id)).length
          const done = count === item.tasks.length
          return <motion.button key={item.id} aria-current={selected === item.id ? 'step' : undefined}
            className={`stage-tab ${selected === item.id ? 'active' : ''} ${done ? 'done' : ''}`}
            onClick={() => setSelected(item.id)} whileHover={reducedMotion ? undefined : { y: -2 }} whileTap={reducedMotion ? undefined : { scale: .97 }}>
            <span className="tab-index">{String(index + 1).padStart(2, '0')}</span>
            <GameIcon name={item.icon} /><span className="tab-name">{item.name}</span>
            <span className="tab-count">{done ? <><PixelIcon name="check" />Concluída</> : item.provisional ? 'Provisória' : `${count} / ${item.tasks.length}`}</span>
            <span className="tab-progress" style={{ width: `${count / item.tasks.length * 100}%` }} />
          </motion.button>
        })}
      </nav>

      <div className="workspace">
        <motion.section key={stage.id} className="stage-panel wood-frame" aria-labelledby="stage-title"
          initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .22 }}>
          <div className="stage-heading">
            <div className="item-slot stage-emblem"><GameIcon name={stage.icon} /></div>
            <div className="stage-heading-copy"><div className="eyebrow">ETAPA {String(stageIndex + 1).padStart(2, '0')} <span>·</span> {stage.difficulty}</div><h2 id="stage-title">{stage.title}</h2><p>{stage.description}</p></div>
          </div>
          <div className="stage-progress"><ProgressBar completed={stageCompleted} total={stage.tasks.length} label="Progresso da etapa" /></div>
          <div className="activity-toolbar"><h3>{stageDone ? <><PixelIcon name="check" />Etapa concluída</> : <>Suas atividades <span>{remaining} {remaining === 1 ? 'pendente' : 'pendentes'}</span></>}</h3>
            <label className="pending-filter"><input type="checkbox" checked={pendingOnly} onChange={event => setPendingOnly(event.target.checked)} /><span className="filter-switch" aria-hidden="true" /><span>Só pendentes</span></label>
          </div>
          {stage.provisional && <p className="provisional-note"><PixelIcon name="info" />Conteúdo provisório. O roteiro desta etapa ainda será fornecido.</p>}
          {stage.note && <details className="stage-guidance"><summary><PixelIcon name="info" /><span>Antes de começar <small>Metas e observações</small></span><PixelIcon name="chevron" /></summary><p>{stage.note}</p></details>}
          {stage.overview && <details className="stage-overview"><summary><PixelIcon name="book" /><span>Planejamento e materiais da etapa</span><PixelIcon name="chevron" /></summary><ContentSections sections={stage.overview} /></details>}
          <div className="activities">
            <AnimatePresence initial={false}>
              {visibleTasks.map(task => <ActivityCard key={task.id} task={task} number={stage.tasks.indexOf(task) + 1}
                completed={completed.has(task.id)} onToggle={() => toggle(task.id)} expanded={expandedTasks.has(task.id)} onExpand={() => expand(task.id)} />)}
            </AnimatePresence>
          </div>
          {visibleTasks.length === 0 && <div className="empty-state"><GameIcon name="crystal" /><h3>Mais um capítulo completo.</h3><p>Todas as atividades desta etapa estão concluídas.<br />Desative o filtro para revisitar suas anotações.</p>{stageIndex < stages.length - 1 && <button className="primary-button" onClick={() => setSelected(stages[stageIndex + 1].id)}>Continuar a jornada <PixelIcon name="arrow" /></button>}</div>}
          <div className="stage-pagination"><span>Etapa {stageIndex + 1} de 8</span>{stageIndex < stages.length - 1 && <button onClick={() => setSelected(stages[stageIndex + 1].id)}>Próxima: {stages[stageIndex + 1].name}<PixelIcon name="arrow" /></button>}</div>
        </motion.section>

        <aside className="sidebar">
          <section className="summary-panel wood-frame"><div className="panel-heading"><span className="eyebrow">SEU GRIMÓRIO</span><GameIcon name="crystal" /></div><h2>Jornada em números</h2>
            <div className="summary-progress"><div className="progress-orb" style={{ '--progress': `${percent}%` } as CSSProperties}><span><strong>{percent}<small>%</small></strong><i>da jornada</i></span></div><div className="summary-stat"><strong>{completedCount}<span> / {total}</span></strong><p>atividades concluídas</p><span className="stages-stat">{completedStages} / 8 etapas completas</span></div></div>
            <dl><div><dt><i className="status-square green" />Concluídas</dt><dd>{completedCount}</dd></div><div><dt><i className="status-square" />Pendentes</dt><dd>{total - completedCount}</dd></div></dl>
            <p className="summary-note">{total - provisionalCount} atividades do roteiro · {provisionalCount} provisórias<br />As demonstrações também entram no total.</p>
          </section>
          <section className="next-task-panel"><div className="eyebrow">{stageDone ? 'ETAPA COMPLETA' : 'SEU PRÓXIMO PASSO'}</div>{nextTask ? <><GameIcon name={nextTask.icon} /><h3>{nextTask.title}</h3><p>Etapa {stageIndex + 1} · {stage.name}</p><button className="primary-button" onClick={openNextTask}>Abrir próxima atividade <PixelIcon name="arrow" /></button></> : <><GameIcon name="crystal" /><h3>Tudo pronto por aqui.</h3><p>{stageIndex < 7 ? 'Continue para a próxima etapa do grimório.' : 'Sua jornada está completa.'}</p>{stageIndex < 7 && <button className="primary-button" onClick={() => setSelected(stages[stageIndex + 1].id)}>Próxima etapa <PixelIcon name="arrow" /></button>}</>}</section>
          <section className="journal-panel"><img src="/images/arcane-workshop.png" alt="" loading="lazy" /><div><span className="journal-star">✦</span><blockquote>Todo grande feitiço começa com um único ponto de Source.</blockquote><p>UMA JORNADA, UM PASSO POR VEZ</p></div></section>
          <p className={`local-note ${saved ? '' : 'save-error'}`}><PixelIcon name="save" />{saved ? 'Salvo automaticamente neste navegador.' : 'As marcações ficarão apenas nesta sessão.'}</p>
        </aside>
      </div>
      <footer><span><span>✦</span> Ars Nouveau · Minecraft 1.20.1</span><span>Feito para descobrir, construir e lembrar.</span></footer>
    </main>
  </MotionConfig>
}
