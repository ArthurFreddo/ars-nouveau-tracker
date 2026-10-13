import type confetti from 'canvas-confetti'
let activeConfetti: typeof confetti | undefined
let generation = 0

export function stopCompletionMagic() {
  generation++
  activeConfetti?.reset()
}
export async function celebrateCompletion(target: HTMLElement, chapterComplete: boolean) {
  const currentGeneration = generation
  const box = target.getBoundingClientRect()
  const origin = {
    x: Math.min(.95, Math.max(.05, (box.left + box.width / 2) / window.innerWidth)),
    y: Math.min(.95, Math.max(.05, (box.top + box.height / 2) / window.innerHeight)),
  }
  try {
    const { default: confetti } = await import('canvas-confetti')
    if (currentGeneration !== generation) return
    activeConfetti = confetti
    void confetti({
      origin, particleCount: chapterComplete ? 70 : 32, spread: chapterComplete ? 100 : 70,
      startVelocity: 15, decay: .93, gravity: .45, ticks: 100, scalar: .65, flat: true,
      shapes: ['square', 'star'], colors: chapterComplete ? ['#f2c071', '#fff1c7', '#b99af1'] : ['#b9e1cf', '#b99af1', '#e0b479'],
      disableForReducedMotion: true, zIndex: 100,
    })
  } catch {
    // Progress remains usable even if the optional visual chunk cannot load.
  }
}
