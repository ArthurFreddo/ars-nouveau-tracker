export function ProgressBar({ completed, total, label }: { completed: number; total: number; label: string }) {
  const percent = total ? Math.round(completed / total * 100) : 0
  return <div className="progress-wrap">
    <div className="progress-track" role="progressbar" aria-label={label} aria-valuenow={completed} aria-valuemin={0} aria-valuemax={total}>
      <div className="progress-fill" style={{ width: `${percent}%` }} />
    </div>
    <span className="progress-count"><span>{completed}/{total} concluídas</span><strong>{percent}%</strong></span>
  </div>
}
