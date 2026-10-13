import { motion } from 'motion/react'
import { useMagicMotion } from './MagicPreferences'

export function ProgressBar({ completed, total, label }: { completed: number; total: number; label: string }) {
  const percent = total ? Math.round(completed / total * 100) : 0
  const animated = useMagicMotion()
  return <div className="progress-wrap">
    <div className="progress-track" role="progressbar" aria-label={label} aria-valuenow={completed} aria-valuemin={0} aria-valuemax={total}>
      <motion.div className="progress-fill" initial={false} animate={{ width: `${percent}%` }} transition={{ duration: animated ? .6 : 0, ease: [.22, 1, .36, 1] }}>
        {animated && percent > 0 && <motion.span className="progress-sheen" aria-hidden="true" animate={{ x: ['-100%', '500%'] }} transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: 'linear' }} />}
      </motion.div>
    </div>
    <span className="progress-count"><span>{completed}/{total} concluídas</span><motion.strong key={percent} initial={animated ? { opacity: .4, y: -4 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: animated ? .25 : 0 }}>{percent}%</motion.strong></span>
  </div>
}
