import type { ContentSection } from '../data/types'
import { ItemIcon } from './ItemIcon'

export function ApparatusRecipe({ recipe }: { recipe: NonNullable<ContentSection['apparatus']> }) {
  const positions = recipe.pedestals.length > 4 ? ['northwest', 'northeast', 'west', 'east', 'southwest', 'southeast'] : ['north', 'west', 'east', 'south']
  return <div className="recipe apparatus-recipe">
    <p className="recipe-note">{recipe.note}</p>
    <div className="recipe-layout">
      <div className="apparatus-board">
        <span className="crafting-label">PEDESTAIS · VISTA SUPERIOR</span>
        <div className={`pedestal-layout ${recipe.pedestals.length > 4 ? 'six-pedestals' : ''}`} aria-label="Ingredientes nos pedestais do Enchanting Apparatus">
          {recipe.pedestals.map((item, i) => <div className={`pedestal-ingredient ${positions[i]}`} key={i}><ItemIcon label={item} /><span>1× {item}</span><small>Arcane Pedestal</small></div>)}
          <div className="apparatus-center"><ItemIcon label="Enchanting Apparatus" /><span>Enchanting Apparatus</span></div>
        </div>
        <div className="apparatus-reagent"><ItemIcon label={recipe.reagent} /><div><small>USAR NO APARELHO</small><strong>1× {recipe.reagent}</strong></div></div>
      </div>
      <span className="recipe-arrow" aria-hidden="true">→</span>
      <div className="recipe-result"><span>RESULTADO</span><div className="result-slot"><ItemIcon label={recipe.output} /><b>1</b></div><strong>{recipe.output}</strong>{recipe.sourceCost !== undefined && <small className="source-cost">{recipe.sourceCost} Source</small>}</div>
    </div>
  </div>
}
