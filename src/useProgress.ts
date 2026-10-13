import { useEffect, useState } from 'react'
import { stages } from './data/stages'

const storageKey = 'ars-nouveau-tracker:v1'
const validIds = new Set(stages.flatMap(stage => stage.tasks.map(task => task.id)))

function readProgress(): Set<string> {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(storageKey) ?? '[]')
    return new Set(Array.isArray(value) ? value.filter((id): id is string => typeof id === 'string' && validIds.has(id)) : [])
  } catch { return new Set() }
}

export function useProgress() {
  const [completed, setCompleted] = useState(readProgress)
  const [saved, setSaved] = useState(true)
  useEffect(() => {
    try { localStorage.setItem(storageKey, JSON.stringify([...completed])); setSaved(true) }
    catch { setSaved(false) }
  }, [completed])
  function toggle(id: string) {
    setCompleted(previous => {
      const next = new Set(previous)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }
  return { completed, toggle, saved }
}
