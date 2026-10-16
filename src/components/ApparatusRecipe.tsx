import type { ContentSection } from '../data/types'
import { ItemIcon } from './ItemIcon'

export function ApparatusRecipe({ recipe }: { recipe: NonNullable<ContentSection['apparatus']> }) {
  const positions = recipe.pedestals.length === 8 ? ['northwest', 'north', 'northeast', 'west', 'east', 'southwest', 'south', 'southeast'] : recipe.pedestals.length === 2 ? ['west', 'east'] : recipe.pedestals.length > 4 ? ['northwest', 'northeast', 'west', 'east', 'southwest', 'southeast'] : ['north', 'west', 'east', 'south']
  return <div className="recipe apparatus-recipe">
    <div className="recipe-kind"><span>ENCHANTING APPARATUS</span><b>{recipe.pedestals.length} pedestais + 1 reagente central</b></div>
    <p className="recipe-note">{recipe.note}</p>
    <div className="recipe-layout">
      <div className="apparatus-board">
        <span className="crafting-label">VISTA SUPERIOR · UM INGREDIENTE POR PEDESTAL</span>
        <div className={`pedestal-layout ${recipe.pedestals.length === 8 ? 'eight-pedestals' : recipe.pedestals.length > 4 ? 'six-pedestals' : ''}`} aria-label="Ingredientes nos pedestais do Enchanting Apparatus">
          {recipe.pedestals.map((item, i) => <div className={`pedestal-ingredient ${positions[i]}`} key={i}><ItemIcon label={item} /><span>1× {item}</span><small>Arcane Pedestal</small></div>)}
          <div className="apparatus-center"><ItemIcon label={recipe.reagent} /><span>1× {recipe.reagent}</span><small>No Enchanting Apparatus</small></div>
        </div>
        <p className="apparatus-order">A posição dos pedestais é ilustrativa. Use um pedestal para cada ingrediente mostrado; o reagente fica no aparelho central.</p>
      </div>
      <span className="recipe-arrow" aria-hidden="true">→</span>
      <div className="recipe-result"><span>RESULTADO</span><div className="result-slot"><ItemIcon label={recipe.output} /><b>1</b></div><strong>{recipe.output}</strong>{recipe.sourceCost !== undefined && <small className="source-cost">{recipe.sourceCost.toLocaleString('pt-BR')} Source</small>}</div>
    </div>
  </div>
}
