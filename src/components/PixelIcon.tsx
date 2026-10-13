import check from 'pixelarticons/svg/check.svg?raw'
import chevron from 'pixelarticons/svg/chevron-down.svg?raw'
import save from 'pixelarticons/svg/save.svg?raw'
const icons = { check, chevron, save }
export function PixelIcon({ name }: { name: keyof typeof icons }) {
  return <span className="pixel-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icons[name] }} />
}
