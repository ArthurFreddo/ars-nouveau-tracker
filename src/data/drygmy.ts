import type { Activity, ContentSection } from './types'

export const drygmyDescription = "Construa um bestiário automático no subsolo da torre. Dois Drygmys trabalham no mesmo Henge, aproveitam a rede de Source e produzem drops sem matar as criaturas."
export const drygmyIntroduction: ContentSection[] = [
  {
    "title": "Como essa automação funciona?",
    "paragraphs": [
      "Os Drygmys trabalham em torno de um Drygmy Henge. Eles identificam criaturas vivas próximas — inclusive as que estão guardadas em Containment Jars — e geram itens de suas tabelas de drops. As criaturas não são consumidas nem sofrem dano.",
      "A cada produção, o Henge gasta Source e envia os itens e possíveis Experience Gems para um inventário adjacente. A diversidade de espécies melhora a quantidade de itens produzidos; os tipos de loot, porém, participam de um conjunto compartilhado. Mais variedade significa mais tipos de recursos, não uma garantia de obter um item específico."
    ]
  },
  {
    "title": "Fluxo da produção",
    "paragraphs": [
      "Criaturas capturadas → Containment Jars → Drygmy Henge + Source → baú adjacente → armazenamento principal."
    ]
  },
  {
    "title": "Comece pequeno",
    "paragraphs": [
      "A parede de dez colunas por quatro fileiras é uma meta de expansão. Você pode começar com quatro a seis Containment Jars; preencher quarenta potes não é necessário para começar a produzir."
    ]
  }
]
export const drygmyCompatibility = "Guia para Minecraft Java 1.20.1. Se receitas ou parâmetros forem alterados pelo modpack ou pelo servidor, o JEI e as configurações do servidor têm prioridade."
export const drygmyTasks: Activity[] = [
  {
    "id": "drygmy-preparacao",
    "title": "Preparação e materiais",
    "summary": "Reaproveitar a infraestrutura de Source da torre e reservar espaço no subsolo.",
    "icon": "creature",
    "iconItem": "Source Jar",
    "location": "Subsolo · bestiário",
    "sections": [
      {
        "title": "Passo a passo",
        "ordered": true,
        "items": [
          "Confirmar infraestrutura disponível: Enchanting Apparatus, Arcane Pedestals, acesso a Source, Dominion Wand e Ritual Brazier.",
          "Reservar o local do bestiário no subsolo, mantendo o Henge próximo do centro da futura parede de potes.",
          "Separar os primeiros materiais: 1 Mossy Cobblestone, 1 baú e 1 Source Jar (ou uma jarra já existente com Source acessível).",
          "Deixar espaço de expansão: até 10 potes de largura por 4 de altura; a estrutura de 40 potes é uma meta, não uma exigência para começar."
        ]
      },
      {
        "title": "Observações do guia",
        "paragraphs": [
          "Observação: o Henge recebe itens em baús/inventários diretamente adjacentes. A Source Jar pode ficar até 7 blocos do Henge. Uma produção consome 1.000 Source nas configurações padrão. Como a rede da torre já gera Source, não é necessário criar outro Sourcelink só para essa sala."
        ]
      }
    ],
    "conclusion": "Local reservado e infraestrutura disponível para iniciar o bestiário.",
    "visualReference": "Itens e alcances do guia fornecido. O bestiário começa com poucos potes e pode crescer até quarenta.",
    "sources": [
      {
        "label": "Ars.Guide — Drygmy Charm, Henge e produção",
        "url": "https://ars.guide/book/crafting/drygmy_charm/"
      },
      {
        "label": "Ars.Guide — Containment Jar",
        "url": "https://ars.guide/book/crafting/mob_jar/"
      },
      {
        "label": "Ars.Guide — Ritual of Containment",
        "url": "https://ars.guide/book/ritual_index/ritual_containment/"
      },
      {
        "label": "Ars.Guide — Performing Rituals",
        "url": "https://ars.guide/book/ritual_index/performing_rituals/"
      },
      {
        "label": "Ars.Guide — Mecânica detalhada do Drygmy",
        "url": "https://ars.guide/docs/drygmy/guide/"
      }
    ]
  },
  {
    "id": "drygmy-obter-wilden",
    "title": "Conseguir os itens para recrutar Drygmys",
    "summary": "Separar os itens de Wilden para recrutar os dois Drygmys selvagens.",
    "icon": "creature",
    "iconItem": "Wilden Horn",
    "location": "Subsolo · bestiário",
    "sections": [
      {
        "title": "Passo a passo",
        "ordered": true,
        "items": [
          "Obter pelo menos 2 itens de Wilden, um para cada Drygmy selvagem que já apareceu na base.",
          "Priorizar Wilden Horn, obtido de Wilden Hunters. Alternativamente, testar Wilden Wing ou Wilden Spike, caso já tenha esses drops.",
          "Opcional: utilizar o Ritual of Summon Wilden para encontrar criaturas Wilden quando não houver nenhuma por perto; consultar a receita da tablet no JEI."
        ]
      },
      {
        "title": "Observações do guia",
        "paragraphs": [
          "Cuidado: não confundir Wilden Horn (usado para recrutar Drygmy) com Drygmy Token (obtido depois que ele aceita o item)."
        ]
      }
    ],
    "conclusion": "Itens de Wilden disponíveis para recrutar os Drygmys necessários.",
    "visualReference": "Itens e alcances do guia fornecido. O bestiário começa com poucos potes e pode crescer até quarenta.",
    "sources": [
      {
        "label": "Ars.Guide — Drygmy Charm, Henge e produção",
        "url": "https://ars.guide/book/crafting/drygmy_charm/"
      },
      {
        "label": "Ars.Guide — Containment Jar",
        "url": "https://ars.guide/book/crafting/mob_jar/"
      },
      {
        "label": "Ars.Guide — Ritual of Containment",
        "url": "https://ars.guide/book/ritual_index/ritual_containment/"
      },
      {
        "label": "Ars.Guide — Performing Rituals",
        "url": "https://ars.guide/book/ritual_index/performing_rituals/"
      },
      {
        "label": "Ars.Guide — Mecânica detalhada do Drygmy",
        "url": "https://ars.guide/docs/drygmy/guide/"
      }
    ]
  },
  {
    "id": "drygmy-recrutar-drygmys",
    "title": "Recrutar os Drygmys selvagens",
    "summary": "Trocar os itens de Wilden por Drygmy Tokens, sem confundir os dois itens.",
    "icon": "creature",
    "iconItem": "Drygmy Token",
    "location": "Subsolo · bestiário",
    "sections": [
      {
        "title": "Passo a passo",
        "ordered": true,
        "items": [
          "Encontrar um dos Drygmys selvagens próximos da base.",
          "Jogar um Wilden Horn no chão perto dele e aguardar a criatura recolhê-lo. Também é possível testar a interação direta com o item.",
          "Recolher o(s) Drygmy Token(s) deixado(s) quando o Drygmy se transforma.",
          "Repetir o procedimento com o segundo Drygmy."
        ]
      },
      {
        "title": "Observações do guia",
        "paragraphs": [
          "Resultado esperado: ter tokens suficientes para fabricar 2 Drygmy Charms. Um Drygmy selvagem pode deixar mais de um token, então confira o inventário antes de procurar itens adicionais."
        ]
      }
    ],
    "conclusion": "Tokens suficientes para fabricar dois Drygmy Charms.",
    "visualReference": "Itens e alcances do guia fornecido. O bestiário começa com poucos potes e pode crescer até quarenta.",
    "sources": [
      {
        "label": "Ars.Guide — Drygmy Charm, Henge e produção",
        "url": "https://ars.guide/book/crafting/drygmy_charm/"
      },
      {
        "label": "Ars.Guide — Containment Jar",
        "url": "https://ars.guide/book/crafting/mob_jar/"
      },
      {
        "label": "Ars.Guide — Ritual of Containment",
        "url": "https://ars.guide/book/ritual_index/ritual_containment/"
      },
      {
        "label": "Ars.Guide — Performing Rituals",
        "url": "https://ars.guide/book/ritual_index/performing_rituals/"
      },
      {
        "label": "Ars.Guide — Mecânica detalhada do Drygmy",
        "url": "https://ars.guide/docs/drygmy/guide/"
      }
    ]
  },
  {
    "id": "drygmy-fabricar-charms",
    "title": "Fabricar os Drygmy Charms",
    "summary": "Produzir dois Charms, usando oito pedestais e um Token central por operação.",
    "icon": "creature",
    "iconItem": "Drygmy Charm",
    "location": "Subsolo · bestiário",
    "sections": [
      {
        "title": "Passo a passo",
        "ordered": true,
        "items": [
          "Preparar os ingredientes de cada Drygmy Charm:",
          "Colocar o Drygmy Token no Enchanting Apparatus e os 8 ingredientes restantes nos Arcane Pedestals.",
          "Ativar o Apparatus e recolher o Drygmy Charm.",
          "Repetir para o segundo Charm, se necessário."
        ]
      },
      {
        "title": "Receita — Drygmy Charm",
        "apparatus": {
          "pedestals": [
            "Raw Cod",
            "Wheat",
            "Apple",
            "Carrot",
            "Wheat Seeds",
            "Source Gem",
            "Source Gem",
            "Source Gem"
          ],
          "reagent": "Drygmy Token",
          "output": "Drygmy Charm",
          "sourceCost": 0,
          "note": "Receita de um Charm. Repita para obter dois. Raw Cod e Wheat Seeds são exemplos das alternativas de peixe e semente aceitas no JEI."
        }
      },
      {
        "title": "Materiais da receita",
        "items": [
          "1 Drygmy Token (item central);",
          "1 peixe (ex.: Raw Cod);",
          "1 trigo;",
          "1 maçã;",
          "1 cenoura;",
          "1 semente comum;",
          "3 Source Gems."
        ]
      },
      {
        "title": "Observações do guia",
        "paragraphs": [
          "Receita padrão: não exige Source para o próprio craft do Charm. Confirme as substituições de peixe/semente mostradas pelo JEI do seu modpack."
        ]
      }
    ],
    "conclusion": "Dois Drygmy Charms disponíveis.",
    "visualReference": "Itens e alcances do guia fornecido. O bestiário começa com poucos potes e pode crescer até quarenta.",
    "sources": [
      {
        "label": "Ars.Guide — Drygmy Charm, Henge e produção",
        "url": "https://ars.guide/book/crafting/drygmy_charm/"
      },
      {
        "label": "Ars.Guide — Containment Jar",
        "url": "https://ars.guide/book/crafting/mob_jar/"
      },
      {
        "label": "Ars.Guide — Ritual of Containment",
        "url": "https://ars.guide/book/ritual_index/ritual_containment/"
      },
      {
        "label": "Ars.Guide — Performing Rituals",
        "url": "https://ars.guide/book/ritual_index/performing_rituals/"
      },
      {
        "label": "Ars.Guide — Mecânica detalhada do Drygmy",
        "url": "https://ars.guide/docs/drygmy/guide/"
      }
    ]
  },
  {
    "id": "drygmy-instalar-henge",
    "title": "Instalar e ativar o Drygmy Henge",
    "summary": "Reunir os dois Drygmys no mesmo Henge, com Source e um baú adjacente.",
    "icon": "creature",
    "iconItem": "Mossy Cobblestone",
    "location": "Subsolo · bestiário",
    "sections": [
      {
        "title": "Passo a passo",
        "ordered": true,
        "items": [
          "Posicionar 1 Mossy Cobblestone no local definitivo de operação.",
          "Utilizar 1 Drygmy Charm nesse bloco; ele se transformará em um Drygmy Henge.",
          "Utilizar o segundo Drygmy Charm no mesmo Henge, adicionando outro trabalhador.",
          "Posicionar um baú diretamente encostado no Henge.",
          "Posicionar uma Source Jar com energia a até 7 blocos e conectá-la à infraestrutura de Source existente, conforme necessário.",
          "Verificar se o Henge não está recebendo sinal de redstone, pois isso interrompe seu funcionamento."
        ]
      },
      {
        "title": "Observações do guia",
        "paragraphs": [
          "Importante: vários Drygmys no mesmo Henge aceleram o trabalho. Você não precisa criar um Henge separado para cada Drygmy."
        ]
      }
    ],
    "conclusion": "Dois Drygmys no mesmo Henge, com baú adjacente e Source acessível.",
    "visualReference": "Itens e alcances do guia fornecido. O bestiário começa com poucos potes e pode crescer até quarenta.",
    "sources": [
      {
        "label": "Ars.Guide — Drygmy Charm, Henge e produção",
        "url": "https://ars.guide/book/crafting/drygmy_charm/"
      },
      {
        "label": "Ars.Guide — Containment Jar",
        "url": "https://ars.guide/book/crafting/mob_jar/"
      },
      {
        "label": "Ars.Guide — Ritual of Containment",
        "url": "https://ars.guide/book/ritual_index/ritual_containment/"
      },
      {
        "label": "Ars.Guide — Performing Rituals",
        "url": "https://ars.guide/book/ritual_index/performing_rituals/"
      },
      {
        "label": "Ars.Guide — Mecânica detalhada do Drygmy",
        "url": "https://ars.guide/docs/drygmy/guide/"
      }
    ]
  },
  {
    "id": "drygmy-fabricar-potes",
    "title": "Fabricar os Containment Jars",
    "summary": "Começar com quatro a seis potes e deixar a ampliação para depois.",
    "icon": "creature",
    "iconItem": "Containment Jar",
    "location": "Subsolo · bestiário",
    "sections": [
      {
        "title": "Passo a passo",
        "ordered": true,
        "items": [
          "Obter Archwood e fabricar Archwood Slabs.",
          "Separar 3 Archwood Slabs + 5 blocos de vidro para cada Containment Jar.",
          "Fabricar inicialmente 4 a 6 Containment Jars na Crafting Table, consultando a disposição exata dos ingredientes no JEI.",
          "Reservar espaço e materiais para ampliar a coleção até 40 potes."
        ]
      },
      {
        "title": "Crafting — Containment Jar",
        "recipe": {
          "cells": [
            "Laje Archwood",
            "Laje Archwood",
            "Laje Archwood",
            "Glass",
            "Vazio",
            "Glass",
            "Glass",
            "Glass",
            "Glass"
          ],
          "output": "Containment Jar",
          "quantity": 1,
          "note": "Três lajes de Archwood em cima e cinco vidros nas laterais e na base. A disposição foi conferida na receita local do Ars Nouveau 4.12.7."
        }
      },
      {
        "title": "Observações do guia",
        "paragraphs": [
          "Função: cada Containment Jar guarda uma criatura. O pote com o mob pode ser transportado e recolocado no bestiário. Para libertar uma criatura, use Dispel sobre o pote — faça isso somente quando quiser soltá-la de fato."
        ]
      }
    ],
    "conclusion": "Os primeiros quatro a seis Containment Jars fabricados.",
    "visualReference": "Itens e alcances do guia fornecido. O bestiário começa com poucos potes e pode crescer até quarenta.",
    "sources": [
      {
        "label": "Ars.Guide — Drygmy Charm, Henge e produção",
        "url": "https://ars.guide/book/crafting/drygmy_charm/"
      },
      {
        "label": "Ars.Guide — Containment Jar",
        "url": "https://ars.guide/book/crafting/mob_jar/"
      },
      {
        "label": "Ars.Guide — Ritual of Containment",
        "url": "https://ars.guide/book/ritual_index/ritual_containment/"
      },
      {
        "label": "Ars.Guide — Performing Rituals",
        "url": "https://ars.guide/book/ritual_index/performing_rituals/"
      },
      {
        "label": "Ars.Guide — Mecânica detalhada do Drygmy",
        "url": "https://ars.guide/docs/drygmy/guide/"
      }
    ]
  },
  {
    "id": "drygmy-preparar-ritual",
    "title": "Preparar o Ritual of Containment",
    "summary": "Montar uma estação externa de captura e fabricar a Tablet of Containment.",
    "icon": "creature",
    "iconItem": "Tablet of Containment",
    "location": "Estação de captura → subsolo",
    "sections": [
      {
        "title": "Passo a passo",
        "ordered": true,
        "items": [
          "Separar os materiais para 1 Tablet of Containment:",
          "Fabricar a Tablet of Containment com esses ingredientes (receita sem formato específico; conferir no JEI).",
          "Usar o Ritual Brazier já existente, preferencialmente em uma estação de captura externa, distante da decoração e das máquinas do subsolo.",
          "Deixar uma Source Jar a até 6 blocos do Brazier, para alimentar capturas adicionais.",
          "Colocar Containment Jars vazios e preparar um local seguro para aproximar as criaturas."
        ]
      },
      {
        "title": "Crafting — Tablet of Containment",
        "recipe": {
          "cells": [
            "Purple Archwood Log",
            "Manipulation Essence",
            "Glass Bottle",
            "Glass Bottle",
            "Glass Bottle",
            "Vazio",
            "Vazio",
            "Vazio",
            "Vazio"
          ],
          "output": "Tablet of Containment",
          "quantity": 1,
          "shapeless": true,
          "note": "Um tronco de Purple/Vexing Archwood, uma Manipulation Essence e três Glass Bottles. Os ingredientes podem ocupar quaisquer espaços livres."
        }
      },
      {
        "title": "Materiais da receita",
        "items": [
          "1 Purple/Vexing Archwood Log;",
          "1 Manipulation Essence;",
          "3 Glass Bottles."
        ]
      },
      {
        "title": "Observações do guia",
        "paragraphs": [
          "Alcance seguro: a documentação do Ars Nouveau indica que o mob e o pote devem estar a até 3 blocos do Brazier. Monte sua estação respeitando esse alcance, mesmo que outras versões ou guias indiquem distâncias diferentes."
        ]
      }
    ],
    "conclusion": "Tablet pronta e estação de captura organizada dentro dos alcances do guia.",
    "visualReference": "Itens e alcances do guia fornecido. O bestiário começa com poucos potes e pode crescer até quarenta.",
    "sources": [
      {
        "label": "Ars.Guide — Drygmy Charm, Henge e produção",
        "url": "https://ars.guide/book/crafting/drygmy_charm/"
      },
      {
        "label": "Ars.Guide — Containment Jar",
        "url": "https://ars.guide/book/crafting/mob_jar/"
      },
      {
        "label": "Ars.Guide — Ritual of Containment",
        "url": "https://ars.guide/book/ritual_index/ritual_containment/"
      },
      {
        "label": "Ars.Guide — Performing Rituals",
        "url": "https://ars.guide/book/ritual_index/performing_rituals/"
      },
      {
        "label": "Ars.Guide — Mecânica detalhada do Drygmy",
        "url": "https://ars.guide/docs/drygmy/guide/"
      }
    ]
  },
  {
    "id": "drygmy-capturar-mobs",
    "title": "Capturar os primeiros mobs",
    "summary": "Capturar espécies diferentes e levar os potes preenchidos ao bestiário.",
    "icon": "creature",
    "iconItem": "Containment Jar",
    "location": "Estação de captura → subsolo",
    "sections": [
      {
        "title": "Passo a passo",
        "ordered": true,
        "items": [
          "Posicionar pelo menos 1 Containment Jar vazio perto do Ritual Brazier.",
          "Atrair ou levar uma criatura para a zona de captura (até 3 blocos do Brazier).",
          "Usar a Tablet of Containment no Ritual Brazier.",
          "Ativar com a mão vazia e esperar a criatura aparecer dentro de um pote.",
          "Verificar o consumo de Source: a primeira captura do ritual é gratuita; as seguintes consomem Source (valor usual: 500 por captura).",
          "Recolher o pote preenchido e posicioná-lo no bestiário, dentro do alcance do Henge.",
          "Repetir com espécies diferentes."
        ]
      },
      {
        "title": "Primeiros mobs recomendados",
        "table": {
          "headers": [
            "Criatura",
            "Recurso desejado"
          ],
          "rows": [
            [
              "Vaca",
              "Couro e carne"
            ],
            [
              "Esqueleto",
              "Ossos e flechas"
            ],
            [
              "Creeper",
              "Pólvora"
            ],
            [
              "Zumbi",
              "Carne podre e drops raros"
            ],
            [
              "Blaze",
              "Blaze Rods"
            ],
            [
              "Enderman",
              "Pérolas do Ender"
            ]
          ]
        }
      },
      {
        "title": "Observações do guia",
        "paragraphs": [
          "Você pode começar com uma vaca para testar sem risco e acrescentar os monstros depois. O ritual e o armazenamento não exigem que você mantenha uma mob farm convencional ativa."
        ]
      }
    ],
    "conclusion": "Primeiros potes com criaturas capturadas e colocadas no bestiário.",
    "visualReference": "Itens e alcances do guia fornecido. O bestiário começa com poucos potes e pode crescer até quarenta.",
    "sources": [
      {
        "label": "Ars.Guide — Drygmy Charm, Henge e produção",
        "url": "https://ars.guide/book/crafting/drygmy_charm/"
      },
      {
        "label": "Ars.Guide — Containment Jar",
        "url": "https://ars.guide/book/crafting/mob_jar/"
      },
      {
        "label": "Ars.Guide — Ritual of Containment",
        "url": "https://ars.guide/book/ritual_index/ritual_containment/"
      },
      {
        "label": "Ars.Guide — Performing Rituals",
        "url": "https://ars.guide/book/ritual_index/performing_rituals/"
      },
      {
        "label": "Ars.Guide — Mecânica detalhada do Drygmy",
        "url": "https://ars.guide/docs/drygmy/guide/"
      }
    ]
  },
  {
    "id": "drygmy-parede-bestiario",
    "title": "Construir a parede do bestiário",
    "summary": "Organizar os potes no subsolo, respeitando o alcance do Henge em três dimensões.",
    "icon": "creature",
    "iconItem": "Containment Jar",
    "location": "Subsolo · bestiário",
    "sections": [
      {
        "title": "Passo a passo",
        "ordered": true,
        "items": [
          "Reservar uma parede de 10 blocos de largura × 4 blocos de altura no subsolo.",
          "Instalar os Containment Jars em fileiras, preferencialmente com uma espécie diferente por pote.",
          "Posicionar o Henge centralizado em frente à parede, de forma que todos os potes fiquem a até 10 blocos do Henge, contando também a distância vertical.",
          "Manter o baú encostado no Henge, sem bloquear seu funcionamento.",
          "Usar molduras, vigas, placas ou outros elementos decorativos somente onde não atrapalhem a instalação e a leitura dos potes.",
          "Opcional: usar a Dominion Wand no Henge enquanto agachado para fazê-lo considerar apenas os mobs dos Containment Jars, ignorando criaturas soltas nas proximidades."
        ]
      },
      {
        "title": "Parede do bestiário · vista frontal",
        "diagram": "drygmy-wall"
      },
      {
        "title": "Planejamento da parede",
        "paragraphs": [
          "Nota arquitetônica: com somente 4 blocos livres de altura, quatro fileiras de potes ocuparão praticamente toda a parede. Planeje iluminação e acabamento lateral antes de preencher os 40 espaços. O esquema é conceitual: na construção, posicione o Henge considerando as distâncias reais em 3D."
        ]
      },
      {
        "title": "Legenda e esquema do guia",
        "code": "            PAREDE DO BESTIÁRIO — VISTA FRONTAL\n\n            [J][J][J][J][J][J][J][J][J][J]  Fileira 4\n            [J][J][J][J][J][J][J][J][J][J]  Fileira 3\n            [J][J][J][J][J][J][J][J][J][J]  Fileira 2\n            [J][J][J][J][J][J][J][J][J][J]  Fileira 1\n\n                  À FRENTE, CENTRALIZADO:\n                  [BAÚ] [DRYGMY HENGE]\n                         [SOURCE JAR]*\n\nJ = Containment Jar\n* A Source Jar não precisa ficar grudada: alcance de até 7 blocos."
      }
    ],
    "conclusion": "Os potes iniciais estão organizados e dentro do alcance; quarenta potes continuam sendo expansão futura.",
    "visualReference": "Itens e alcances do guia fornecido. O bestiário começa com poucos potes e pode crescer até quarenta.",
    "sources": [
      {
        "label": "Ars.Guide — Drygmy Charm, Henge e produção",
        "url": "https://ars.guide/book/crafting/drygmy_charm/"
      },
      {
        "label": "Ars.Guide — Containment Jar",
        "url": "https://ars.guide/book/crafting/mob_jar/"
      },
      {
        "label": "Ars.Guide — Ritual of Containment",
        "url": "https://ars.guide/book/ritual_index/ritual_containment/"
      },
      {
        "label": "Ars.Guide — Performing Rituals",
        "url": "https://ars.guide/book/ritual_index/performing_rituals/"
      },
      {
        "label": "Ars.Guide — Mecânica detalhada do Drygmy",
        "url": "https://ars.guide/docs/drygmy/guide/"
      }
    ]
  },
  {
    "id": "drygmy-armazenar-drops",
    "title": "Automatizar o armazenamento dos drops",
    "summary": "Receber a produção no baú e manter espaço livre para os drops.",
    "icon": "creature",
    "iconItem": "Chest",
    "location": "Subsolo · bestiário",
    "sections": [
      {
        "title": "Passo a passo",
        "ordered": true,
        "items": [
          "Começar com 1 baú diretamente adjacente ao Henge, deixando espaço para os primeiros resultados.",
          "Esperar um ciclo de produção e conferir se os drops e eventuais Experience Gems aparecem nesse baú.",
          "Expandir o armazenamento com os baús da parede, conforme a quantidade e a diversidade de drops crescerem.",
          "Opcional: usar um Starbuncle ou outro método de transporte de itens para esvaziar o baú de saída e levar os itens ao depósito principal.",
          "Conferir periodicamente o espaço livre do inventário de saída: se não houver armazenamento disponível, os itens produzidos podem ser perdidos."
        ]
      }
    ],
    "conclusion": "A produção chega ao baú de saída, com espaço disponível para os itens.",
    "visualReference": "Itens e alcances do guia fornecido. O bestiário começa com poucos potes e pode crescer até quarenta.",
    "sources": [
      {
        "label": "Ars.Guide — Drygmy Charm, Henge e produção",
        "url": "https://ars.guide/book/crafting/drygmy_charm/"
      },
      {
        "label": "Ars.Guide — Containment Jar",
        "url": "https://ars.guide/book/crafting/mob_jar/"
      },
      {
        "label": "Ars.Guide — Ritual of Containment",
        "url": "https://ars.guide/book/ritual_index/ritual_containment/"
      },
      {
        "label": "Ars.Guide — Performing Rituals",
        "url": "https://ars.guide/book/ritual_index/performing_rituals/"
      },
      {
        "label": "Ars.Guide — Mecânica detalhada do Drygmy",
        "url": "https://ars.guide/docs/drygmy/guide/"
      }
    ]
  },
  {
    "id": "drygmy-testar-fazenda",
    "title": "Testar a fazenda pronta",
    "summary": "Observar um ciclo de produção e conferir a instalação completa.",
    "icon": "creature",
    "iconItem": "Drygmy Charm",
    "location": "Subsolo · bestiário",
    "sections": [
      {
        "title": "Passo a passo",
        "ordered": true,
        "items": [
          "Confirmar que ao menos uma criatura está próxima ou guardada em um Containment Jar dentro do alcance.",
          "Confirmar que os 2 Drygmys estão associados ao mesmo Henge.",
          "Confirmar que o baú encosta no Henge.",
          "Confirmar que existe Source disponível.",
          "Esperar a conclusão de um ciclo e verificar se itens aparecem no baú.",
          "Verificar se os mobs nos potes continuam vivos e se não há redstone desligando o Henge.",
          "Adicionar novas espécies gradualmente e observar o comportamento da produção."
        ]
      },
      {
        "title": "Se não produzir nada",
        "ordered": true,
        "items": [
          "Baú: está diretamente adjacente e tem espaço livre?",
          "Source: a jarra está abastecida e dentro de 7 blocos?",
          "Criaturas: há mobs válidos a até 10 blocos do Henge? Se configurado como jars only, existem potes preenchidos?",
          "Redstone: o Henge não está recebendo sinal?",
          "Tempo: já esperou o tempo necessário para completar um ciclo? Dois Drygmys não produzem instantaneamente."
        ]
      }
    ],
    "conclusion": "Um ciclo produziu itens no baú; criaturas preservadas e dois Drygmys trabalhando no mesmo Henge.",
    "visualReference": "Itens e alcances do guia fornecido. O bestiário começa com poucos potes e pode crescer até quarenta.",
    "sources": [
      {
        "label": "Ars.Guide — Drygmy Charm, Henge e produção",
        "url": "https://ars.guide/book/crafting/drygmy_charm/"
      },
      {
        "label": "Ars.Guide — Containment Jar",
        "url": "https://ars.guide/book/crafting/mob_jar/"
      },
      {
        "label": "Ars.Guide — Ritual of Containment",
        "url": "https://ars.guide/book/ritual_index/ritual_containment/"
      },
      {
        "label": "Ars.Guide — Performing Rituals",
        "url": "https://ars.guide/book/ritual_index/performing_rituals/"
      },
      {
        "label": "Ars.Guide — Mecânica detalhada do Drygmy",
        "url": "https://ars.guide/docs/drygmy/guide/"
      }
    ]
  }
]
export const drygmyExpansions: ContentSection[] = [
  {
    "title": "Passo a passo",
    "ordered": true,
    "items": [
      "Ampliar o bestiário para 10, 20 e eventualmente 40 espécies diferentes.",
      "Melhorar a organização dos baús e o transporte automático dos drops.",
      "Montar uma segunda instalação especializada em itens difíceis de obter, se a produção geral ficar muito dispersa.",
      "Adicionar Drygmys ao mesmo Henge para acelerar os ciclos, avaliando o consumo de Source.",
      "Decorar a parede como uma coleção de criaturas, mantendo acesso para reorganizar os potes."
    ]
  }
]
