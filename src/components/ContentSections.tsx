import type { ContentSection } from '../data/types'

export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return <div className="content-sections">{sections.map((section, index) => <section className={`content-section ${section.ordered || section.table || section.recipe || section.code ? 'wide' : ''}`} key={index}>
    <h4>{section.title}</h4>
    {section.paragraphs?.map((text, i) => <p key={i}>{text}</p>)}
    {section.items && (section.ordered ? <ol>{section.items.map((text, i) => <li key={i}>{text}</li>)}</ol> : <ul>{section.items.map((text, i) => <li key={i}>{text}</li>)}</ul>)}
    {section.recipe && <div className="recipe"><p className="recipe-note">{section.recipe.note}</p><div className="recipe-layout"><div className="crafting-grid" aria-label="Grade de crafting 3 por 3">{section.recipe.cells.map((text, i) => <div className={text === 'Vazio' ? 'crafting-cell empty' : 'crafting-cell'} key={i}>{text === 'Vazio' ? <span aria-label="Vazio">—</span> : text}</div>)}</div><span className="recipe-arrow" aria-hidden="true">→</span><div className="recipe-result"><span>RESULTADO</span><strong>{section.recipe.output}</strong></div></div></div>}
    {section.code && <pre>{section.code}</pre>}
    {section.table && <div className="table-scroll"><table><thead><tr>{section.table.headers.map((cell, i) => <th key={i}>{cell}</th>)}</tr></thead><tbody>{section.table.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody></table></div>}
  </section>)}</div>
}
