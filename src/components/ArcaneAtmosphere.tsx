import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine, ISourceOptions } from '@tsparticles/engine'

const initialize = async (engine: Engine) => { await loadSlim(engine) }
const options: ISourceOptions = {
  fullScreen: { enable: false },
  fpsLimit: 30,
  detectRetina: false,
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  particles: {
    number: { value: 48, density: { enable: true, width: 1400, height: 900 } },
    color: { value: ['#deaa68', '#b993ed', '#80cbbf'] },
    shape: { type: 'square' },
    size: { value: { min: 1, max: 3 } },
    opacity: { value: { min: .15, max: .8 }, animation: { enable: true, speed: .45, sync: false } },
    move: { enable: true, direction: 'top', speed: { min: .3, max: .85 }, random: true, straight: false, outModes: 'out' },
  },
}
export default function ArcaneAtmosphere() {
  return <div className="arcane-atmosphere" aria-hidden="true">
    <ParticlesProvider init={initialize}><Particles id="arcane-particles" options={options} /></ParticlesProvider>
  </div>
}
