import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { towerRooms } from '../data/towerRooms'
import { useMagicMotion } from './MagicPreferences'
import { PixelIcon } from './PixelIcon'

export function TowerRooms({ onOpenTask }: { onOpenTask: (id: string) => void }) {
  const [selected, setSelected] = useState(0)
  const animated = useMagicMotion()
  const room = towerRooms[selected]
  return <section className="tower-rooms" aria-labelledby="tower-rooms-title">
    <div className="room-heading"><div><div className="eyebrow">UM PASSEIO COM BEATRIZ</div><h3 id="tower-rooms-title">Os cômodos da torre</h3></div><span>4 andares · 2 alas subterrâneas</span></div>
    <div className="room-tabs" aria-label="Cômodos da torre">{towerRooms.map((item, index) => <button key={item.id} aria-pressed={selected === index} onClick={() => setSelected(index)}><b>{item.level}</b><span>{item.short}</span></button>)}</div>
    <figure>
      <div className="room-art"><AnimatePresence mode="wait" initial={false}><motion.img key={room.id} src={room.src} alt={room.alt} loading="lazy" initial={animated ? { opacity: 0 } : false} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: animated ? .25 : 0 }} /></AnimatePresence></div>
      <figcaption><h4>{room.title}</h4><button className="text-button" onClick={() => onOpenTask(room.taskId)}>Abrir atividade deste cômodo <PixelIcon name="arrow" /></button></figcaption>
    </figure>
    <p className="room-note">Inspiração para a montagem futura. A decoração e os equipamentos ilustrados não são requisitos adicionais para concluir esta etapa.</p>
  </section>
}
