import { useState } from 'react'
import { stages } from './data/stages'
import { GameIcon } from './components/GameIcon'
import { ProgressBar } from './components/ProgressBar'
import { ActivityCard } from './components/ActivityCard'

export default function App() {
  const [selected, setSelected] = useState(stages[0].id)
  const stage = stages.find(item => item.id === selected)!
  const total = stages.reduce((count, item) => count + item.tasks.length, 0)
  return <main className="tracker">
    <header className="hero">
      <div className="hero-emblem"><GameIcon name="book" /></div>
      <div className="hero-copy">
        <div className="eyebrow">MINECRAFT 1.20.1 <span>·</span> SEU GRIMÓRIO DE JORNADA</div>
        <h1>Ars Nouveau <span>Progress Tracker</span></h1>
        <p className="hero-subtitle">✦ Diário de progressão mágica ✦</p>
        <ProgressBar completed={0} total={total} label="Progresso geral" />
      </div>
      <div className="hero-seal"><span>ARS</span><small>NOUVEAU</small><i>✦</i></div>
    </header>
    <nav className="stage-nav wood-frame" aria-label="Etapas da jornada">
      {stages.map((item, index) => <button key={item.id} aria-current={selected === item.id ? 'step' : undefined}
        className={`stage-tab ${selected === item.id ? 'active' : ''}`} onClick={() => setSelected(item.id)}>
        <GameIcon name={item.icon} /><span><b>{index + 1}</b> {item.name}</span>
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
        <ProgressBar completed={0} total={stage.tasks.length} label="Progresso da etapa" />
        {stage.provisional && <p className="provisional-note">✦ Conteúdo provisório · atividades reais a fornecer</p>}
        <div className="activities">{stage.tasks.map((task, index) => <ActivityCard key={task.id} task={task} number={index + 1} completed={false} onToggle={() => {}} />)}</div>
      </section>
      <aside className="sidebar">
        <section className="summary-panel wood-frame"><h2>Progresso geral</h2><ProgressBar completed={0} total={total} label="Resumo geral" />
          <dl><div><dt><i className="status-square green" />Concluídas</dt><dd>0</dd></div><div><dt><i className="status-square" />Pendentes</dt><dd>{total}</dd></div><div><dt><i className="status-square purple" />Total de atividades</dt><dd>{total}</dd></div></dl>
        </section>
        <section className="journal-panel"><div className="eyebrow">UMA JORNADA, UM PASSO POR VEZ</div><blockquote>Todo grande feitiço começa com um único ponto de Source.</blockquote><span className="journal-star">✦</span><p>Seu diário arcano</p></section>
        <div className="tower-art" aria-hidden="true"><div className="tower-moon" /><div className="tower-spire" /><div className="tower-body"><i /><i /><i /></div><div className="tower-ground" /><GameIcon name="crystal" className="tower-crystal" /></div>
        <p className="local-note">Salvo neste navegador<br /><span>Seu progresso fica com você.</span></p>
      </aside>
    </div>
    <footer><span>✦ Ars Nouveau · Minecraft 1.20.1</span><span>Seu diário local de progressão</span></footer>
  </main>
}
