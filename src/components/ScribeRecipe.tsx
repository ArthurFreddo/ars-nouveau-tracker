import type { ContentSection } from '../data/types'
import { ItemIcon } from './ItemIcon'

export function ScribeRecipe({ recipe }: { recipe: NonNullable<ContentSection['scribe']> }) {
  return <div className="recipe scribe-recipe">
    <div className="recipe-kind"><span>APRENDER GLIFO</span><b>Scribe's Table</b></div>
    <div className="scribe-materials" aria-label={`Materiais para aprender ${recipe.glyph}`}>{recipe.ingredients.map((ingredient, index) => {
      const match = ingredient.match(/^(\d+)\s+(.+)$/)
      const amount = match?.[1] ?? '1'
      const item = match?.[2] ?? ingredient
      return <div className="scribe-ingredient" key={index}><div className="result-slot"><ItemIcon label={item} /><b>{amount}</b></div><span>{item}</span></div>
    })}</div>
    <div className="scribe-flow"><ItemIcon label="Spell Book" /><span>Livro + materiais</span><span aria-hidden="true">→</span><ItemIcon label="Scribe's Table" /><span>Scribe's Table</span><span aria-hidden="true">→</span><div className="glyph-result"><ItemIcon label={`Glifo ${recipe.glyph}`} /><strong>{recipe.glyph}</strong></div></div>
    <p className="recipe-note">Selecione o glifo no catálogo da Scribe's Table e forneça os materiais. Esta é uma receita de aprendizado na mesa de glifos.</p>
  </div>
}
