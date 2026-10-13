import type { Stage } from './types'
import { coleta } from './coleta'
import { torre } from './torre'
import { equipamentos } from './equipamentos'

const provisionalStages: Stage[] = [
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

export const stages: Stage[] = [coleta, torre, equipamentos, ...provisionalStages]
