import type { Stage } from './types'

export const infraestrutura: Stage = {
  "id": "07-infraestrutura",
  "name": "Infraestrutura",
  "title": "Distribuição e Expansão de Source",
  "icon": "relay",
  "difficulty": "Média",
  "description": "Transportar automaticamente Source da plantação até a Imbuement Chamber no laboratório subterrâneo, usando um Source Relay.",
  "provisional": false,
  "note": "Minecraft Java 1.20.1 — receitas padrão do Ars Nouveau. Se o modpack alterar receitas ou configurações, JEI/EMI e o comportamento observado no jogo prevalecem.",
  "overview": [
    {
      "title": "Visão rápida",
      "paragraphs": [
        "A energia seguirá este caminho:"
      ],
      "code": "[Jardim de Sourceberries]\n        |\n        v\n[Agronomic Sourcelink]  (já construído)\n        |\n        v\n[Source Jar do jardim]\n        |\n        | Conexão feita com Dominion Wand\n        v\n[Source Relay na lateral da torre]\n        |\n        | Conexão feita com Dominion Wand\n        v\n[Source Jar do laboratório]\n        |\n        | Consumo automático se a Jar estiver próxima\n        v\n[Imbuement Chamber]"
    },
    {
      "title": "Alcances relevantes",
      "ordered": false,
      "items": [
        "Source Relay: conecta-se a Source Jars ou a outros relays a até 30 blocos por ligação. Considere a distância real entre os blocos, inclusive a diferença vertical entre a superfície e o subsolo.",
        "Imbuement Chamber: utiliza Source de Source Jars a até 2 blocos de distância.",
        "Agronomic Sourcelink: continua produzindo Source a partir do crescimento das plantas e enviando-a às Source Jars próximas, como na Etapa 4.",
        "Redstone: um sinal de redstone aplicado ao relay o desativa."
      ],
      "paragraphs": [
        "Escopo da etapa: montar um circuito simples. Redes com várias Jars, Collector, Depositor e outras melhorias ficam para expansão posterior."
      ]
    },
    {
      "title": "Estruturas existentes",
      "ordered": false,
      "items": [
        "Torre principal: 11×11 blocos externos.",
        "Laboratório do subsolo: 17×17 blocos externos, com ala esquerda de imbuição.",
        "Fazenda de Sourceberries: 17×17 blocos, na lateral da torre, com cerca de 6 blocos livres entre as bordas externas, conforme a Etapa 4."
      ]
    },
    {
      "title": "Organização recomendada",
      "paragraphs": [
        "No jardim: mantenha a Jar de origem próxima ao Agronomic Sourcelink. Não é necessário mover a plantação.",
        "Entre jardim e torre: instale o relay em uma pequena coluna arcana junto à lateral da torre que esteja voltada para o jardim. A coluna pode ter base de Stone Bricks, acabamentos de Archwood e iluminação roxa, sem atrapalhar o caminho de circulação.",
        "No subsolo: coloque a Jar receptora na ala de imbuição, em um canto acessível dentro do alcance de 2 blocos da Imbuement Chamber. Não a deixe longe da máquina apenas por estética."
      ]
    },
    {
      "title": "Esquema conceitual, não em escala",
      "code": "    JARDIM 17×17                     TORRE 11×11\n┌───────────────────┐              ┌───────────────────┐\n│ Sourceberries     │              │                   │\n│       LINK        │              │  Parede lateral   │\n│       JAR ────────┼─────────────►│ [SOURCE RELAY]    │ ← superfície\n└───────────────────┘              │        │          │\n                                   │        │          │\n                                   ├────────┼──────────┤ ← piso térreo\n                                   │        v          │\n                                   │   JAR do subsolo  │\n                                   │        │          │\n                                   │        v          │\n                                   │ Imbuement Chamber │ ← subsolo -1\n                                   └───────────────────┘",
      "paragraphs": [
        "Importante: as linhas representam conexões mágicas, não tubulações físicas. Não precisam seguir paredes, corredores ou túneis; apenas respeitar o alcance."
      ]
    },
    {
      "title": "Critérios de posicionamento",
      "table": {
        "headers": [
          "Elemento",
          "Onde instalar",
          "Restrição"
        ],
        "rows": [
          [
            "Source Jar de origem",
            "Núcleo da plantação já existente",
            "Próxima ao Agronomic Sourcelink"
          ],
          [
            "Source Relay",
            "Nicho na parede lateral da torre",
            "Até 30 blocos de cada Jar conectada"
          ],
          [
            "Source Jar de destino",
            "Ala de imbuição do subsolo",
            "Até 2 blocos da Imbuement Chamber"
          ],
          [
            "Imbuement Chamber",
            "Local definido na Etapa 5",
            "Manter pedestais e acesso livres"
          ]
        ]
      }
    },
    {
      "title": "Paleta decorativa sugerida",
      "paragraphs": [
        "Stone Bricks e Deepslate Bricks para a coluna; Archwood para molduras; pequenos detalhes roxos (ametista, vidro roxo ou iluminação temática) para indicar o caminho de energia. A decoração é opcional e não integra os critérios de conclusão."
      ]
    },
    {
      "title": "Materiais consolidados",
      "table": {
        "headers": [
          "Item",
          "Quantidade",
          "Observação"
        ],
        "rows": [
          [
            "Source Gems",
            "4",
            "Para fabricar 1 Source Gem Block; substituíveis por 1 bloco de ametista + 2.000 Source na Imbuement Chamber"
          ],
          [
            "Barras de ouro",
            "6",
            "Para 1 Source Relay"
          ],
          [
            "Archwood Slabs",
            "6",
            "Somente se fabricar uma nova Source Jar"
          ],
          [
            "Vidros",
            "2",
            "Somente se fabricar uma nova Source Jar"
          ],
          [
            "Lápis-lazúli ou Fragmento de Ametista",
            "1",
            "Para o teste final"
          ],
          [
            "Dominion Wand",
            "1",
            "Reutilizar a da Etapa 6"
          ],
          [
            "Blocos decorativos",
            "A gosto",
            "Opcionais"
          ]
        ]
      },
      "paragraphs": [
        "Total mínimo de novos equipamentos: 1 Source Relay e 1 Source Jar no laboratório (a Jar pode ser reutilizada, caso já exista uma disponível)."
      ]
    },
    {
      "title": "Expansões opcionais",
      "ordered": false,
      "items": [
        "Segunda Jar no subsolo: abastecer também o Enchanting Apparatus, com uma conexão devidamente configurada.",
        "Source Relay: Collector: pode recolher Source automaticamente de Jars dentro de 5 blocos, sem vincular cada uma individualmente.",
        "Source Relay: Depositor: pode depositar Source automaticamente em Jars dentro de 5 blocos.",
        "Relays adicionais: formar uma rede quando alguma conexão ultrapassar 30 blocos."
      ],
      "paragraphs": [
        "Estas melhorias não são necessárias para considerar a Etapa 7 concluída."
      ]
    }
  ],
  "tasks": [
    {
      "id": "source-gem-block",
      "title": "Fabricar um Source Gem Block",
      "summary": "converter quatro Source Gems em um bloco para fabricar o relay.",
      "icon": "gemblock",
      "location": "Jardim, lateral da torre e subsolo -1",
      "visualReference": "Source Gem Block (ars_nouveau:source_gem_block).",
      "sections": [
        {
          "title": "Materiais",
          "items": [
            "4 Source Gems; alternativa: 1 bloco de ametista e 2.000 Source na Imbuement Chamber."
          ]
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Verifique se ainda possui quatro Source Gems da produção iniciada na Etapa 3.",
            "Na Crafting Table, posicione as quatro Source Gems em um quadrado 2×2.",
            "Recolha 1 Source Gem Block e guarde-o para a próxima tarefa.",
            "Alternativamente, processe 1 Amethyst Block na Imbuement Chamber, consumindo 2.000 Source, para obter o mesmo bloco. A alternativa só compensa se você já possuir energia disponível."
          ]
        },
        {
          "title": "Crafting — Source Gem Block (sem posição obrigatória na grade 3×3, desde que forme 2×2)",
          "recipe": {
            "cells": [
              "Source Gem",
              "Source Gem",
              "Vazio",
              "Source Gem",
              "Source Gem",
              "Vazio",
              "Vazio",
              "Vazio",
              "Vazio"
            ],
            "output": "Source Gem Block",
            "note": "As 4 Source Gems devem formar um quadrado 2×2; o canto da grade é apenas um exemplo.",
            "quantity": 1
          }
        }
      ],
      "conclusion": "ter 1 Source Gem Block disponível.",
      "sources": [
        {
          "label": "Source Relay",
          "url": "https://ars.guide/book/source/block.ars_nouveau.relay/"
        },
        {
          "label": "Source Jar",
          "url": "https://ars.guide/book/source/block.ars_nouveau.source_jar/"
        },
        {
          "label": "Dominion Wand",
          "url": "https://ars.guide/book/crafting/item.ars_nouveau.dominion_wand/"
        },
        {
          "label": "Imbuement Chamber",
          "url": "https://ars.guide/book/crafting/imbuement_chamber/"
        },
        {
          "label": "Relay: Collector",
          "url": "https://ars.guide/book/source/block.ars_nouveau.relay_collector/"
        },
        {
          "label": "Relay: Depositor",
          "url": "https://ars.guide/book/source/block.ars_nouveau.relay_deposit/"
        }
      ]
    },
    {
      "id": "fabricar-source-relay",
      "title": "Fabricar o Source Relay",
      "summary": "montar o equipamento que transmite Source entre recipientes.",
      "icon": "relay",
      "location": "Jardim, lateral da torre e subsolo -1",
      "visualReference": "Source Relay (ars_nouveau:relay).",
      "sections": [
        {
          "title": "Materiais",
          "items": [
            "6 barras de ouro.",
            "1 Source Gem Block."
          ]
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Abra uma Crafting Table comum.",
            "Coloque três barras de ouro na linha superior e três na inferior.",
            "Coloque o Source Gem Block no centro da grade.",
            "Recolha 1 Source Relay."
          ]
        },
        {
          "title": "Crafting — Source Relay",
          "recipe": {
            "cells": [
              "Barra de ouro",
              "Barra de ouro",
              "Barra de ouro",
              "Vazio",
              "Source Gem Block",
              "Vazio",
              "Barra de ouro",
              "Barra de ouro",
              "Barra de ouro"
            ],
            "output": "Source Relay",
            "note": "6 barras de ouro, em cima e embaixo, com 1 Source Gem Block no centro.",
            "quantity": 1
          }
        }
      ],
      "conclusion": "ter 1 Source Relay fabricado.",
      "sources": [
        {
          "label": "Source Relay",
          "url": "https://ars.guide/book/source/block.ars_nouveau.relay/"
        },
        {
          "label": "Source Jar",
          "url": "https://ars.guide/book/source/block.ars_nouveau.source_jar/"
        },
        {
          "label": "Dominion Wand",
          "url": "https://ars.guide/book/crafting/item.ars_nouveau.dominion_wand/"
        },
        {
          "label": "Imbuement Chamber",
          "url": "https://ars.guide/book/crafting/imbuement_chamber/"
        },
        {
          "label": "Relay: Collector",
          "url": "https://ars.guide/book/source/block.ars_nouveau.relay_collector/"
        },
        {
          "label": "Relay: Depositor",
          "url": "https://ars.guide/book/source/block.ars_nouveau.relay_deposit/"
        }
      ]
    },
    {
      "id": "estacao-source-subsolo",
      "title": "Preparar a estação de energia do laboratório",
      "summary": "posicionar o relay e a Jar de destino, integrando-os à arquitetura da torre.",
      "icon": "jar",
      "location": "Jardim, lateral da torre e subsolo -1",
      "visualReference": "Source Jar (ars_nouveau:source_jar), Source Relay e Imbuement Chamber.",
      "sections": [
        {
          "title": "Materiais",
          "items": [
            "1 Source Jar para o subsolo, caso ainda não haja uma disponível; blocos decorativos à escolha."
          ]
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Entre no subsolo -1 e localize a ala esquerda de imbuição, definida na Etapa 5.",
            "Coloque 1 Source Jar em um ponto acessível, a até 2 blocos da Imbuement Chamber; não bloqueie os espaços de pedestal usados nas receitas de essência.",
            "Na lateral da torre voltada para o jardim, prepare um nicho ou pequena coluna de pedra e Archwood para o relay. O relay não precisa ficar visível; precisa permanecer acessível para configuração.",
            "Instale o Source Relay nessa posição. Verifique que ele está a até 30 blocos da Jar do jardim e a até 30 blocos da Jar do laboratório, considerando diferenças de altura.",
            "Se a posição não alcançar os dois recipientes, aproxime o relay ou acrescente outro relay intermediário. Não é necessário construir um cabo físico.",
            "Evite colocar alavancas ou outras fontes de sinal de redstone ligadas ao relay: um sinal o desativa."
          ]
        },
        {
          "title": "Crafting — Source Jar (somente se precisar fabricar uma)",
          "recipe": {
            "cells": [
              "Laje Archwood",
              "Laje Archwood",
              "Laje Archwood",
              "Vidro",
              "Vazio",
              "Vidro",
              "Laje Archwood",
              "Laje Archwood",
              "Laje Archwood"
            ],
            "output": "Source Jar",
            "note": "Receita padrão: 6 lajes de Archwood e 2 vidros. Crafting Table, posições fixas.",
            "quantity": 1
          }
        }
      ],
      "conclusion": "relay na lateral da torre e Jar de destino instalada perto da Imbuement Chamber, respeitando os alcances.",
      "sources": [
        {
          "label": "Source Relay",
          "url": "https://ars.guide/book/source/block.ars_nouveau.relay/"
        },
        {
          "label": "Source Jar",
          "url": "https://ars.guide/book/source/block.ars_nouveau.source_jar/"
        },
        {
          "label": "Dominion Wand",
          "url": "https://ars.guide/book/crafting/item.ars_nouveau.dominion_wand/"
        },
        {
          "label": "Imbuement Chamber",
          "url": "https://ars.guide/book/crafting/imbuement_chamber/"
        },
        {
          "label": "Relay: Collector",
          "url": "https://ars.guide/book/source/block.ars_nouveau.relay_collector/"
        },
        {
          "label": "Relay: Depositor",
          "url": "https://ars.guide/book/source/block.ars_nouveau.relay_deposit/"
        }
      ]
    },
    {
      "id": "conectar-source-jardim-laboratorio",
      "title": "Conectar o jardim ao laboratório",
      "summary": "definir o sentido da transferência com a Dominion Wand.",
      "icon": "wand",
      "location": "Jardim, lateral da torre e subsolo -1",
      "visualReference": "Dominion Wand (ars_nouveau:dominion_wand).",
      "sections": [
        {
          "title": "Materiais",
          "items": [
            "Dominion Wand obtida na Etapa 6."
          ]
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Equipe a Dominion Wand.",
            "Clique primeiro na Source Jar do jardim e depois no Source Relay: isso define a entrada de Source no relay.",
            "Clique no Source Relay e depois na Source Jar do laboratório: isso define a saída de Source.",
            "Confira se ambas as ligações foram estabelecidas no sentido correto.",
            "Se configurar alguma ligação errada, use a Dominion Wand no relay enquanto estiver agachado para limpar as conexões e refaça os passos 2 e 3."
          ]
        },
        {
          "title": "Direção correta",
          "code": "Jar do jardim  →  Relay  →  Jar do laboratório"
        }
      ],
      "conclusion": "circuito configurado da Jar do jardim até a Jar do laboratório.",
      "sources": [
        {
          "label": "Source Relay",
          "url": "https://ars.guide/book/source/block.ars_nouveau.relay/"
        },
        {
          "label": "Source Jar",
          "url": "https://ars.guide/book/source/block.ars_nouveau.source_jar/"
        },
        {
          "label": "Dominion Wand",
          "url": "https://ars.guide/book/crafting/item.ars_nouveau.dominion_wand/"
        },
        {
          "label": "Imbuement Chamber",
          "url": "https://ars.guide/book/crafting/imbuement_chamber/"
        },
        {
          "label": "Relay: Collector",
          "url": "https://ars.guide/book/source/block.ars_nouveau.relay_collector/"
        },
        {
          "label": "Relay: Depositor",
          "url": "https://ars.guide/book/source/block.ars_nouveau.relay_deposit/"
        }
      ]
    },
    {
      "id": "testar-source-imbuicao",
      "title": "Testar o abastecimento e a imbuição",
      "summary": "demonstrar que a Source gerada no jardim realmente alimenta uma máquina no subsolo.",
      "icon": "chamber",
      "location": "Jardim, lateral da torre e subsolo -1",
      "visualReference": "Imbuement Chamber, Lapis Lazuli, Source Gem.",
      "sections": [
        {
          "title": "Materiais",
          "items": [
            "1 Lápis-lazúli ou 1 Fragmento de Ametista; plantação funcionando."
          ]
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Confirme que a plantação e o Agronomic Sourcelink continuam ativos e que a Jar do jardim contém Source.",
            "Aguarde a transferência e observe se a Source Jar do laboratório recebe energia. Mantenha as regiões relevantes carregadas durante o teste.",
            "Insira um Lápis-lazúli ou Fragmento de Ametista na Imbuement Chamber.",
            "Observe o processamento e o consumo de Source da Jar próxima.",
            "Recolha a Source Gem produzida. Se a máquina funcionar, o circuito está concluído."
          ]
        },
        {
          "title": "Caso não funcione",
          "ordered": false,
          "items": [
            "Veja se há Source disponível na Jar de origem.",
            "Verifique a ordem das ligações: Jar → Relay → Jar.",
            "Confira a distância de 30 blocos por conexão e a proximidade de 2 blocos entre a Jar de destino e a Imbuement Chamber.",
            "Certifique-se de que o relay não está recebendo sinal de redstone.",
            "Deixe a área carregada até que a Source seja produzida e transferida."
          ]
        }
      ],
      "conclusion": "produzir pelo menos 1 Source Gem utilizando Source fornecida pela estação do laboratório.",
      "sources": [
        {
          "label": "Source Relay",
          "url": "https://ars.guide/book/source/block.ars_nouveau.relay/"
        },
        {
          "label": "Source Jar",
          "url": "https://ars.guide/book/source/block.ars_nouveau.source_jar/"
        },
        {
          "label": "Dominion Wand",
          "url": "https://ars.guide/book/crafting/item.ars_nouveau.dominion_wand/"
        },
        {
          "label": "Imbuement Chamber",
          "url": "https://ars.guide/book/crafting/imbuement_chamber/"
        },
        {
          "label": "Relay: Collector",
          "url": "https://ars.guide/book/source/block.ars_nouveau.relay_collector/"
        },
        {
          "label": "Relay: Depositor",
          "url": "https://ars.guide/book/source/block.ars_nouveau.relay_deposit/"
        }
      ]
    }
  ]
}
