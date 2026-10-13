import type { Stage } from './types'

export const coleta: Stage = {
  id: '01-coleta', name: 'Coleta', title: 'Exploração e coleta inicial', icon: 'pickaxe', difficulty: 'Fácil', provisional: false,
  description: 'Reunir os recursos iniciais para começar a torre do mago e os primeiros equipamentos do Ars Nouveau. Nesta etapa, não é necessário construir máquinas ou iniciar automações.',
  note: 'Todas as cinco atividades devem ser concluídas. As quantidades são metas práticas de reserva, não receitas exatas. Recursos já existentes nos baús também contam. Planejamento para Minecraft 1.20.1; se o modpack modificar receitas, o JEI/EMI instalado no jogo prevalece.',
  tasks: [
    {
      id: 'coleta-sourceberries', title: 'Encontrar Sourceberries', icon: 'berries',
      summary: 'Coletar pelo menos 8 Sourceberries para a futura plantação.',
      visualReference: 'Sourceberry Bush (arbusto com frutas) e Sourceberries (item).',
      sections: [
        { title: 'Como fazer', ordered: true, items: ['Explore os biomas Taiga e Archwood Forest.', 'Procure arbustos Sourceberry Bush, que produzem as Sourceberries.', 'Colha os frutos dos arbustos maduros até obter pelo menos 8 unidades.', 'Guarde as frutas: a plantação será construída em outra etapa.'] },
        { title: 'Meta de materiais', items: ['8× Sourceberries.'] },
      ],
      conclusion: 'Ter pelo menos 8 Sourceberries disponíveis para plantar posteriormente.',
      sources: [{ label: 'Sourceberry Bush', url: 'https://ars.guide/book/field_guide/sourceberry_bush/' }],
    },
    {
      id: 'coleta-archwood', title: 'Coletar Archwood', icon: 'tree',
      summary: 'Obter 16 troncos e 2 mudas de Archwood.',
      visualReference: 'Archwood Tree e Archwood Sapling; preferencialmente mostrar a árvore no mundo e o item da muda.',
      sections: [
        { title: 'Como fazer', ordered: true, items: ['Procure árvores Archwood enquanto explora. Existem variedades de várias cores; qualquer uma serve para começar.', 'Corte alguns troncos e recolha as mudas deixadas pelas folhas.', 'Continue até conseguir 16 troncos e 2 mudas.', 'Guarde a madeira para fabricar equipamentos e as mudas para cultivá-las próximo da torre.'] },
        { title: 'Meta de materiais', items: ['16× Archwood Logs, de qualquer variedade.', '2× Archwood Saplings, da mesma variedade ou não.'] },
      ],
      conclusion: 'Ter 16 troncos e 2 mudas de Archwood disponíveis.',
      sources: [{ label: 'Archwood Trees', url: 'https://ars.guide/book/field_guide/archwood_trees/' }],
    },
    {
      id: 'coleta-materiais-source-gems', title: 'Separar materiais para Source Gems', icon: 'crystal',
      summary: 'Reservar 8 unidades de Lápis-lazúli ou Fragmentos de Ametista.',
      visualReference: 'Lapis Lazuli, Amethyst Shard e Source Gem.',
      sections: [
        { title: 'Como fazer', ordered: true, items: ['Veja se já há Lápis-lazúli ou Fragmentos de Ametista nos baús.', 'Se faltar, consiga Lápis-lazúli por mineração ou fragmentos de ametista em geodos.', 'Reserve pelo menos 8 unidades no total; é possível combinar os dois materiais.', 'Não precisa transformá-los agora. A produção de Source Gems com a Imbuement Chamber será abordada depois.'] },
        { title: 'Meta de materiais', items: ['8× Lápis-lazúli e/ou Fragmentos de Ametista, somados.'] },
      ],
      conclusion: 'Ter 8 unidades desses materiais separadas.',
      sources: [{ label: 'Imbuement Chamber', url: 'https://ars.guide/book/crafting/imbuement_chamber/' }],
    },
    {
      id: 'coleta-ferro-ouro', title: 'Reservar ferro e ouro', icon: 'ingot',
      summary: 'Separar 16 barras de ferro e 6 barras de ouro para os primeiros equipamentos.',
      visualReference: 'Iron Ingot e Gold Ingot do Minecraft.',
      sections: [
        { title: 'Como fazer', ordered: true, items: ['Confira a quantidade de ferro e ouro que já tem.', 'Minere e funda apenas o que faltar.', 'Reserve as barras para as próximas etapas. Parte do ferro poderá ser usada nas ferramentas exigidas para criar o Novice Spell Book.'] },
        { title: 'Meta de materiais', items: ['16× Barras de ferro.', '6× Barras de ouro.'] },
        { title: 'Observação', paragraphs: ['Estes valores são uma reserva inicial sugerida, e não uma receita específica.'] },
      ],
      conclusion: 'Ter 16 barras de ferro e 6 barras de ouro disponíveis.',
      sources: [{ label: 'Spell Casting', url: 'https://ars.guide/book/getting_started/spell_casting/' }, { label: "Scribe’s Table", url: 'https://ars.guide/book/crafting/scribes_table/' }],
    },
    {
      id: 'coleta-livro', title: 'Preparar um livro comum', icon: 'book',
      summary: 'Preparar um livro comum, salvo se já possuir um Spell Book do Ars Nouveau.',
      visualReference: 'Minecraft Book e Ars Nouveau Novice Spell Book.',
      sections: [
        { title: 'Como fazer', ordered: true, items: ['Veja se já tem um Novice Spell Book ou outro livro mágico do Ars Nouveau. Caso tenha, marque a atividade como concluída.', 'Se não tiver, consiga 3 papéis e 1 couro.', 'Fabrique um livro comum na Crafting Table.', 'Guarde-o para a etapa de equipamentos, quando será criado o Novice Spell Book.'] },
        { title: 'Meta de materiais', items: ['1× Livro comum ou 1× Spell Book do Ars Nouveau já existente.'] },
        { title: 'Esclarecimento: livro mágico e bancada de glifos', paragraphs: ['O Novice Spell Book não exige bancada especial: ele é criado em uma Crafting Table comum, combinando, em qualquer disposição:'], items: ['1 livro;', '1 espada de ferro;', '1 picareta de ferro;', '1 machado de ferro;', '1 pá de ferro.'] },
        { title: "Scribe’s Table", paragraphs: ["A Scribe's Table (Mesa de Escriba) não é usada para fabricar o primeiro Spell Book. Ela serve principalmente para aprender novos glifos e inscrever feitiços.", 'Sua receita padrão é 3 lajes de Archwood + 2 pepitas de ouro + 2 troncos de Archwood, em uma Crafting Table. A fabricação do livro e da bancada será tratada na Etapa 3 — Equipamentos.'] },
      ],
      conclusion: 'Possuir um livro comum guardado ou um Spell Book do Ars Nouveau.',
      sources: [{ label: 'Spell Casting', url: 'https://ars.guide/book/getting_started/spell_casting/' }, { label: "Scribe’s Table", url: 'https://ars.guide/book/crafting/scribes_table/' }],
    },
  ],
}
