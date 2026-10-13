export const magePortraits = [
  { id: 'aprendiz', label: 'Aprendiz', title: 'Beatriz — Aprendiz', range: '0–24%', src: '/assets/beatriz/beatriz-01-basica.png', alt: 'Beatriz aprendiz com blusa clara, colete simples e um pequeno livro de magia.' },
  { id: 'maga', label: 'Maga', title: 'Beatriz — Maga', range: '25–49%', src: '/assets/beatriz/beatriz-02-maga-leve.png', alt: 'Beatriz maga com capa verde escura, grimório e um pequeno cristal violeta.' },
  { id: 'gra-maga', label: 'Grã-Maga', title: 'Beatriz — Grã-Maga', range: '50–74%', src: '/assets/beatriz/beatriz-03-maga-grande.png', alt: 'Beatriz grã-maga com manto elaborado, bordados dourados e magia violeta.' },
  { id: 'suprema', label: 'Maga Suprema', title: 'Beatriz — Maga Suprema', range: '75–100%', src: '/assets/beatriz/beatriz-04-maga-suprema.png', alt: 'Beatriz maga suprema com traje arcano completo, piscando com um sorriso travesso e divertido.' },
] as const

export function magePortraitFor(percent: number) {
  return magePortraits[percent < 25 ? 0 : percent < 50 ? 1 : percent < 75 ? 2 : 3]
}
