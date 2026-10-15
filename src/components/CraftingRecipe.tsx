import type { ContentSection } from '../data/types'
import { ItemIcon } from './ItemIcon'

export function CraftingRecipe({ recipe }: { recipe: NonNullable<ContentSection['recipe']> }) {
  const shapeless = recipe.shapeless ?? /shapeless|sem formato|sem forma|sem posição fixa/i.test(recipe.note)
  const output = recipe.output.replace(/^\d+\s+/, '')
  const quantity = recipe.quantity ?? Number(recipe.output.match(/^\d+(?=\s)/)?.[0] ?? 1)
  return <div className="recipe crafting-recipe">
    <div className="recipe-kind"><span>CRAFTING TABLE</span><b>{shapeless ? 'Sem posição fixa' : 'Posições da receita'}</b></div>
    <div className="recipe-layout">
      <div className="crafting-board"><span className="crafting-label">3 COLUNAS × 3 LINHAS · 9 ESPAÇOS</span>
        <div className="crafting-grid" aria-label={shapeless ? 'Grade 3 por 3 — exemplo de disposição sem posição fixa' : 'Grade de crafting 3 por 3 — posições da receita'}>
          {recipe.cells.map((text, index) => <div className={text === 'Vazio' ? 'crafting-cell empty' : 'crafting-cell'} key={index} title={`Linha ${Math.floor(index / 3) + 1}, coluna ${index % 3 + 1}: ${text}`}>
            <small className="slot-number" aria-hidden="true">{index + 1}</small>
            {text === 'Vazio' ? <span aria-label="Espaço vazio">—</span> : <><ItemIcon label={text} /><span>{text}</span></>}
          </div>)}
        </div>
      </div>
      <span className="recipe-arrow" aria-hidden="true">→</span>
      <div className="recipe-result"><span>RESULTADO</span><div className="result-slot"><ItemIcon label={output} /><b>{quantity}</b></div><strong>{output}</strong></div>
    </div>
    {shapeless && <p className="shapeless-note">Disposição de exemplo: cada ingrediente ocupa um espaço, em qualquer ordem.</p>}
    <p className="recipe-note">{recipe.note}</p>
  </div>
}
