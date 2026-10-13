import check from 'pixelarticons/svg/check.svg?raw'
import chevron from 'pixelarticons/svg/chevron-down.svg?raw'
import save from 'pixelarticons/svg/save.svg?raw'
import arrow from 'pixelarticons/svg/arrow-right.svg?raw'
import book from 'pixelarticons/svg/book-open.svg?raw'
import info from 'pixelarticons/svg/info-box.svg?raw'
const icons = { check, chevron, save, arrow, book, info }
export function PixelIcon({ name }: { name: keyof typeof icons }) {
  return <span className="pixel-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icons[name] }} />
}
