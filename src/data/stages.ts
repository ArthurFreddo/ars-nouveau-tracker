import type { Stage } from './types'

export const stages: Stage[] = [
  ['01-coleta', 'Coleta', 'Exploração e coleta inicial', 'Organize os primeiros recursos da sua jornada.', 'pickaxe'],
  ['02-torre', 'Torre', 'Fundação da Torre do Mago', 'Prepare um espaço para sua jornada mágica.', 'tower'],
  ['03-equipamentos', 'Equipamentos', 'Equipamentos mágicos iniciais', 'Acompanhe a preparação dos seus equipamentos.', 'book'],
  ['04-source', 'Source', 'Produção de Source', 'Um espaço reservado para o próximo capítulo.', 'crystal'],
  ['05-criaturas', 'Criaturas', 'Criaturas mágicas', 'Um espaço reservado para o próximo capítulo.', 'creature'],
  ['06-automacao', 'Automação', 'Automação e logística', 'Um espaço reservado para o próximo capítulo.', 'gear'],
  ['07-infraestrutura', 'Infraestrutura', 'Infraestrutura arcana', 'Um espaço reservado para o próximo capítulo.', 'blocks'],
  ['08-producao', 'Produção', 'Produção e expansão', 'Um espaço reservado para o próximo capítulo.', 'ingot'],
].map(([id, name, title, description, icon]) => ({
  id, name, title, description, icon: icon as Stage['icon'], difficulty: 'Demonstração', provisional: true,
  tasks: [{
    id: `demo-${id}-01`, title: 'Atividade de demonstração',
    summary: 'Conteúdo provisório. Marque e expanda para conhecer o tracker.',
    icon: icon as Stage['icon'],
    sections: [
      { title: 'Como fazer', ordered: true, items: ['O passo a passo desta etapa será fornecido posteriormente.'] },
      { title: 'Materiais necessários', items: ['Lista de materiais a definir.'] },
      { title: 'Observações', paragraphs: ['Esta atividade é apenas uma demonstração da interface.'] },
    ],
    conclusion: 'Critério de conclusão a definir.',
    visualReference: 'Imagem de referência a fornecer. O ícone é ilustrativo.',
  }],
}))
