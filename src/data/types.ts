export type IconName = 'pickaxe' | 'tower' | 'book' | 'crystal' | 'creature' | 'gear' | 'blocks' | 'ingot' | 'berries' | 'tree' | 'chamber' | 'table'
export interface ContentSection {
  title: string
  paragraphs?: string[]
  items?: string[]
  ordered?: boolean
  table?: { headers: string[]; rows: string[][] }
  recipe?: { cells: string[]; output: string; note: string }
  code?: string
}
export interface Activity {
  id: string
  title: string
  summary: string
  icon: IconName
  location?: string
  sections: ContentSection[]
  conclusion: string
  visualReference: string
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
