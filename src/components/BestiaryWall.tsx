import { ItemIcon } from './ItemIcon'

export function BestiaryWall() {
  return <figure className="bestiary-plan">
    <div className="recipe-kind"><span>10 COLUNAS × 4 FILEIRAS</span><b>Expansão futura · 40 potes</b></div>
    <div className="bestiary-wall-scroll"><div className="bestiary-wall" role="img" aria-label="Parede de quarenta espaços. Exemplo inicial com seis potes na fileira inferior e trinta e quatro espaços reservados.">
      {Array.from({length:40}, (_, index) => <div key={index} className={`bestiary-slot ${index >= 30 && index < 36 ? 'initial' : 'reserved'}`} aria-hidden="true"><ItemIcon label="Containment Jar" /><small>{String((3 - Math.floor(index / 10)) * 10 + index % 10 + 1).padStart(2, '0')}</small></div>)}
    </div></div>
    <figcaption><i />Exemplo inicial: 6 potes <span>·</span> amplie quando precisar</figcaption>
    <div className="bestiary-operation"><div><ItemIcon label="Chest" /><b>Baú</b><small>Encostado no Henge</small></div><span aria-hidden="true">↔</span><div><ItemIcon label="Drygmy Charm" /><b>Um Henge</b><small>Dois Drygmys</small></div><span aria-hidden="true">←</span><div><ItemIcon label="Source Jar" /><b>Source</b><small>Jarra a até 7 blocos</small></div></div>
    <p>Vista frontal conceitual. Mantenha todos os potes a até 10 blocos do Henge, incluindo a distância vertical. Comece com 4–6 potes; preencher quarenta não é requisito para produzir.</p>
  </figure>
}
