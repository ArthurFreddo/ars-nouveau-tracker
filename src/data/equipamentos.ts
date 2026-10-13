import type { Stage } from './types'

export const equipamentos: Stage = {
  id: '03-equipamentos', name: 'Equipamentos', title: 'Equipamentos Mágicos Iniciais', icon: 'book', difficulty: 'Receitas padrão · 1.20.1', provisional: false,
  description: 'Fabricar os equipamentos básicos do Ars Nouveau, instalar as máquinas nos ambientes reservados da torre e produzir as primeiras Source Gems. Não instalar o Enchanting Apparatus nem iniciar as automações nesta etapa.',
  note: 'Minecraft Java 1.20.1 — Ars Nouveau, receitas padrão, sem alterações do modpack. Cada uma das quatro atividades corresponde a um checkbox independente. Se o modpack modificar alguma receita, a receita exibida pelo JEI/EMI dentro do jogo prevalece.',
  overview: [
    { title: 'Resumo de materiais da etapa', paragraphs: ['Quantidade para fabricar um exemplar de cada equipamento e oito Source Gems, partindo de matérias-primas e sem contar itens já obtidos:'], table: { headers: ['Material', 'Quantidade', 'Utilização'], rows: [
      ['Barras de ferro', '9', 'Ferramentas para o Novice Spell Book'],
      ['Gravetos', '7', 'Ferramentas de ferro'],
      ['Livro comum', '1', 'Novice Spell Book'],
      ['Barras de ouro', '3', "2 para Imbuement Chamber; 1 convertida em pepitas para Scribe's Table (sobram 7 pepitas)"],
      ['Troncos de Archwood', '5', "2 na Scribe's Table; pelo menos 3 convertidos em tábuas"],
      ['Lápis-lazúli ou fragmentos de ametista', '8', 'Conversão em 8 Source Gems'],
    ] } },
    { title: 'Conversões de Archwood', paragraphs: ["3 troncos → 12 tábuas; usar 6 na Imbuement Chamber e 3 para fabricar 6 lajes de Archwood (só 3 lajes são consumidas). Sobram 3 tábuas e 3 lajes, além dos 2 troncos reservados para a Scribe's Table."] },
    { title: 'Materiais já existentes', paragraphs: ['Caso não tenha um livro: acrescentar 3 papéis e 1 couro. Os 3 papéis podem ser feitos com 3 canas-de-açúcar.', 'Se já tiver o Novice Spell Book: a primeira atividade pode ser marcada sem fabricar outro; descontar da lista os materiais das ferramentas e do livro.'] },
    { title: 'Resultado esperado', items: ['Equipamento pessoal: Novice Spell Book.', "Andar 2 — biblioteca: Scribe's Table instalada.", 'Andar -1 — laboratório: Imbuement Chamber instalada e 8 Source Gems produzidas.', 'Andar 1 — armazenamento: espaço para guardar as Source Gems e materiais restantes.', 'Andares 3 e 4: sem novas máquinas nesta etapa.'], paragraphs: ['Próxima etapa: Etapa 4 — cultivo de Sourceberries, construção de Agronomic Sourcelink e Source Jars, e geração contínua de Source.'] },
  ],
  tasks: [
    {
      id: 'equipamentos-novice-spell-book', title: 'Fabricar o Novice Spell Book', icon: 'book', location: 'Equipamento pessoal',
      summary: 'Criar ou confirmar que já possui o livro básico para lançar feitiços.',
      visualReference: 'Novice Spell Book (ars_nouveau:novice_spell_book).',
      sections: [
        { title: 'Materiais', items: ['1 livro comum (Book).', '1 espada de ferro (Iron Sword).', '1 picareta de ferro (Iron Pickaxe).', '1 machado de ferro (Iron Axe).', '1 pá de ferro (Iron Shovel).'], paragraphs: ['Materiais para as quatro ferramentas, se fabricadas do zero: 9 barras de ferro e 7 gravetos.'] },
        { title: 'Crafting — Novice Spell Book', recipe: { cells: ['Livro', 'Espada de ferro', 'Picareta ferro', 'Machado de ferro', 'Pá de ferro', 'Vazio', 'Vazio', 'Vazio', 'Vazio'], output: '1 Novice Spell Book', note: 'Fabricado em Crafting Table comum. A receita é sem formato (shapeless): os cinco ingredientes podem ocupar quaisquer casas livres da grade 3×3. A disposição a seguir é apenas um exemplo.' } },
        { title: 'Como fazer', ordered: true, items: ['Se ainda não tiver as quatro ferramentas, fabrique uma espada (2 ferros + 1 graveto), uma picareta (3 ferros + 2 gravetos), um machado (3 ferros + 2 gravetos) e uma pá (1 ferro + 2 gravetos).', 'Abra uma Crafting Table e combine o livro com essas quatro ferramentas, em qualquer disposição válida.', 'Recolha o Novice Spell Book e guarde-o na barra de itens para utilizar feitiços de nível 1.', 'Se já possuir o livro, pule a fabricação e marque a tarefa como concluída.'] },
      ],
      conclusion: 'Possuir um Novice Spell Book funcional (novo ou já existente).',
      sources: [{ label: 'Novice Spell Book', url: 'https://ars.guide/book/spell_casting/spell_books/' }],
    },
    {
      id: 'equipamentos-imbuement-chamber', title: 'Construir a Imbuement Chamber', icon: 'chamber', location: 'Andar -1 · laboratório arcano',
      summary: 'Fabricar e instalar a máquina que transforma Lápis-lazúli ou Ametista em Source Gems.',
      visualReference: 'Imbuement Chamber (ars_nouveau:imbuement_chamber).',
      sections: [
        { title: 'Materiais', items: ['6 tábuas de Archwood (Archwood Planks).', '2 barras de ouro (Gold Ingots).'] },
        { title: 'Crafting — Imbuement Chamber', recipe: { cells: ['Tábua Archwood', 'Barra de ouro', 'Tábua Archwood', 'Tábua Archwood', 'Vazio', 'Tábua Archwood', 'Tábua Archwood', 'Barra de ouro', 'Tábua Archwood'], output: '1 Imbuement Chamber', note: 'Fabricada na Crafting Table com posição definida (shaped).' } },
        { title: 'Como fazer', ordered: true, items: ['Transforme troncos de Archwood em tábuas comuns de Archwood, até reunir 6 tábuas.', 'Abra a Crafting Table e distribua tábuas e ouro conforme a grade acima.', 'Leve a Imbuement Chamber para o subsolo (andar -1) e instale-a em um espaço acessível.', 'Deixe espaço livre ao redor: futuramente pedestais poderão ser posicionados junto à máquina para fabricar essências.'] },
        { title: 'Observação', paragraphs: ['A Imbuement Chamber consegue realizar a conversão inicial de Source Gems sem Source Jar, usando geração passiva; o processo é mais lento.'] },
      ],
      conclusion: 'Possuir a Imbuement Chamber instalada e acessível no laboratório.',
      sources: [{ label: 'Imbuement Chamber', url: 'https://ars.guide/book/crafting/imbuement_chamber/' }, { label: 'Observações para a versão 1.20.1', url: 'https://www.minecraft-guides.com/mod/ars-nouveau/wiki/imbuement-chamber/' }],
    },
    {
      id: 'equipamentos-primeiras-source-gems', title: 'Produzir 8 Source Gems', icon: 'crystal', location: 'Andar -1 · laboratório arcano',
      summary: 'Produzir uma reserva inicial de oito Source Gems na Imbuement Chamber.',
      visualReference: 'Source Gem (ars_nouveau:source_gem).',
      sections: [
        { title: 'Materiais', items: ['8 Lápis-lazúli ou 8 fragmentos de ametista; combinações dos dois também servem.', '1 Imbuement Chamber instalada, obtida na atividade anterior.'] },
        { title: 'Receita — Imbuição (não é crafting 3×3)', code: '1 Lápis-lazúli        ─┐\n                       ├─> Imbuement Chamber ─> 1 Source Gem\n1 Fragmento de ametista ┘\n\nRepetir 8 vezes, com qualquer combinação das duas matérias-primas.', paragraphs: ['Custo da receita: 500 Source por Source Gem. Sem armazenamento de Source disponível, a máquina acumula o necessário passivamente, de modo lento. Não é necessário produzir Source em fazendas ainda; isso acontece na Etapa 4.'] },
        { title: 'Como fazer', ordered: true, items: ['Com a Imbuement Chamber instalada, segure 1 Lápis-lazúli ou 1 fragmento de ametista.', 'Use o item na máquina com o botão direito para iniciar a imbuição.', 'Aguarde a máquina finalizar o processo. Sem Source Jar, isso pode levar mais tempo.', 'Retire a Source Gem pronta e coloque outro ingrediente.', 'Repita até reunir 8 Source Gems; armazene-as no térreo, junto dos materiais mágicos.'] },
      ],
      conclusion: 'Ter produzido e reservado 8 Source Gems.',
      sources: [{ label: 'Imbuement Chamber e produção de Source Gems', url: 'https://ars.guide/book/crafting/imbuement_chamber/' }, { label: 'Observações para a versão 1.20.1', url: 'https://www.minecraft-guides.com/mod/ars-nouveau/wiki/imbuement-chamber/' }],
    },
    {
      id: 'equipamentos-scribes-table', title: "Construir a Scribe's Table", icon: 'table', location: 'Andar 2 · biblioteca e estudos',
      summary: 'Criar a bancada de escrita mágica e instalá-la na biblioteca.',
      visualReference: "Scribe's Table (ars_nouveau:scribes_table).",
      sections: [
        { title: 'Materiais', items: ['3 lajes de Archwood (Archwood Slabs).', '2 pepitas de ouro (Gold Nuggets).', '2 troncos de Archwood (Archwood Logs).'] },
        { title: 'Crafts intermediários', items: ['Lajes: 3 tábuas de Archwood alinhadas horizontalmente na Crafting Table → 6 lajes (usar apenas 3).', 'Pepitas: 1 barra de ouro na Crafting Table → 9 pepitas (usar apenas 2).'] },
        { title: "Crafting — Scribe's Table", recipe: { cells: ['Laje Archwood', 'Laje Archwood', 'Laje Archwood', 'Pepita de ouro', 'Vazio', 'Pepita de ouro', 'Tronco Archwood', 'Vazio', 'Tronco Archwood'], output: "1 Scribe's Table", note: 'Fabricada na Crafting Table, com posição definida (shaped).' } },
        { title: 'Como fazer', ordered: true, items: ['Separe 2 troncos de Archwood inteiros e 3 lajes de Archwood.', 'Converta uma barra de ouro em pepitas, caso não tenha as 2 necessárias.', 'Monte a receita conforme a grade 3×3 acima.', 'Instale a mesa na biblioteca (andar 2), reservando dois blocos de espaço no chão, pois o móvel ocupa duas posições.', 'Com o Spell Book em mãos, interaja com a mesa para verificar os glifos disponíveis. Desbloquear glifos adicionais não é obrigatório nesta etapa.'] },
      ],
      conclusion: "Scribe's Table fabricada e instalada na biblioteca, com acesso livre.",
      sources: [{ label: "Scribe’s Table", url: 'https://ars.guide/book/crafting/scribes_table/' }],
    },
  ],
}
