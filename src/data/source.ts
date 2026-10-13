import type { Stage } from './types'

export const source: Stage = {
  "id": "04-source",
  "name": "Source",
  "title": "Fazenda de Source: jardim arcano lateral",
  "icon": "sourcelink",
  "difficulty": "Fácil / média",
  "description": "Construir ao lado da torre um jardim arcano de 17×17 para cultivar Sourceberries, gerar Source com um Agronomic Sourcelink e armazená-la em Source Jars. A plantação funciona sem criaturas nesta etapa e reserva espaço para a automação futura.",
  "provisional": false,
  "note": "Minecraft Java 1.20.1 — receitas padrão do Ars Nouveau. Se o modpack alterar receitas ou configurações, JEI/EMI e o comportamento observado no jogo prevalecem.",
  "overview": [
    {
      "title": "Onde construir em relação à torre",
      "paragraphs": [
        "A torre da Etapa 2 possui 11×11 blocos externos na superfície e um subsolo de 17×17. O jardim fica em uma das laterais, para que:",
        "Distância recomendada: deixe 6 blocos de terreno desocupado entre a parede externa visível da torre e a cerca externa do jardim. Como o subsolo avança 3 blocos além da torre de cada lado, ainda ficam 3 blocos de folga entre a projeção do subsolo e a cerca do jardim. Centralize um caminho de 3 blocos de largura nessa faixa de ligação.",
        "Nota: ilustração da ocupação do terreno, não está em escala. O portão da fazenda deve ficar voltado para a torre. Na planta detalhada abaixo, ele aparece no lado esquerdo (oeste)."
      ],
      "ordered": false,
      "items": [
        "A frente da torre continue livre para a entrada principal.",
        "Os fundos possam receber futuras fazendas de Drygmys e outras criaturas.",
        "A plantação apareça como jardim/estufa anexa, integrada por caminho de pedra e lanternas.",
        "A estufa não fique sobre o subsolo mais largo que a torre."
      ],
      "code": "                     FUNDOS (expansões futuras)\n\n    +--------------+        +----------------------+\n    | TORRE 11x11  |        | JARDIM ARCANO 17x17   |\n    |   recepção   |--------| Sourceberries +      |\n    | (subsolo     | 6 blocos| Sourcelink + Jars     |\n    |    17x17)    | caminho|                      |\n    +------++------+        +----------------------+\n           ||\n           || entrada principal livre\n           \\/\n                         FRENTE"
    },
    {
      "title": "Dimensões do jardim",
      "table": {
        "headers": [
          "Elemento",
          "Medida",
          "Observação"
        ],
        "rows": [
          [
            "Ocupação total",
            "17×17 blocos",
            "Inclui cerca e circulação"
          ],
          [
            "Cerca ou muro externo",
            "1 bloco de espessura",
            "Pode ser pedra, madeira ou combinação"
          ],
          [
            "Corredor interno perimetral",
            "1 bloco de largura",
            "Contorna toda a área"
          ],
          [
            "Área interna entre corredores",
            "13×13 blocos",
            "Inclui cultivo, núcleo e instalações técnicas"
          ],
          [
            "Cultivo inicial",
            "até 11×11 (setor central)",
            "Nem todas as posições são arbustos: existem caminhos e núcleo"
          ],
          [
            "Faixa interna de expansão",
            "1 bloco ao redor da área inicial",
            "Pode permanecer como paisagismo inicialmente"
          ],
          [
            "Altura livre sugerida",
            "4 blocos",
            "Para uma estufa, teto acima desse espaço, no 5º nível ou mais alto"
          ],
          [
            "Caminho da torre ao jardim",
            "3 blocos de largura",
            "Dentro dos 6 blocos de afastamento"
          ]
        ]
      },
      "paragraphs": [
        "Importante: 17×17 não representa 289 arbustos. A medida abrange cerca, corredores, espaços técnicos e canteiros. Comece com 8 Sourceberries da Etapa 1 e replante frutos até formar 16 arbustos; depois amplie de acordo com sua necessidade."
      ]
    },
    {
      "title": "Planta superior exata — grade 17×17",
      "paragraphs": [
        "Cada caractere representa 1 bloco horizontal. A primeira coluna e a primeira linha são as bordas externas; portão à esquerda. Coordenadas: x=0..16 da esquerda para a direita e z=0..16 de cima para baixo. O centro é (8,8)."
      ],
      "code": "#################\n#...............#\n#.+++++++++++++.#\n#.+BBBBB.BBBBB+.#\n#.+BBBBTTTBBBB+.#\n#.+BBBBTCTBBBB+.#\n#.+BBBBTTTBBBB+.#\n#.+BBBBSJBBBBB+.#\n=......JLJ......#\n#.+BBBBBJBBBBB+.#\n#.+BBBBB.BBBBB+.#\n#.+BBBBB.BBBBB+.#\n#.+BBBBB.BBBBB+.#\n#.+BBBBB.BBBBB+.#\n#.+++++++++++++.#\n#...............#\n#################"
    },
    {
      "title": "Legenda",
      "table": {
        "headers": [
          "Símbolo",
          "Bloco / função"
        ],
        "rows": [
          [
            "#",
            "Cerca ou parede do jardim"
          ],
          [
            "=",
            "Portão ou entrada voltada para a torre"
          ],
          [
            ".",
            "Caminho de circulação; pode usar pedra/laje"
          ],
          [
            "+",
            "Faixa de acabamento/jardim, reserva de expansão"
          ],
          [
            "B",
            "Canteiro de Sourceberries, a preencher gradualmente"
          ],
          [
            "T",
            "Espaço técnico livre; pode receber caminho ou decoração"
          ],
          [
            "C",
            "Baú futuro para Sourceberries — não colocar ainda se não quiser"
          ],
          [
            "S",
            "Ponto de referência para futuro Starbuncle — não invocar ainda"
          ],
          [
            "L",
            "Agronomic Sourcelink, instalar agora"
          ],
          [
            "J",
            "Posição reservada para Source Jar; instalar ao menos 1 agora"
          ]
        ]
      },
      "paragraphs": [
        "Posicionamento central (coordenadas dentro do quadrado): Sourcelink em (8,8); Jars em (8,7), (8,9), (7,8) e (9,8). Essas quatro posições formam uma cruz. O ponto inicial do Starbuncle foi reservado em (7,7) e o baú em (8,5). Os caminhos internos são deliberados: permitem chegar ao núcleo sem atravessar toda a plantação."
      ]
    },
    {
      "title": "Por que essa geometria funciona",
      "ordered": false,
      "items": [
        "O Agronomic Sourcelink reconhece eventos de crescimento de planta ou árvore em até 15 blocos dele. Mesmo o canto da área de cultivo ficará bem abaixo desse alcance.",
        "O Sourcelink descarrega Source em Source Jars até 5 blocos de distância. As posições J estão adjacentes ao Sourcelink, portanto não exigem Source Relays.",
        "O Starbuncle usado posteriormente pode colher Sourceberries maduras em aproximadamente 10 blocos e recolher itens soltos em aproximadamente 8 blocos. O ponto S foi colocado perto do centro e os canteiros principais ficam em um setor menor para oferecer margem de alcance. O deslocamento e a configuração reais serão tratados nas etapas 5 e 6.",
        "A fazenda não precisa ter os quatro recipientes desde o início. Uma Source Jar é suficiente para iniciar e testar a produção."
      ],
      "paragraphs": [
        "Limitação importante: alcances de Starbuncles podem variar com a versão e a configuração do modpack. Não tratar o ponto S como prova de cobertura automática em todos os blocos: essa cobertura será validada quando a criatura estiver disponível. Também não confundir alcance de colher arbustos com alcance de recolher itens caídos."
      ]
    },
    {
      "title": "Materiais para o núcleo de energia",
      "table": {
        "headers": [
          "Material",
          "Para começar (1 Sourcelink + 1 Jar)",
          "Para 4 Jars (opcional)"
        ],
        "rows": [
          [
            "Source Gems",
            "2",
            "2"
          ],
          [
            "Barras de ouro",
            "2",
            "2"
          ],
          [
            "Trigo",
            "1",
            "1"
          ],
          [
            "Lajes de Archwood",
            "6",
            "24"
          ],
          [
            "Vidro (blocos)",
            "2",
            "8"
          ],
          [
            "Sourceberries para o plantio",
            "8 iniciais, ampliar a 16",
            "Mesmo objetivo inicial"
          ]
        ]
      },
      "paragraphs": [
        "Conversões necessárias: 3 tábuas de Archwood em uma fileira da Crafting Table produzem 6 lajes, suficientes para uma Jar. Para quatro Jars, são 12 tábuas (= 3 troncos de Archwood convertidos em tábuas, na receita vanilla). O vidro pode ser feito fundindo areia. Cercas, iluminação, pedras e blocos de decoração dependem da escolha estética e não têm quantidade rígida.",
        "Origem dos recursos: as Source Gems são produzidas na Imbuement Chamber da Etapa 3; Sourceberries e Archwood foram coletados na Etapa 1. Materiais já guardados contam normalmente."
      ]
    },
    {
      "title": "O que fica para as próximas etapas",
      "ordered": false,
      "items": [
        "Etapa 5: encontrar e conseguir o primeiro Starbuncle e preparar os equipamentos para utilizá-lo.",
        "Etapa 6: posicionar e configurar o Starbuncle, ligar o baú e automatizar colheita e transporte das Sourceberries.",
        "Etapa 7: avaliar Source Relays, distribuição de energia até a torre e melhorias de infraestrutura."
      ],
      "paragraphs": [
        "Não adiantar essas tarefas nesta etapa. A fazenda deverá funcionar inicialmente com Sourceberries cultivadas, crescimento natural e colheita manual."
      ]
    }
  ],
  "tasks": [
    {
      "id": "source-local-jardim",
      "title": "Definir o local do jardim",
      "summary": "Escolher a lateral da torre e demarcar um terreno de 17×17, com 6 blocos de afastamento.",
      "icon": "blocks",
      "location": "Jardim lateral · 17×17",
      "visualReference": "vista superior esquemática de torre e jardim com caminho de ligação.",
      "sections": [
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Escolha a lateral da torre que permita construir sem bloquear a fachada e a entrada principal.",
            "Conte 6 blocos vazios a partir da parede externa da torre; depois comece a borda da fazenda.",
            "Demarque 17 blocos por 17 blocos, incluindo a futura cerca.",
            "Centralize um caminho de 3 blocos de largura entre a torre e o futuro portão do jardim.",
            "Confira que o subsolo de 17×17 da torre não ficará sob a cerca ou os canteiros da fazenda."
          ]
        },
        {
          "title": "Materiais",
          "items": [
            "Blocos comuns temporários para marcar os limites; pá/picareta para nivelar o terreno."
          ]
        }
      ],
      "conclusion": "Área lateral de 17×17 demarcada e posicionada sem interferência na torre/subsolo.",
      "sources": [
        {
          "label": "Agronomic Sourcelink",
          "url": "https://ars.guide/book/source/block.ars_nouveau.agronomic_sourcelink/"
        },
        {
          "label": "Source Jar",
          "url": "https://ars.guide/book/source/block.ars_nouveau.source_jar/"
        },
        {
          "label": "Sourceberry Bush",
          "url": "https://ars.guide/book/field_guide/sourceberry_bush/"
        },
        {
          "label": "Receita do Sourcelink",
          "url": "https://raw.githubusercontent.com/baileyholl/Ars-Nouveau/main/src/generated/resources/data/ars_nouveau/recipe/agronomic_sourcelink.json"
        },
        {
          "label": "Receita da Jar",
          "url": "https://raw.githubusercontent.com/baileyholl/Ars-Nouveau/main/src/generated/resources/data/ars_nouveau/recipe/source_jar.json"
        },
        {
          "label": "Starbuncle",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/starbuncle/"
        }
      ]
    },
    {
      "id": "source-estrutura-jardim",
      "title": "Construir a base e os canteiros",
      "summary": "Fazer cerca, portão, corredor e canteiros seguindo a planta superior.",
      "icon": "blocks",
      "location": "Jardim lateral · 17×17",
      "visualReference": "planta 17×17 do arquivo; jardim Minecraft com pedras, caminhos e arbustos.",
      "sections": [
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Instale a cerca/muro nos limites marcados com #, deixando a entrada = voltada para a torre.",
            "Abra o corredor interno de 1 bloco de largura marcado com ..",
            "Reserve os blocos T, C, S, L e J, assim como os caminhos internos, para que não sejam ocupados por plantações.",
            "Deixe terra ou grama nos locais B. Não há necessidade de usar enxada nem irrigação especial para os arbustos de Sourceberry.",
            "Ilumine os caminhos e os arredores; se preferir, deixe o jardim aberto por enquanto.",
            "Guarde a faixa + como acabamento/expansão, sem necessidade de plantá-la inicialmente."
          ]
        },
        {
          "title": "Materiais",
          "items": [
            "Blocos de pedra/madeira para cercas e piso; terra ou grama para canteiros; tochas ou lanternas. Quantidades dependem do estilo escolhido."
          ]
        },
        {
          "title": "Dimensões do jardim",
          "table": {
            "headers": [
              "Elemento",
              "Medida",
              "Observação"
            ],
            "rows": [
              [
                "Ocupação total",
                "17×17 blocos",
                "Inclui cerca e circulação"
              ],
              [
                "Cerca ou muro externo",
                "1 bloco de espessura",
                "Pode ser pedra, madeira ou combinação"
              ],
              [
                "Corredor interno perimetral",
                "1 bloco de largura",
                "Contorna toda a área"
              ],
              [
                "Área interna entre corredores",
                "13×13 blocos",
                "Inclui cultivo, núcleo e instalações técnicas"
              ],
              [
                "Cultivo inicial",
                "até 11×11 (setor central)",
                "Nem todas as posições são arbustos: existem caminhos e núcleo"
              ],
              [
                "Faixa interna de expansão",
                "1 bloco ao redor da área inicial",
                "Pode permanecer como paisagismo inicialmente"
              ],
              [
                "Altura livre sugerida",
                "4 blocos",
                "Para uma estufa, teto acima desse espaço, no 5º nível ou mais alto"
              ],
              [
                "Caminho da torre ao jardim",
                "3 blocos de largura",
                "Dentro dos 6 blocos de afastamento"
              ]
            ]
          },
          "paragraphs": [
            "Importante: 17×17 não representa 289 arbustos. A medida abrange cerca, corredores, espaços técnicos e canteiros. Comece com 8 Sourceberries da Etapa 1 e replante frutos até formar 16 arbustos; depois amplie de acordo com sua necessidade."
          ]
        },
        {
          "title": "Planta superior exata — grade 17×17",
          "paragraphs": [
            "Cada caractere representa 1 bloco horizontal. A primeira coluna e a primeira linha são as bordas externas; portão à esquerda. Coordenadas: x=0..16 da esquerda para a direita e z=0..16 de cima para baixo. O centro é (8,8)."
          ],
          "code": "#################\n#...............#\n#.+++++++++++++.#\n#.+BBBBB.BBBBB+.#\n#.+BBBBTTTBBBB+.#\n#.+BBBBTCTBBBB+.#\n#.+BBBBTTTBBBB+.#\n#.+BBBBSJBBBBB+.#\n=......JLJ......#\n#.+BBBBBJBBBBB+.#\n#.+BBBBB.BBBBB+.#\n#.+BBBBB.BBBBB+.#\n#.+BBBBB.BBBBB+.#\n#.+BBBBB.BBBBB+.#\n#.+++++++++++++.#\n#...............#\n#################"
        },
        {
          "title": "Legenda",
          "table": {
            "headers": [
              "Símbolo",
              "Bloco / função"
            ],
            "rows": [
              [
                "#",
                "Cerca ou parede do jardim"
              ],
              [
                "=",
                "Portão ou entrada voltada para a torre"
              ],
              [
                ".",
                "Caminho de circulação; pode usar pedra/laje"
              ],
              [
                "+",
                "Faixa de acabamento/jardim, reserva de expansão"
              ],
              [
                "B",
                "Canteiro de Sourceberries, a preencher gradualmente"
              ],
              [
                "T",
                "Espaço técnico livre; pode receber caminho ou decoração"
              ],
              [
                "C",
                "Baú futuro para Sourceberries — não colocar ainda se não quiser"
              ],
              [
                "S",
                "Ponto de referência para futuro Starbuncle — não invocar ainda"
              ],
              [
                "L",
                "Agronomic Sourcelink, instalar agora"
              ],
              [
                "J",
                "Posição reservada para Source Jar; instalar ao menos 1 agora"
              ]
            ]
          },
          "paragraphs": [
            "Posicionamento central (coordenadas dentro do quadrado): Sourcelink em (8,8); Jars em (8,7), (8,9), (7,8) e (9,8). Essas quatro posições formam uma cruz. O ponto inicial do Starbuncle foi reservado em (7,7) e o baú em (8,5). Os caminhos internos são deliberados: permitem chegar ao núcleo sem atravessar toda a plantação."
          ]
        }
      ],
      "conclusion": "Estrutura 17×17 transitável, com a área central e os canteiros definidos de acordo com a planta.",
      "sources": [
        {
          "label": "Agronomic Sourcelink",
          "url": "https://ars.guide/book/source/block.ars_nouveau.agronomic_sourcelink/"
        },
        {
          "label": "Source Jar",
          "url": "https://ars.guide/book/source/block.ars_nouveau.source_jar/"
        },
        {
          "label": "Sourceberry Bush",
          "url": "https://ars.guide/book/field_guide/sourceberry_bush/"
        },
        {
          "label": "Receita do Sourcelink",
          "url": "https://raw.githubusercontent.com/baileyholl/Ars-Nouveau/main/src/generated/resources/data/ars_nouveau/recipe/agronomic_sourcelink.json"
        },
        {
          "label": "Receita da Jar",
          "url": "https://raw.githubusercontent.com/baileyholl/Ars-Nouveau/main/src/generated/resources/data/ars_nouveau/recipe/source_jar.json"
        },
        {
          "label": "Starbuncle",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/starbuncle/"
        }
      ]
    },
    {
      "id": "source-agronomic-sourcelink",
      "title": "Fabricar e posicionar o Agronomic Sourcelink",
      "summary": "Fabricar o gerador de Source e colocá-lo no centro da plantação.",
      "icon": "sourcelink",
      "location": "Jardim lateral · 17×17",
      "visualReference": "ícone do Agronomic Sourcelink e screenshot do bloco instalado.",
      "sections": [
        {
          "title": "Materiais",
          "items": [
            "2 Source Gems.",
            "2 barras de ouro.",
            "1 trigo."
          ]
        },
        {
          "title": "Crafting — Agronomic Sourcelink",
          "paragraphs": [
            "Produção: 1 unidade em Crafting Table comum, receita com formato (shaped). Grade 3×3:",
            "Materiais: 2 Source Gems + 2 barras de ouro + 1 trigo. Identificador: ars_nouveau:agronomic_sourcelink."
          ],
          "recipe": {
            "cells": [
              "Vazio",
              "Source Gem",
              "Vazio",
              "Barra de ouro",
              "Trigo",
              "Barra de ouro",
              "Vazio",
              "Source Gem",
              "Vazio"
            ],
            "output": "Agronomic Sourcelink",
            "note": "2 Source Gems, 2 barras de ouro e 1 trigo. Crafting Table, posições fixas.",
            "quantity": 1
          }
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Reúna os cinco ingredientes.",
            "Monte o Agronomic Sourcelink na Crafting Table com as Source Gems acima e abaixo, ouro nas laterais e trigo no centro.",
            "Instale-o no centro (8,8) da fazenda (L).",
            "Não coloque plantas nas quatro posições J adjacentes: elas serão os pontos de armazenamento de Source."
          ]
        }
      ],
      "conclusion": "Um Agronomic Sourcelink fabricado e colocado na posição central da fazenda.",
      "sources": [
        {
          "label": "Agronomic Sourcelink",
          "url": "https://ars.guide/book/source/block.ars_nouveau.agronomic_sourcelink/"
        },
        {
          "label": "Source Jar",
          "url": "https://ars.guide/book/source/block.ars_nouveau.source_jar/"
        },
        {
          "label": "Sourceberry Bush",
          "url": "https://ars.guide/book/field_guide/sourceberry_bush/"
        },
        {
          "label": "Receita do Sourcelink",
          "url": "https://raw.githubusercontent.com/baileyholl/Ars-Nouveau/main/src/generated/resources/data/ars_nouveau/recipe/agronomic_sourcelink.json"
        },
        {
          "label": "Receita da Jar",
          "url": "https://raw.githubusercontent.com/baileyholl/Ars-Nouveau/main/src/generated/resources/data/ars_nouveau/recipe/source_jar.json"
        },
        {
          "label": "Starbuncle",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/starbuncle/"
        }
      ]
    },
    {
      "id": "source-jar-e-plantacao",
      "title": "Fabricar Source Jar e iniciar o cultivo",
      "summary": "Instalar a primeira Source Jar e cultivar pelo menos 16 arbustos de Sourceberries.",
      "icon": "jar",
      "location": "Jardim lateral · 17×17",
      "visualReference": "Source Jar, Sourceberry Bush e screenshot de canteiros com arbustos.",
      "sections": [
        {
          "title": "Materiais",
          "ordered": false,
          "items": [
            "6 lajes de Archwood para a primeira Source Jar.",
            "2 vidros para a primeira Source Jar.",
            "8 Sourceberries iniciais; colher e replantar até atingir 16 arbustos.",
            "Opcional: mais 18 lajes de Archwood e 6 vidros para 3 Jars adicionais."
          ]
        },
        {
          "title": "Crafting — Source Jar",
          "paragraphs": [
            "Produção: 1 unidade em Crafting Table comum, receita com formato (shaped). Grade 3×3:",
            "Materiais: 6 Archwood Slabs + 2 blocos de vidro por Jar. Identificador: ars_nouveau:source_jar.",
            "Correção de referência: para a receita padrão são 2 vidros, não 3. As grades acima seguem as receitas oficiais disponibilizadas no repositório do mod; em um modpack, a receita mostrada pelo JEI/EMI 1.20.1 prevalece se houver alterações."
          ],
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
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Faça 6 Archwood Slabs utilizando 3 tábuas na Crafting Table.",
            "Monte 1 Source Jar com três lajes na linha superior, vidro nas duas laterais da linha central e três lajes na linha inferior.",
            "Coloque a Jar em qualquer ponto J adjacente ao Sourcelink. As outras três posições permanecem reservadas.",
            "Plante as 8 Sourceberries coletadas na Etapa 1 nos blocos B, de preferência perto do núcleo.",
            "Colha frutas maduras sem destruir os arbustos e replante até chegar a 16 Sourceberry Bushes cultivados.",
            "Não é necessário encher imediatamente todos os canteiros. Essa plantação poderá aumentar conforme sua produção exigir."
          ]
        }
      ],
      "conclusion": "Pelo menos 1 Source Jar instalada e 16 arbustos de Sourceberry plantados.",
      "sources": [
        {
          "label": "Agronomic Sourcelink",
          "url": "https://ars.guide/book/source/block.ars_nouveau.agronomic_sourcelink/"
        },
        {
          "label": "Source Jar",
          "url": "https://ars.guide/book/source/block.ars_nouveau.source_jar/"
        },
        {
          "label": "Sourceberry Bush",
          "url": "https://ars.guide/book/field_guide/sourceberry_bush/"
        },
        {
          "label": "Receita do Sourcelink",
          "url": "https://raw.githubusercontent.com/baileyholl/Ars-Nouveau/main/src/generated/resources/data/ars_nouveau/recipe/agronomic_sourcelink.json"
        },
        {
          "label": "Receita da Jar",
          "url": "https://raw.githubusercontent.com/baileyholl/Ars-Nouveau/main/src/generated/resources/data/ars_nouveau/recipe/source_jar.json"
        },
        {
          "label": "Starbuncle",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/starbuncle/"
        }
      ]
    },
    {
      "id": "source-reserva-starbuncle",
      "title": "Reservar a futura automação com Starbuncle",
      "summary": "Deixar o núcleo pronto para adicionar um Starbuncle e um baú futuramente.",
      "icon": "starbuncle",
      "location": "Jardim lateral · 17×17",
      "visualReference": "Starbuncle, baú comum e planta com as marcações S e C.",
      "sections": [
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Identifique no desenho o ponto S em (7,7), próximo ao centro; ele é apenas uma referência inicial para instalar o Starbuncle na etapa de automação.",
            "Reserve o ponto C em (8,5) para o futuro baú de Sourceberries.",
            "Não bloqueie com paredes ou decoração os caminhos entre o baú, o núcleo mágico e os canteiros.",
            "Não é necessário obter Starbuncle, Charm ou Dominion Wand agora. As criaturas serão tratadas nas Etapas 5 e 6.",
            "Quando chegar a automação, verificar no jogo os limites reais de colheita e de transporte antes de expandir a plantação para toda a faixa externa +."
          ]
        },
        {
          "title": "Materiais",
          "items": [
            "Nenhum item mágico obrigatório; blocos simples para identificar os dois pontos, se desejar."
          ]
        }
      ],
      "conclusion": "Pontos do baú e do futuro Starbuncle identificados e acessíveis, sem necessidade de possuir a criatura.",
      "sources": [
        {
          "label": "Agronomic Sourcelink",
          "url": "https://ars.guide/book/source/block.ars_nouveau.agronomic_sourcelink/"
        },
        {
          "label": "Source Jar",
          "url": "https://ars.guide/book/source/block.ars_nouveau.source_jar/"
        },
        {
          "label": "Sourceberry Bush",
          "url": "https://ars.guide/book/field_guide/sourceberry_bush/"
        },
        {
          "label": "Receita do Sourcelink",
          "url": "https://raw.githubusercontent.com/baileyholl/Ars-Nouveau/main/src/generated/resources/data/ars_nouveau/recipe/agronomic_sourcelink.json"
        },
        {
          "label": "Receita da Jar",
          "url": "https://raw.githubusercontent.com/baileyholl/Ars-Nouveau/main/src/generated/resources/data/ars_nouveau/recipe/source_jar.json"
        },
        {
          "label": "Starbuncle",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/starbuncle/"
        }
      ]
    },
    {
      "id": "source-teste-geracao",
      "title": "Verificar a geração de Source",
      "summary": "Confirmar que o crescimento dos arbustos produz Source e carrega a Source Jar.",
      "icon": "jar",
      "location": "Jardim lateral · 17×17",
      "visualReference": "Source Jar parcialmente preenchida, próxima ao Agronomic Sourcelink.",
      "sections": [
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Permaneça na região, com os chunks da fazenda carregados, para permitir o crescimento natural das plantas.",
            "Observe a Source Jar instalada: seu conteúdo deverá aumentar quando o Sourcelink reconhecer crescimento natural dos arbustos.",
            "Quando as frutas amadurecerem, faça a colheita manual e preserve os arbustos para novos ciclos.",
            "Se a Jar continuar vazia, verifique as distâncias, confirme se os arbustos estão crescendo e se a Jar está dentro de 5 blocos do Sourcelink.",
            "Não conte com bonemeal para acelerar a geração de Source: crescimento provocado por bonemeal não gera Source pelo Agronomic Sourcelink.",
            "Se a produção funcionar, considere instalar Jars adicionais nas posições reservadas J somente quando houver necessidade."
          ]
        }
      ],
      "conclusion": "Pelo menos uma Source Jar recebeu Source gerada pelo Agronomic Sourcelink a partir da plantação.",
      "sources": [
        {
          "label": "Agronomic Sourcelink",
          "url": "https://ars.guide/book/source/block.ars_nouveau.agronomic_sourcelink/"
        },
        {
          "label": "Source Jar",
          "url": "https://ars.guide/book/source/block.ars_nouveau.source_jar/"
        },
        {
          "label": "Sourceberry Bush",
          "url": "https://ars.guide/book/field_guide/sourceberry_bush/"
        },
        {
          "label": "Receita do Sourcelink",
          "url": "https://raw.githubusercontent.com/baileyholl/Ars-Nouveau/main/src/generated/resources/data/ars_nouveau/recipe/agronomic_sourcelink.json"
        },
        {
          "label": "Receita da Jar",
          "url": "https://raw.githubusercontent.com/baileyholl/Ars-Nouveau/main/src/generated/resources/data/ars_nouveau/recipe/source_jar.json"
        },
        {
          "label": "Starbuncle",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/starbuncle/"
        }
      ]
    }
  ]
}
