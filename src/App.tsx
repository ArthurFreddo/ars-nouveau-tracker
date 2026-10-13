import { useState } from 'react'
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
  const { completed, toggle, saved } = useProgress()
  const stage = stages.find(item => item.id === selected)!
  const total = stages.reduce((count, item) => count + item.tasks.length, 0)
  const stageCompleted = stage.tasks.filter(task => completed.has(task.id)).length
  const completedCount = stages.flatMap(item => item.tasks).filter(task => completed.has(task.id)).length
  const stageDone = stageCompleted === stage.tasks.length
  const visibleTasks = stage.tasks.filter(task => !pendingOnly || !completed.has(task.id))
  const provisionalCount = stages.filter(item => item.provisional).reduce((count, item) => count + item.tasks.length, 0)
  return <main className="tracker">
    <header className="hero">
      <div className="hero-emblem"><GameIcon name="book" /></div>
      <div className="hero-copy">
        <div className="eyebrow">MINECRAFT 1.20.1 <span>·</span> SEU GRIMÓRIO DE JORNADA</div>
        <h1>Ars Nouveau <span>Progress Tracker</span></h1>
        <p className="hero-subtitle">✦ Diário de progressão mágica ✦</p>
        <ProgressBar completed={completedCount} total={total} label="Progresso geral" />
      </div>
      <div className="hero-seal"><span>ARS</span><small>NOUVEAU</small><i>✦</i></div>
    </header>
    <nav className="stage-nav wood-frame" aria-label="Etapas da jornada">
      {stages.map((item, index) => <button key={item.id} aria-current={selected === item.id ? 'step' : undefined}
        className={`stage-tab ${selected === item.id ? 'active' : ''}`} onClick={() => setSelected(item.id)}>
        <GameIcon name={item.icon} /><span><b>{index + 1}</b> {item.name}</span>
        {item.tasks.every(task => completed.has(task.id)) && <span className="tab-complete"><PixelIcon name="check" /></span>}
      </button>)}
    </nav>
    <div className="workspace">
      <section className="stage-panel wood-frame" aria-labelledby="stage-title">
        <div className="stage-heading">
          <div className="item-slot"><GameIcon name={stage.icon} /></div>
          <div className="stage-heading-copy"><div className="eyebrow">ETAPA {stages.indexOf(stage) + 1} / 8 <span>·</span> {stage.difficulty}</div>
            <h2 id="stage-title">{stage.title}</h2><p>{stage.description}</p>
          </div>
        </div>
        <ProgressBar completed={stageCompleted} total={stage.tasks.length} label="Progresso da etapa" />
        <div className="activity-toolbar"><span>{stageDone ? '✦ Etapa concluída' : `${stage.tasks.length - stageCompleted} ${stage.tasks.length - stageCompleted === 1 ? 'atividade pendente' : 'atividades pendentes'}`}</span><label className="pending-filter"><input type="checkbox" checked={pendingOnly} onChange={event => setPendingOnly(event.target.checked)} /><span>Mostrar só pendentes</span></label></div>
        {stage.provisional && <p className="provisional-note">✦ Conteúdo provisório · atividades reais a fornecer</p>}
        {stage.note && <p className="stage-note">{stage.note}</p>}
        {stage.overview && <details className="stage-overview" key={stage.id}><summary>Planejamento e materiais da etapa <PixelIcon name="chevron" /></summary><ContentSections sections={stage.overview} /></details>}
        <div className="activities">{visibleTasks.map(task => <ActivityCard key={task.id} task={task} number={stage.tasks.indexOf(task) + 1} completed={completed.has(task.id)} onToggle={() => toggle(task.id)} />)}</div>
        {visibleTasks.length === 0 && <div className="empty-state"><GameIcon name="crystal" /><h3>Tudo concluído nesta etapa!</h3><p>Desative o filtro para rever suas atividades.</p>{stages.indexOf(stage) < stages.length - 1 && <button onClick={() => setSelected(stages[stages.indexOf(stage) + 1].id)}>Ir para a próxima etapa →</button>}</div>}
      </section>
      <aside className="sidebar">
        <section className="summary-panel wood-frame"><h2>Progresso geral</h2><ProgressBar completed={completedCount} total={total} label="Resumo geral" />
          <dl><div><dt><i className="status-square green" />Concluídas</dt><dd>{completedCount}</dd></div><div><dt><i className="status-square" />Pendentes</dt><dd>{total - completedCount}</dd></div><div><dt><i className="status-square purple" />Total de atividades</dt><dd>{total}</dd></div></dl>
          <p className="summary-note">{total - provisionalCount} do roteiro · {provisionalCount} provisórias<br />As demonstrações entram no progresso.</p>
        </section>
        <section className="journal-panel"><div className="eyebrow">UMA JORNADA, UM PASSO POR VEZ</div><blockquote>Todo grande feitiço começa com um único ponto de Source.</blockquote><span className="journal-star">✦</span><p>Seu diário arcano</p></section>
        <div className="tower-art" aria-hidden="true"><div className="tower-moon" /><div className="tower-spire" /><div className="tower-body"><i /><i /><i /></div><div className="tower-ground" /><GameIcon name="crystal" className="tower-crystal" /></div>
        <p className={`local-note ${saved ? '' : 'save-error'}`} role="status"><PixelIcon name="save" />{saved ? 'Salvo neste navegador' : 'Não foi possível salvar neste navegador'}<br /><span>{saved ? 'Seu progresso fica com você.' : 'As marcações ficarão apenas nesta sessão.'}</span></p>
      </aside>
    </div>
    <footer><span>✦ Ars Nouveau · Minecraft 1.20.1</span><span>Seu diário local de progressão</span></footer>
  </main>
}
