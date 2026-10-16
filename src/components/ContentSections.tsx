import type { ContentSection } from '../data/types'
import { ItemIcon } from './ItemIcon'
import { ApparatusRecipe } from './ApparatusRecipe'
import { CraftingRecipe } from './CraftingRecipe'
import { ScribeRecipe } from './ScribeRecipe'
import { BestiaryWall } from './BestiaryWall'

export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return <div className="content-sections">{sections.map((section, index) => <section className={`content-section ${section.ordered || section.table || section.recipe || section.apparatus || section.scribe || section.code || section.diagram ? 'wide' : ''}`} key={index}>
    <h4>{section.title}</h4>
    {section.paragraphs?.map((text, i) => <p key={i}>{text}</p>)}
    {section.items && (section.ordered ? <ol>{section.items.map((text, i) => <li key={i}>{text}</li>)}</ol> : <ul className={/materiais|crafts intermediários|receita sem posição fixa/i.test(section.title) ? 'material-list' : undefined}>{section.items.map((text, i) => <li key={i}>{/materiais|crafts intermediários|receita sem posição fixa/i.test(section.title) && <ItemIcon label={text} />}<span>{text}</span></li>)}</ul>)}
    {section.recipe && <CraftingRecipe recipe={section.recipe} />}
    {section.scribe && <ScribeRecipe recipe={section.scribe} />}
    {section.diagram === 'drygmy-wall' && <BestiaryWall />}
    {section.apparatus && <ApparatusRecipe recipe={section.apparatus} />}
    {section.code && (section.title.startsWith('Receita — Imbuição') ? <div className="imbuement-flow"><div className="flow-input"><ItemIcon label="Lápis-lazúli" /><span>1× Lápis-lazúli</span><small>OU</small><ItemIcon label="Fragmento de ametista" /><span>1× Fragmento de ametista</span></div><span className="recipe-arrow" aria-hidden="true">→</span><div className="flow-machine"><ItemIcon label="Imbuement Chamber" /><span>Imbuement Chamber</span></div><span className="recipe-arrow" aria-hidden="true">→</span><div className="flow-output"><ItemIcon label="Source Gem" /><strong>1 Source Gem</strong></div><p>Repetir 8 vezes, com qualquer combinação das duas matérias-primas.</p><pre className="sr-only">{section.code}</pre></div> : <pre>{section.code}</pre>)}
    {section.table && <div className="table-scroll"><table><thead><tr>{section.table.headers.map((cell, i) => <th key={i}>{cell}</th>)}</tr></thead><tbody>{section.table.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{j === 0 && /materiais/i.test(section.title) ? <span className="table-item"><ItemIcon label={cell} />{cell}</span> : cell}</td>)}</tr>)}</tbody></table></div>}
  </section>)}</div>
}
