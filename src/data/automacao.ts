import type { Stage } from './types'

export const automacao: Stage = {
  "id": "06-automacao-starbuncle",
  "name": "Automação",
  "title": "Primeira Automação Mágica",
  "icon": "wand",
  "difficulty": "Fácil / média",
  "description": "Utilizar o Starbuncle para colher Sourceberries maduras automaticamente, depositá-las em um baú e aprender o transporte entre inventários.",
  "provisional": false,
  "note": "Minecraft Java 1.20.1 — receitas padrão do Ars Nouveau. Se o modpack alterar receitas ou configurações, JEI/EMI e o comportamento observado no jogo prevalecem.",
  "overview": [
    {
      "title": "Resumo dos materiais",
      "table": {
        "headers": [
          "Item",
          "Quantidade",
          "Finalidade"
        ],
        "rows": [
          [
            "Source Gem",
            "2",
            "Dominion Wand"
          ],
          [
            "Barra de ouro (Gold Ingot)",
            "1",
            "Dominion Wand"
          ],
          [
            "Graveto (Stick)",
            "1",
            "Dominion Wand"
          ],
          [
            "Baú (Chest)",
            "1",
            "Armazenamento definitivo da colheita"
          ],
          [
            "Baú (Chest)",
            "2 adicionais, temporários",
            "Exercício de transporte entre inventários"
          ],
          [
            "Item Frame",
            "1, opcional",
            "Filtrar o baú de destino"
          ],
          [
            "Sourceberry",
            "1, opcional",
            "Identificar o filtro do Item Frame"
          ]
        ]
      },
      "paragraphs": [
        "A Dominion Wand é criada no Enchanting Apparatus, não na Crafting Table comum. A receita padrão não consome Source, mas o modpack pode alterar receitas: em caso de divergência, conferir o JEI/EMI do jogo."
      ]
    },
    {
      "title": "Funcionamento esperado",
      "code": "Sourceberry Bush madura\n          |\n          | Starbuncle colhe automaticamente\n          v\n      Starbuncle\n          |\n          | depósito configurado pela Dominion Wand\n          v\n   Baú da plantação\n\nEm paralelo:\nCrescimento natural das plantas -> Agronomic Sourcelink -> Source Jars",
      "paragraphs": [
        "Importante: o Starbuncle transporta itens; Source Jars armazenam energia mágica. Não misturar as duas redes nesta etapa."
      ]
    },
    {
      "title": "Resultado esperado da etapa",
      "ordered": false,
      "items": [
        "Dominion Wand disponível para futuras automações.",
        "Sourceberries colhidas e depositadas automaticamente no baú da fazenda.",
        "Produção de Source mantida por crescimento natural dos arbustos.",
        "Princípio de transferência entre inventários compreendido.",
        "Nenhuma necessidade de reconstruir a estufa ou utilizar Source Relays nesta etapa."
      ],
      "paragraphs": [
        "Próxima etapa: Etapa 7 — expansão da infraestrutura energética, incluindo transporte de Source até o laboratório da torre."
      ]
    }
  ],
  "tasks": [
    {
      "id": "automacao-dominion-wand",
      "title": "Fabricar a Dominion Wand",
      "summary": "criar a ferramenta usada para vincular criaturas a baús e configurar outras conexões do Ars Nouveau.",
      "icon": "wand",
      "location": "Jardim de Sourceberries",
      "visualReference": "Dominion Wand (item) e Enchanting Apparatus com pedestais.",
      "showReferenceOnCard": true,
      "sections": [
        {
          "title": "Materiais",
          "ordered": false,
          "items": [
            "1 Stick",
            "2 Source Gems",
            "1 Gold Ingot",
            "Enchanting Apparatus e pelo menos 3 Arcane Pedestals já instalados na Etapa 5"
          ]
        },
        {
          "title": "Receita — Enchanting Apparatus (não é crafting 3×3)",
          "paragraphs": [
            "A distribuição dos três ingredientes entre os pedestais pode variar; todos devem estar dentro do alcance válido do Apparatus."
          ],
          "apparatus": {
            "pedestals": [
              "Source Gem",
              "Source Gem",
              "Barra de ouro"
            ],
            "reagent": "Stick",
            "output": "Dominion Wand",
            "sourceCost": 0,
            "note": "2 Source Gems e 1 barra de ouro em 3 pedestais. Usar 1 Stick no centro. A distribuição nos pedestais pode variar, dentro do alcance válido."
          }
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Desça ao laboratório de encantamento no andar -1 da torre.",
            "Coloque uma Source Gem em cada um de dois Arcane Pedestals e uma barra de ouro no terceiro.",
            "Use o Stick no Enchanting Apparatus para iniciar a fabricação.",
            "Recolha a Dominion Wand."
          ]
        }
      ],
      "conclusion": "Dominion Wand fabricada e disponível no inventário.",
      "sources": [
        {
          "label": "Dominion Wand",
          "url": "https://ars.guide/book/crafting/item.ars_nouveau.dominion_wand/"
        },
        {
          "label": "Dominion Wand · Minecraft Guides",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/dominion-wand/"
        },
        {
          "label": "Starbuncle",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/starbuncle/"
        },
        {
          "label": "Sourceberry Bush",
          "url": "https://ars.guide/book/field_guide/sourceberry_bush/"
        },
        {
          "label": "Agronomic Sourcelink",
          "url": "https://ars.guide/book/source/block.ars_nouveau.agronomic_sourcelink/"
        }
      ]
    },
    {
      "id": "automacao-bau-sourceberries",
      "title": "Preparar o baú da plantação",
      "summary": "instalar um destino para as frutas colhidas na área técnica da fazenda 17×17.",
      "icon": "chest",
      "location": "Jardim de Sourceberries",
      "visualReference": "Chest e, opcionalmente, Item Frame com Sourceberry.",
      "showReferenceOnCard": true,
      "sections": [
        {
          "title": "Materiais",
          "ordered": false,
          "items": [
            "1 baú (craft vanilla: 8 tábuas de madeira ao redor de um espaço central vazio)",
            "Opcional: 1 Item Frame e 1 Sourceberry"
          ]
        },
        {
          "title": "Crafting — Baú",
          "recipe": {
            "cells": [
              "Tábua de madeira",
              "Tábua de madeira",
              "Tábua de madeira",
              "Tábua de madeira",
              "Vazio",
              "Tábua de madeira",
              "Tábua de madeira",
              "Tábua de madeira",
              "Tábua de madeira"
            ],
            "output": "Chest",
            "quantity": 1,
            "note": "Craft vanilla fornecido no guia: 8 tábuas de madeira ao redor do centro vazio. O ícone ilustra tábuas de carvalho."
          }
        },
        {
          "title": "Posicionamento",
          "paragraphs": [
            "Usar como referência as coordenadas locais da Etapa 4: X=0..16, Z=0..16, olhando a fazenda de cima.",
            "Planta esquemática: manter desobstruída a circulação até os arbustos e o baú. A área técnica não precisa ficar cercada."
          ],
          "ordered": false,
          "items": [
            "Agronomic Sourcelink: X=8, Z=8.",
            "Source Jars previstas: (8,7), (7,8), (9,8), (8,9); não é necessário ter as quatro prontas.",
            "Baú definitivo: X=8, Z=5, na área técnica ao norte.",
            "Ponto de invocação/partida do Starbuncle: perto de X=8, Z=6. O animal não fica parado nessa posição, pois se desloca para executar o trabalho."
          ],
          "code": "Trecho central da fazenda — vista superior (não representa 17×17 inteiro)\n\n               NORTE\n   B  B  B  B  B  B  B  B  B\n   B  B  B  B  C  B  B  B  B    C = baú (8,5)\n   B  B  B  B  S  B  B  B  B    S = referência do Starbuncle (8,6)\n   B  B  B  B  J  B  B  B  B    J = Source Jar\n   B  B  B  J  L  J  B  B  B    L = Agronomic Sourcelink (8,8)\n   B  B  B  B  J  B  B  B  B    B = área de plantio\n   B  B  B  B  B  B  B  B  B\n                SUL"
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Localize o espaço reservado ao norte do núcleo central da plantação.",
            "Coloque o baú em X=8, Z=5 ou na posição equivalente se tiver espelhado a construção.",
            "Deixe livre o acesso da criatura ao baú e aos arbustos.",
            "Opcional: coloque um Item Frame no baú e uma Sourceberry na moldura para limitar o que pode ser depositado ali."
          ]
        }
      ],
      "conclusion": "baú instalado e acessível na fazenda.",
      "sources": [
        {
          "label": "Dominion Wand",
          "url": "https://ars.guide/book/crafting/item.ars_nouveau.dominion_wand/"
        },
        {
          "label": "Dominion Wand · Minecraft Guides",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/dominion-wand/"
        },
        {
          "label": "Starbuncle",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/starbuncle/"
        },
        {
          "label": "Sourceberry Bush",
          "url": "https://ars.guide/book/field_guide/sourceberry_bush/"
        },
        {
          "label": "Agronomic Sourcelink",
          "url": "https://ars.guide/book/source/block.ars_nouveau.agronomic_sourcelink/"
        }
      ]
    },
    {
      "id": "automacao-vincular-starbuncle",
      "title": "Vincular o Starbuncle ao baú",
      "summary": "informar à criatura onde deve depositar as Sourceberries coletadas.",
      "icon": "starbuncle",
      "location": "Jardim de Sourceberries",
      "visualReference": "Starbuncle, Dominion Wand, Chest.",
      "showReferenceOnCard": true,
      "sections": [
        {
          "title": "Materiais",
          "ordered": false,
          "items": [
            "Dominion Wand",
            "Starbuncle invocado na Etapa 5",
            "Baú instalado na atividade anterior"
          ]
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Segure a Dominion Wand.",
            "Use a wand primeiro no Starbuncle.",
            "Use a wand depois no baú da plantação.",
            "A direção Starbuncle → baú configura um destino para os itens que ele carrega.",
            "Verifique no jogo se a ligação foi registrada. O Starbuncle deve mostrar que possui um inventário de saída/destino associado.",
            "Se configurar ao contrário, agache e use a Dominion Wand no Starbuncle para limpar os vínculos e repita a sequência."
          ],
          "paragraphs": [
            "Atenção: usar baú → Starbuncle configura uma origem da qual ele retira itens; não é o que queremos para colher frutas diretamente dos arbustos."
          ]
        }
      ],
      "conclusion": "o Starbuncle está ligado ao baú como destino.",
      "sources": [
        {
          "label": "Dominion Wand",
          "url": "https://ars.guide/book/crafting/item.ars_nouveau.dominion_wand/"
        },
        {
          "label": "Dominion Wand · Minecraft Guides",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/dominion-wand/"
        },
        {
          "label": "Starbuncle",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/starbuncle/"
        },
        {
          "label": "Sourceberry Bush",
          "url": "https://ars.guide/book/field_guide/sourceberry_bush/"
        },
        {
          "label": "Agronomic Sourcelink",
          "url": "https://ars.guide/book/source/block.ars_nouveau.agronomic_sourcelink/"
        }
      ]
    },
    {
      "id": "automacao-colheita-sourceberries",
      "title": "Confirmar a colheita automática",
      "summary": "observar o Starbuncle colher frutas maduras e guardá-las sem intervenção manual.",
      "icon": "berries",
      "location": "Jardim de Sourceberries",
      "visualReference": "Sourceberry Bush madura, Starbuncle junto à plantação e baú de destino.",
      "showReferenceOnCard": true,
      "sections": [
        {
          "title": "Materiais",
          "ordered": false,
          "items": [
            "Arbustos de Sourceberry maduros",
            "Starbuncle configurado",
            "Baú com espaço livre"
          ]
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Deixe a plantação amadurecer naturalmente com a área carregada no jogo.",
            "Observe o Starbuncle percorrer a plantação e colher os arbustos maduros.",
            "Abra o baú para conferir se recebeu as Sourceberries.",
            "Confirme que os arbustos continuam plantados e podem crescer de novo.",
            "Observe as Source Jars: o Agronomic Sourcelink deve continuar gerando Source a partir do crescimento das plantas, independentemente da colheita."
          ]
        },
        {
          "title": "Se não funcionar",
          "ordered": false,
          "items": [
            "Confira a sequência Starbuncle → baú com a Dominion Wand.",
            "Veja se o baú tem espaço e se um Item Frame não está bloqueando os itens desejados.",
            "Verifique se o Starbuncle pode alcançar fisicamente a área de cultivo e o baú.",
            "O alcance de colheita relatado nos guias é de aproximadamente 10 blocos, e o de coleta de itens caídos de aproximadamente 8 blocos. A planta 17×17 foi preparada para facilitar essa cobertura, mas a posição da criatura muda durante o trabalho.",
            "Confira se os arbustos estão maduros e se o local está carregado."
          ]
        }
      ],
      "conclusion": "pelo menos uma colheita de Sourceberries chegou automaticamente ao baú.",
      "sources": [
        {
          "label": "Dominion Wand",
          "url": "https://ars.guide/book/crafting/item.ars_nouveau.dominion_wand/"
        },
        {
          "label": "Dominion Wand · Minecraft Guides",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/dominion-wand/"
        },
        {
          "label": "Starbuncle",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/starbuncle/"
        },
        {
          "label": "Sourceberry Bush",
          "url": "https://ars.guide/book/field_guide/sourceberry_bush/"
        },
        {
          "label": "Agronomic Sourcelink",
          "url": "https://ars.guide/book/source/block.ars_nouveau.agronomic_sourcelink/"
        }
      ]
    },
    {
      "id": "automacao-transferencia-baus",
      "title": "Aprender transporte entre dois baús",
      "summary": "fazer um exercício de logística e restaurar o trabalho original na fazenda.",
      "icon": "chest",
      "location": "Jardim de Sourceberries",
      "visualReference": "dois Chests, Starbuncle e Dominion Wand.",
      "showReferenceOnCard": true,
      "sections": [
        {
          "title": "Materiais",
          "ordered": false,
          "items": [
            "2 baús temporários, identificados como A e B",
            "Dominion Wand",
            "O mesmo Starbuncle da plantação",
            "Alguns itens comuns para teste (por exemplo, pedregulho)"
          ]
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Instale dois baús temporários próximos, em uma área desobstruída.",
            "Agache e use a Dominion Wand no Starbuncle para limpar as conexões anteriores; a automação da plantação ficará temporariamente parada.",
            "Com a Dominion Wand, clique primeiro no baú A e depois no Starbuncle. Isso define A como origem, de onde a criatura retira os itens.",
            "Clique primeiro no Starbuncle e depois no baú B. Isso define B como destino.",
            "Coloque alguns itens no baú A e observe a transferência para o baú B.",
            "Concluído o exercício, limpe as conexões temporárias do Starbuncle e refaça Starbuncle → baú da fazenda.",
            "Recolha os baús temporários, se desejar."
          ]
        },
        {
          "title": "Referência das direções",
          "code": "Retirar itens:   [BAÚ A]  --Dominion Wand-->  [STARBUNCLE]\nDepositar itens: [STARBUNCLE] --Dominion Wand--> [BAÚ B]\n\nPara a fazenda, só precisamos de:\n[STARBUNCLE] --Dominion Wand--> [BAÚ SOURCEBERRIES]"
        }
      ],
      "conclusion": "itens transferidos de A para B e ligação da fazenda restaurada.",
      "sources": [
        {
          "label": "Dominion Wand",
          "url": "https://ars.guide/book/crafting/item.ars_nouveau.dominion_wand/"
        },
        {
          "label": "Dominion Wand · Minecraft Guides",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/dominion-wand/"
        },
        {
          "label": "Starbuncle",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/starbuncle/"
        },
        {
          "label": "Sourceberry Bush",
          "url": "https://ars.guide/book/field_guide/sourceberry_bush/"
        },
        {
          "label": "Agronomic Sourcelink",
          "url": "https://ars.guide/book/source/block.ars_nouveau.agronomic_sourcelink/"
        }
      ]
    }
  ]
}
