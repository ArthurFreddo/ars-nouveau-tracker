import type { Stage } from './types'

export const torre: Stage = {
  id: '02-torre', name: 'Torre', title: 'Fundação da Torre do Mago', icon: 'tower', difficulty: 'Fácil · construção provisória', provisional: false,
  description: 'Definir e preparar uma torre de mago com quatro andares acima do solo e um subsolo, atribuindo uma finalidade a cada espaço. Não é necessário montar máquinas, automatizar sistemas nem terminar a decoração nesta etapa. Uma construção simples de pedra já atende ao objetivo.',
  note: 'Concluir as seis atividades. A organização por andares, as dimensões e as áreas de trabalho são sugestões práticas de construção, não requisitos formais do Ars Nouveau. Minecraft 1.20.1; caso o modpack altere mecânicas ou receitas, o JEI/EMI instalado no jogo prevalece.',
  overview: [
    { title: 'Dimensões recomendadas', table: { headers: ['Nível', 'Função', 'Dimensão externa', 'Área interna', 'Altura livre'], rows: [
      ['4', 'Observatório e rituais', '11×11', '9×9', '4 blocos'],
      ['3', 'Automação e logística', '11×11', '9×9', '4 blocos'],
      ['2', 'Biblioteca e estudos', '11×11', '9×9', '4 blocos'],
      ['1', 'Recepção e armazenamento', '11×11', '9×9', '4 blocos'],
      ['-1', 'Laboratório de imbuição e encantamentos', '17×17', '15×15', '4 blocos'],
    ] }, paragraphs: ['As dimensões internas consideram paredes de 1 bloco de espessura. Entre os pisos sucessivos, reserve 5 blocos verticais: 4 livres e 1 de piso/teto. O subsolo pode se estender além da base da torre, pois fica enterrado.'] },
    { title: 'Por que ampliar o subsolo?', paragraphs: ['O Enchanting Apparatus utiliza Arcane Pedestals posicionados até 3 blocos de distância; vale reservar cerca de 7×7 para seu conjunto. A Imbuement Chamber usa pedestais a 1 bloco dela; reserve aproximadamente 5×5, incluindo espaço de acesso. Um interior de 15×15 comporta os dois conjuntos separados, a circulação e um acesso por escadas.'] },
    { title: 'Observações de construção', items: ['Para começar, basta um esqueleto estrutural de pedra com os pisos/posições dos andares identificados. Paredes, janelas, telhado e acabamento podem ficar para depois.', 'Escadas ou uma coluna de escadas de mão junto à parede economizam área útil; não é preciso instalar elevador.', 'Deixe um terreno externo próximo à torre para as Sourceberries e, futuramente, fazendas de criaturas. Não é necessário construí-las agora.', 'O 3º andar é destinado a automações compactas. Sistemas grandes de transporte, produção ou criação de mobs poderão ocupar anexos externos no futuro.', 'O 4º andar pode receber rituais comuns, mas rituais que invocam chefes ou causam alterações grandes no mundo deverão ser feitos fora da torre, em local seguro.'] },
    { title: 'Esquema dos níveis', code: '     [4] Observatório e rituais\n     [3] Automação e logística\n     [2] Biblioteca e estudos\n     [1] Recepção e armazenamento\n----- nível do solo ----------------\n    [-1] Laboratório arcano (ampliado)' },
    { title: 'Materiais e crafts — referência rápida', paragraphs: ['Este quadro é apenas um apoio à construção; não cria tarefas novas. Recursos já coletados na Etapa 1 não precisam ser coletados novamente para marcar esta etapa.'], table: { headers: ['Item / recurso', 'Referência inicial', 'Finalidade'], rows: [
      ['Pedra / pedregulho', 'Quantidade variável; reserve várias stacks conforme o quanto decidir construir agora', 'Pisos, marcação e estrutura provisória'],
      ['Madeira comum', '1–2 stacks como reserva prática, se necessário', 'Baús, bancada, portas e escadas'],
      ['Carvão / carvão vegetal', 'Cerca de 16 unidades, se ainda não tiver iluminação', 'Tochas e fornalhas'],
      ['Crafting Table', '4 tábuas', 'Bancada do térreo'],
      ['2 Chests', '16 tábuas', 'Armazenamento inicial'],
      ['2 Furnaces (opcionais)', '16 pedregulhos', 'Fundição inicial'],
      ['Ladders (se escolher escadas de mão)', '7 gravetos produzem 3 escadas de mão', 'Acesso vertical provisório'],
    ] } },
    { title: 'Minérios mágicos reservados para as próximas etapas', paragraphs: ['Os materiais abaixo não são requisitos adicionais para concluir a torre. São reservas da progressão e, em grande parte, já constam na Etapa 1:', 'Não há quantidade única de blocos de pedra para a torre, pois você pode construir apenas os pisos e marcações agora ou finalizar as paredes depois. Não transformar uma estimativa de construção em receita exata.'], items: ['16 barras de ferro: reserva inicial para ferramentas e equipamentos mágicos.', '6 barras de ouro: reserva inicial para componentes mágicos.', '8 Lápis-lazúli e/ou Fragmentos de Ametista: futura produção de Source Gems.', '1 diamante: útil reservar para o Enchanting Apparatus futuramente; não é necessário minerá-lo para concluir esta etapa.', 'Troncos de Archwood: guardar para os equipamentos mágicos da próxima etapa.'] },
  ],
  tasks: [
    {
      id: 'torre-estrutura', title: 'Demarcar a torre e os níveis', icon: 'tower',
      summary: 'Demarcar a base de 11×11 e planejar quatro andares de 4 blocos livres, mais o subsolo.',
      visualReference: 'Torre de pedra simples em Minecraft; indicação dos quatro andares e do subsolo.',
      sections: [
        { title: 'Como fazer', ordered: true, items: ['Escolha um local próximo de sua base atual, com espaço para expansão e para uma plantação externa.', 'Demarque uma base 11×11, contando as paredes externas.', 'Marque a altura de cada pavimento: 4 blocos de espaço interno + 1 bloco de piso.', 'Faça uma estrutura provisória de pedra com os pisos e uma subida simples (escadas ou escadas de mão).', 'Reserve espaço subterrâneo para escavar um laboratório de 17×17 no futuro, sem precisar escavá-lo inteiro agora.'] },
        { title: 'Materiais', items: ['Pedra, pedregulho ou outro bloco estrutural comum, conforme a construção.', 'Blocos de marcação, tochas e materiais para acesso vertical.'] },
      ],
      conclusion: 'Base e níveis definidos e acessíveis; não é necessário concluir paredes nem acabamento.',
    },
    {
      id: 'torre-terreo', title: 'Térreo: recepção e armazenamento', icon: 'blocks',
      summary: 'Preparar a entrada com bancada, baús e fornalhas.',
      visualReference: 'Interior de base Minecraft com Crafting Table, Chest e Furnace.',
      sections: [
        { title: 'Como fazer', ordered: true, items: ['Reserve o 1º andar como entrada principal da torre.', 'Posicione 1 Crafting Table, 2 baús e 1 ou 2 fornalhas, aproveitando os que já tiver.', 'Mantenha o centro relativamente livre para circular e acessar os outros andares.', 'Ilumine o ambiente para evitar surgimento de monstros.'] },
        { title: 'Materiais / crafts básicos', items: ['Crafting Table: 4 tábuas de madeira.', 'Chest: 8 tábuas de madeira por baú.', 'Furnace: 8 pedregulhos por fornalha.', 'Tochas: 1 carvão (ou carvão vegetal) + 1 graveto = 4 tochas.'] },
      ],
      conclusion: 'Térreo utilizável como recepção e depósito, com bancada, armazenamento e iluminação.',
    },
    {
      id: 'torre-biblioteca', title: 'Segundo andar: biblioteca e estudos', icon: 'book',
      summary: "Destinar o 2º andar à Scribe's Table, livros e aprendizado de glifos.",
      visualReference: "Scribe's Table do Ars Nouveau, estantes de livros e biblioteca Minecraft.",
      sections: [
        { title: 'Como fazer', ordered: true, items: ['Prepare o piso do 2º andar e deixe um acesso a partir do térreo.', "Reserve uma área de destaque para a futura Scribe's Table.", 'Reserve paredes ou cantos para estantes e armazenamento de materiais usados em glifos.', "Não construa ainda a Scribe's Table: sua fabricação e utilização pertencem à Etapa 3 — Equipamentos."] },
        { title: 'Materiais', items: ['Blocos estruturais e iluminação.', 'Estantes de livros são opcionais nesta etapa; não é necessário obtê-las agora.'] },
      ],
      conclusion: "Segundo andar identificado e preparado como biblioteca, com espaço reservado para a Scribe's Table.",
    },
    {
      id: 'torre-automacao', title: 'Terceiro andar: automação e logística', icon: 'gear',
      summary: 'Reservar um salão para os primeiros sistemas de transporte e fabricação automática.',
      visualReference: 'Starbuncle, Bookwyrm, Wixie e baús do Ars Nouveau.',
      sections: [
        { title: 'Como fazer', ordered: true, items: ['Prepare o piso do 3º andar.', 'Mantenha a maior parte do ambiente desocupada.', 'Reserve espaço para futuras instalações de Starbuncles, Bookwyrms, Wixies e baús de apoio.', 'Não instale criaturas, sistemas de transporte nem máquinas nesta etapa. A organização será detalhada depois, quando aprendermos cada mecanismo.'] },
        { title: 'Materiais', items: ['Somente blocos de construção e iluminação.'] },
      ],
      conclusion: 'Terceiro andar acessível e reservado para automação, sem necessidade de máquinas funcionais.',
    },
    {
      id: 'torre-rituais', title: 'Quarto andar: observatório e rituais', icon: 'crystal',
      summary: 'Preparar o 4º andar como área aberta para observação e futuros rituais.',
      visualReference: 'Ritual Brazier e plataforma de pedra no topo de uma torre Minecraft.',
      sections: [
        { title: 'Como fazer', ordered: true, items: ['Prepare o 4º andar como salão alto ou terraço acessível.', 'Reserve o centro para um futuro Ritual Brazier e os arredores para circulação.', 'Deixe locais possíveis para Source Jars, que podem alimentar rituais dentro do alcance permitido.', 'Instale proteção contra quedas se o espaço for aberto.', 'Reserve os rituais perigosos, especialmente invocações de chefes, para uma arena externa a ser decidida posteriormente.'] },
        { title: 'Materiais', items: ['Blocos para o piso, iluminação e parapeitos.', 'Não fabricar o Ritual Brazier agora.'] },
        { title: 'Referência técnica', paragraphs: ['Rituais que consomem Source podem utilizar Source Jars a até 6 blocos do Ritual Brazier.'] },
      ],
      conclusion: 'Quarto andar seguro e preparado para receber equipamentos rituais futuramente.',
      sources: [{ label: 'Performing Rituals', url: 'https://ars.guide/book/ritual_index/performing_rituals/' }],
    },
    {
      id: 'torre-subsolo', title: 'Subsolo: laboratório arcano', icon: 'chamber',
      summary: 'Demarcar um laboratório de 17×17, com espaços separados para imbuição e encantamentos.',
      visualReference: 'Imbuement Chamber, Enchanting Apparatus, Arcane Core e Arcane Pedestals do Ars Nouveau.',
      sections: [
        { title: 'Como fazer', ordered: true, items: ['Abra uma entrada para o andar -1 a partir do térreo.', 'Demarque ou escave gradualmente o subsolo 17×17, com 4 blocos de altura livre. Não é necessário terminar toda a escavação agora.', 'Reserve um setor aproximado de 7×7 para o futuro Enchanting Apparatus e seus Arcane Pedestals.', 'Reserve outro setor aproximado de 5×5 para a futura Imbuement Chamber e seus pedestais.', 'Deixe uma faixa livre para circulação, escadas e possíveis Source Jars.', 'Não monte as máquinas nesta etapa: faremos isso nas etapas específicas de equipamentos e infraestrutura.'] },
        { title: 'Materiais', items: ['Picareta, iluminação e blocos de construção conforme a escavação.', 'Nenhum bloco mágico precisa ser fabricado nesta etapa.'] },
      ],
      conclusion: 'Acesso ao subsolo pronto e áreas das duas instalações definidas; escavação total e instalação das máquinas podem aguardar.',
      sources: [{ label: 'Enchanting Apparatus · pedestais até 3 blocos', url: 'https://ars.guide/book/crafting/enchanting_apparatus/' }, { label: 'Imbuement Chamber · pedestais adjacentes', url: 'https://ars.guide/book/crafting/imbuement_chamber/' }],
    },
  ],
}
