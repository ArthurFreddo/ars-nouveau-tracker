export type IconName = 'pickaxe' | 'tower' | 'book' | 'crystal' | 'creature' | 'gear' | 'blocks' | 'ingot' | 'berries' | 'tree' | 'chamber' | 'table' | 'sourcelink' | 'jar' | 'starbuncle' | 'token' | 'sourcestone' | 'apparatus' | 'pedestal' | 'charm' | 'wand' | 'chest' | 'gemblock' | 'relay'
export interface ContentSection {
  title: string
  paragraphs?: string[]
  items?: string[]
  ordered?: boolean
  table?: { headers: string[]; rows: string[][] }
  recipe?: { cells: string[]; output: string; note: string; quantity?: number; shapeless?: boolean }
  scribe?: { ingredients: string[]; glyph: string }
  apparatus?: { pedestals: string[]; reagent: string; output: string; sourceCost?: number; note: string }
  code?: string
}
export interface Activity {
  id: string
  title: string
  summary: string
  icon: IconName
  iconItem?: string
  location?: string
  sections: ContentSection[]
  conclusion: string
  visualReference: string
  showReferenceOnCard?: boolean
  sources?: { label: string; url: string }[]
}
export interface Stage {
  id: string
  name: string
  title: string
  description: string
  icon: IconName
  difficulty: string
  provisional: boolean
  tasks: Activity[]
  overview?: ContentSection[]
  note?: string
}
