import type { Stage } from './types'

export const criaturas: Stage = {
  "id": "05-criaturas",
  "name": "Criaturas",
  "title": "Primeiro ajudante mágico: Starbuncle",
  "icon": "starbuncle",
  "difficulty": "Média",
  "description": "Obter o primeiro Starbuncle Token, montar no subsolo uma estação de encantamento e fabricar um Starbuncle Charm para invocar seu ajudante no jardim. A coleta e o transporte serão configurados na Etapa 6.",
  "provisional": false,
  "note": "Minecraft Java 1.20.1 — receitas padrão do Ars Nouveau. Se o modpack alterar receitas ou configurações, JEI/EMI e o comportamento observado no jogo prevalecem.",
  "overview": [
    {
      "title": "Plano definitivo do subsolo da torre",
      "paragraphs": [
        "A torre da Etapa 2 possui 17×17 blocos externos no subsolo, 15×15 livres internamente antes das divisórias, com 4 blocos de altura livre. O acesso fica na parte da frente (parte inferior da planta). A proposta usa duas alas assimétricas para reservar mais espaço ao Enchanting Apparatus:",
        "A divisão separa funcionalmente as máquinas, sem exigir que toda a decoração fique pronta nesta etapa."
      ],
      "ordered": false,
      "items": [
        "Esquerda — Imbuição: Imbuement Chamber da Etapa 3 e futuras essências; ala com 6 blocos de largura interna.",
        "Direita — Encantamento: Enchanting Apparatus e Arcane Pedestals; ala com 8 blocos de largura interna.",
        "Frente — Recepção técnica: acesso, circulação e baús de componentes mágicos.",
        "Altura: manter os quatro blocos livres, sem colocar vigas ou luminárias baixas sobre máquinas e circulação."
      ]
    },
    {
      "title": "Planta superior de 17×17, bloco a bloco",
      "paragraphs": [
        "Cada caractere representa um bloco na horizontal. Linha 0 = fundo, linha 16 = frente; colunas x=0..16 da esquerda para a direita e linhas z=0..16 de cima para baixo. As letras estão nas posições onde o bloco deve ficar."
      ],
      "code": "    x: 00000000001111111\n       01234567890123456\nz00    #################\nz01    #......#........#\nz02    #......#........#\nz03    #......#...P....#\nz04    #..p...#..o.o...#\nz05    #.pIpJ.#.P.A.PJ.#\nz06    #......#..o.o...#\nz07    #......#...P....#\nz08    #......#........#\nz09    #......#........#\nz10    #......#........#\nz11    ###DD######DD####\nz12    #...............#\nz13    #.B.B.B.........#\nz14    #.......EE......#\nz15    #.......EE......#\nz16    #################\n                   FRENTE / ACESSO"
    },
    {
      "title": "Legenda",
      "table": {
        "headers": [
          "Símbolo",
          "Bloco ou função",
          "Construir nesta etapa?"
        ],
        "rows": [
          [
            "#",
            "Parede de pedra / divisória",
            "Sim, de modo provisório"
          ],
          [
            ".",
            "Piso livre de circulação e acabamento",
            "Sim, piso simples basta"
          ],
          [
            "D",
            "Passagem de dois blocos de largura entre recepção e cada ala",
            "Sim; porta opcional"
          ],
          [
            "E",
            "Reserva para escada, escada de mão ou acesso do térreo",
            "Acesso deve funcionar; tipo livre"
          ],
          [
            "B",
            "Baú de materiais mágicos",
            "Opcional; baús já existentes contam"
          ],
          [
            "I",
            "Imbuement Chamber",
            "Sim, já obtida na Etapa 3"
          ],
          [
            "p",
            "Posição opcional de futuro Arcane Pedestal para essências na imbuição",
            "Não fabricar para este setor agora"
          ],
          [
            "A",
            "Enchanting Apparatus, com Arcane Core diretamente abaixo",
            "Sim"
          ],
          [
            "P",
            "Arcane Pedestal do encantamento",
            "Quatro nesta etapa"
          ],
          [
            "o",
            "Arcane Pedestal adicional, reservado para receitas maiores",
            "Não; expansão futura"
          ],
          [
            "J",
            "Lugar planejado para uma Source Jar",
            "Opcional agora; útil futuramente"
          ]
        ]
      }
    },
    {
      "title": "Coordenadas essenciais",
      "ordered": false,
      "items": [
        "Imbuement Chamber: (3,5).",
        "Enchanting Apparatus: (11,5); Arcane Core na mesma coluna, um bloco abaixo.",
        "Os quatro pedestais iniciais: (11,3), (9,5), (13,5), (11,7).",
        "Quatro pedestais futuros: (10,4), (12,4), (10,6), (12,6).",
        "Source Jar opcional na ala de imbuição: (5,5); outra opcional no encantamento: (14,5).",
        "Passagens de entrada para as alas: (3–4,11) e (11–12,11)."
      ],
      "paragraphs": [
        "Os pedestais iniciais ficam a dois blocos na horizontal do Apparatus; os futuros ficam nas diagonais imediatamente próximas. Todos ficam bem próximos do centro, dentro do alcance de até três blocos informado pelo mod, inclusive usando uma interpretação conservadora de distância. A Imbuement Chamber permanece com posições adjacentes livres para pedestais futuros. Não colocar o Arcane Core na mesma altura do Apparatus: ele deve ficar embaixo, formando uma coluna vertical.",
        "Observação de construção: o desenho representa posições horizontais dos equipamentos, e não a escada vertical inteira. Ajuste o acesso E à escada que já existe na torre, sem mudar as coordenadas das duas máquinas. O quarto livre em frente permite fazer essa ligação sem atravessar as máquinas."
      ]
    },
    {
      "title": "Estética sugerida, sem obrigatoriedade",
      "table": {
        "headers": [
          "Parte",
          "Acabamento visual"
        ],
        "rows": [
          [
            "Recepção",
            "Deepslate Bricks, baús, iluminação com lanternas"
          ],
          [
            "Imbuição",
            "Stone Bricks / calcita / detalhes em ametista, para parecer um laboratório"
          ],
          [
            "Encantamento",
            "Polished Deepslate / Sourcestone decorativa, círculo ou linhas no piso em torno dos pedestais"
          ],
          [
            "Divisórias",
            "Arcos de pedra com detalhe de Dark Oak ou Archwood"
          ],
          [
            "Source Jars",
            "Junto às paredes, sem ocupar as passagens"
          ]
        ]
      },
      "paragraphs": [
        "Atenção: Sourcestone usada como decoração aumenta o custo além dos 24 blocos estritamente necessários para as máquinas. Faça o acabamento somente depois de concluir os crafts."
      ]
    },
    {
      "title": "Materiais totais — cinco atividades",
      "paragraphs": [
        "Partindo do zero nos itens desta etapa (exceto equipamentos da Etapa 3), para montar 1 Arcane Core + 1 Enchanting Apparatus + 4 Arcane Pedestals + 1 Starbuncle Charm:",
        "Se você já possui Source Gems ou alguns materiais, desconte-os do total; não é necessário repetir crafts. A etapa 3 já fornece uma reserva inicial de 8 Source Gems, caso não tenham sido gastas depois.",
        "Source Jars adicionais: não fazem parte do custo obrigatório desta etapa. O Starbuncle Charm custa 0 Source na receita padrão. Mantenha a Jar da plantação produzindo Source; futuramente podemos instalar mais recipientes no subsolo e conectá-los com Source Relays."
      ],
      "table": {
        "headers": [
          "Material",
          "Quantidade",
          "Destinação"
        ],
        "rows": [
          [
            "Pedra comum (Stone)",
            "24 blocos",
            "Três crafts de 8 Sourcestones; pedregulho não substitui Stone"
          ],
          [
            "Source Gems",
            "8",
            "3 para as Sourcestones + 1 Arcane Core + 4 pedestais"
          ],
          [
            "Barras de ouro",
            "11",
            "2 Arcane Core + 2 Apparatus + 4 Charm + 3 convertidas em 27 pepitas"
          ],
          [
            "Pepitas de ouro",
            "21 usadas",
            "4 Apparatus + 16 pedestais + 1 para atrair um Starbuncle; sobram 6 das 27"
          ],
          [
            "Diamante",
            "1",
            "Enchanting Apparatus"
          ],
          [
            "Starbuncle Token",
            "1",
            "Obtido da criatura no mundo"
          ],
          [
            "Sourcestone",
            "24 produzidas e consumidas",
            "6 Arcane Core + 2 Apparatus + 16 quatro pedestais"
          ]
        ]
      }
    },
    {
      "title": "Como deve ficar o subsolo ao terminar",
      "table": {
        "headers": [
          "Setor",
          "Situação ao fim da Etapa 5"
        ],
        "rows": [
          [
            "Recepção frontal",
            "Acesso ao térreo e circulação até ambas as alas"
          ],
          [
            "Ala esquerda",
            "Imbuement Chamber instalada; posições de pedestais de essência apenas reservadas"
          ],
          [
            "Ala direita",
            "Arcane Core, Enchanting Apparatus e 4 Arcane Pedestals funcionando como estação de crafts"
          ],
          [
            "Expansão da ala direita",
            "Mais 4 posições reservadas, sem obrigação de fabricar pedestais adicionais"
          ],
          [
            "Source Jars no subsolo",
            "Locais marcados; instalação e relays opcionais por enquanto"
          ],
          [
            "Jardim arcano",
            "Starbuncle invocado, mas sem vínculos de transporte ou colheita configurados"
          ]
        ]
      },
      "paragraphs": [
        "Próxima etapa: Etapa 6 — automatizar coleta e transporte usando Dominion Wand, baús e o Starbuncle."
      ]
    }
  ],
  "tasks": [
    {
      "id": "criaturas-primeiro-starbuncle-token",
      "title": "Encontrar um Starbuncle e obter seu token",
      "summary": "Encontrar um Starbuncle selvagem e conseguir pelo menos um token usando uma pepita de ouro.",
      "icon": "token",
      "location": "Subsolo -1 e jardim arcano",
      "visualReference": "Starbuncle selvagem (criatura amarela), pepita de ouro, Starbuncle Token.",
      "sections": [
        {
          "title": "Materiais",
          "items": [
            "pelo menos 1 pepita de ouro (levar algumas extras é prudente)."
          ]
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Explore terrenos gramados do Overworld; Archwood Forests são bons lugares para procurar grupos de Starbuncles.",
            "Ao avistar uma criatura amarela pequena, aproxime-se com cuidado: ela costuma fugir do jogador.",
            "Jogue uma Gold Nugget no chão próxima dela e permita que a criatura a recolha.",
            "Após pegar a pepita, o Starbuncle desaparece e deixa Starbuncle Token(s).",
            "Recolha e guarde pelo menos um token. Não confunda o token com o Charm, que ainda será fabricado."
          ]
        }
      ],
      "conclusion": "possuir 1 Starbuncle Token.",
      "sources": [
        {
          "label": "Enchanting Apparatus",
          "url": "https://ars.guide/book/crafting/enchanting_apparatus/"
        },
        {
          "label": "Starbuncle Charm",
          "url": "https://ars.guide/book/crafting/starbuncle_charm/"
        },
        {
          "label": "Magical Crafting",
          "url": "https://ars.guide/book/getting_started/magical_crafting/"
        },
        {
          "label": "Sourcestone",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/sourcestone/"
        },
        {
          "label": "Imbuement Chamber",
          "url": "https://ars.guide/book/crafting/imbuement_chamber/"
        }
      ]
    },
    {
      "id": "criaturas-sourcestone",
      "title": "Produzir 24 Sourcestones",
      "summary": "Transformar pedra e Source Gems em Sourcestone para as máquinas e os pedestais.",
      "icon": "sourcestone",
      "location": "Subsolo -1 e jardim arcano",
      "visualReference": "Source Gem, Stone e Sourcestone.",
      "sections": [
        {
          "title": "Materiais",
          "items": [
            "24 Stone (pedra; fundir pedregulho se necessário).",
            "3 Source Gems."
          ]
        },
        {
          "title": "Sourcestone — 8 unidades por craft",
          "paragraphs": [
            "Bancada: Crafting Table, receita com formato (shaped).",
            "Repetir 3 vezes: 24 Stone + 3 Source Gems → 24 Sourcestone. Se tiver somente Cobblestone, funda-o em fornalha para obter Stone."
          ],
          "recipe": {
            "cells": [
              "Stone",
              "Stone",
              "Stone",
              "Stone",
              "Source Gem",
              "Stone",
              "Stone",
              "Stone",
              "Stone"
            ],
            "output": "Sourcestone",
            "note": "Cada craft produz 8 Sourcestone; repetir 3 vezes para obter 24. Usar Stone, não pedregulho.",
            "quantity": 8
          }
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Separe 24 blocos de Stone. Caso só tenha pedregulho (Cobblestone), transforme-o em Stone na fornalha.",
            "Separe 3 Source Gems produzidas na Imbuement Chamber da Etapa 3.",
            "Em cada crafting, rodeie uma Source Gem com 8 Stone na grade 3×3.",
            "Repita três vezes para obter 24 Sourcestones.",
            "Reserve os blocos para 1 Arcane Core, 1 Enchanting Apparatus e 4 Arcane Pedestals."
          ]
        }
      ],
      "conclusion": "possuir 24 Sourcestone fabricadas ou disponíveis para estes equipamentos.",
      "sources": [
        {
          "label": "Enchanting Apparatus",
          "url": "https://ars.guide/book/crafting/enchanting_apparatus/"
        },
        {
          "label": "Starbuncle Charm",
          "url": "https://ars.guide/book/crafting/starbuncle_charm/"
        },
        {
          "label": "Magical Crafting",
          "url": "https://ars.guide/book/getting_started/magical_crafting/"
        },
        {
          "label": "Sourcestone",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/sourcestone/"
        },
        {
          "label": "Imbuement Chamber",
          "url": "https://ars.guide/book/crafting/imbuement_chamber/"
        }
      ]
    },
    {
      "id": "criaturas-enchanting-apparatus",
      "title": "Montar o Arcane Core e o Enchanting Apparatus",
      "summary": "Construir a estação principal de encantamento na ala direita do subsolo.",
      "icon": "apparatus",
      "location": "Subsolo -1 e jardim arcano",
      "visualReference": "Arcane Core sob Enchanting Apparatus; ala de encantamento da planta 17×17.",
      "sections": [
        {
          "title": "Materiais",
          "items": [
            "6 Sourcestone (Arcane Core).",
            "2 barras de ouro (Arcane Core).",
            "1 Source Gem (Arcane Core).",
            "2 Sourcestone (Enchanting Apparatus).",
            "2 barras de ouro (Enchanting Apparatus).",
            "4 pepitas de ouro (Enchanting Apparatus).",
            "1 diamante (Enchanting Apparatus)."
          ]
        },
        {
          "title": "Arcane Core — 1 unidade",
          "paragraphs": [
            "Bancada: Crafting Table.",
            "Custo: 6 Sourcestone + 2 barras de ouro + 1 Source Gem."
          ],
          "recipe": {
            "cells": [
              "Sourcestone",
              "Sourcestone",
              "Sourcestone",
              "Barra de ouro",
              "Source Gem",
              "Barra de ouro",
              "Sourcestone",
              "Sourcestone",
              "Sourcestone"
            ],
            "output": "Arcane Core",
            "note": "6 Sourcestone, 2 barras de ouro e 1 Source Gem. Crafting Table, posições fixas.",
            "quantity": 1
          }
        },
        {
          "title": "Enchanting Apparatus — 1 unidade",
          "paragraphs": [
            "Bancada: Crafting Table.",
            "Custo: 2 Sourcestone + 2 barras de ouro + 4 pepitas de ouro + 1 diamante."
          ],
          "recipe": {
            "cells": [
              "Pepita de ouro",
              "Sourcestone",
              "Pepita de ouro",
              "Barra de ouro",
              "Diamante",
              "Barra de ouro",
              "Pepita de ouro",
              "Sourcestone",
              "Pepita de ouro"
            ],
            "output": "Enchanting Apparatus",
            "note": "2 Sourcestone, 2 barras de ouro, 4 pepitas de ouro e 1 diamante.",
            "quantity": 1
          }
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Escave ou prepare o subsolo 17×17 seguindo a planta desta etapa, com divisória entre a ala de imbuição e a de encantamento.",
            "Deixe o acesso frontal utilizável e a entrada das duas salas com passagens de 2 blocos de largura.",
            "Na ala esquerda, posicione (ou reposicione) a Imbuement Chamber da Etapa 3 em (3,5). Não é necessário fabricar outra.",
            "Fabrique o Arcane Core seguindo a receita acima e o Enchanting Apparatus seguindo a receita acima.",
            "Na ala direita, instale o Arcane Core abaixo da posição (11,5) e coloque o Enchanting Apparatus diretamente em cima, na posição (11,5) da planta.",
            "Deixe livres os quatro pontos P e os quatro pontos o: não preencha essas posições com paredes ou decoração."
          ]
        },
        {
          "title": "Planta superior de 17×17, bloco a bloco",
          "paragraphs": [
            "Cada caractere representa um bloco na horizontal. Linha 0 = fundo, linha 16 = frente; colunas x=0..16 da esquerda para a direita e linhas z=0..16 de cima para baixo. As letras estão nas posições onde o bloco deve ficar."
          ],
          "code": "    x: 00000000001111111\n       01234567890123456\nz00    #################\nz01    #......#........#\nz02    #......#........#\nz03    #......#...P....#\nz04    #..p...#..o.o...#\nz05    #.pIpJ.#.P.A.PJ.#\nz06    #......#..o.o...#\nz07    #......#...P....#\nz08    #......#........#\nz09    #......#........#\nz10    #......#........#\nz11    ###DD######DD####\nz12    #...............#\nz13    #.B.B.B.........#\nz14    #.......EE......#\nz15    #.......EE......#\nz16    #################\n                   FRENTE / ACESSO"
        },
        {
          "title": "Legenda",
          "table": {
            "headers": [
              "Símbolo",
              "Bloco ou função",
              "Construir nesta etapa?"
            ],
            "rows": [
              [
                "#",
                "Parede de pedra / divisória",
                "Sim, de modo provisório"
              ],
              [
                ".",
                "Piso livre de circulação e acabamento",
                "Sim, piso simples basta"
              ],
              [
                "D",
                "Passagem de dois blocos de largura entre recepção e cada ala",
                "Sim; porta opcional"
              ],
              [
                "E",
                "Reserva para escada, escada de mão ou acesso do térreo",
                "Acesso deve funcionar; tipo livre"
              ],
              [
                "B",
                "Baú de materiais mágicos",
                "Opcional; baús já existentes contam"
              ],
              [
                "I",
                "Imbuement Chamber",
                "Sim, já obtida na Etapa 3"
              ],
              [
                "p",
                "Posição opcional de futuro Arcane Pedestal para essências na imbuição",
                "Não fabricar para este setor agora"
              ],
              [
                "A",
                "Enchanting Apparatus, com Arcane Core diretamente abaixo",
                "Sim"
              ],
              [
                "P",
                "Arcane Pedestal do encantamento",
                "Quatro nesta etapa"
              ],
              [
                "o",
                "Arcane Pedestal adicional, reservado para receitas maiores",
                "Não; expansão futura"
              ],
              [
                "J",
                "Lugar planejado para uma Source Jar",
                "Opcional agora; útil futuramente"
              ]
            ]
          }
        },
        {
          "title": "Coordenadas essenciais",
          "ordered": false,
          "items": [
            "Imbuement Chamber: (3,5).",
            "Enchanting Apparatus: (11,5); Arcane Core na mesma coluna, um bloco abaixo.",
            "Os quatro pedestais iniciais: (11,3), (9,5), (13,5), (11,7).",
            "Quatro pedestais futuros: (10,4), (12,4), (10,6), (12,6).",
            "Source Jar opcional na ala de imbuição: (5,5); outra opcional no encantamento: (14,5).",
            "Passagens de entrada para as alas: (3–4,11) e (11–12,11)."
          ],
          "paragraphs": [
            "Os pedestais iniciais ficam a dois blocos na horizontal do Apparatus; os futuros ficam nas diagonais imediatamente próximas. Todos ficam bem próximos do centro, dentro do alcance de até três blocos informado pelo mod, inclusive usando uma interpretação conservadora de distância. A Imbuement Chamber permanece com posições adjacentes livres para pedestais futuros. Não colocar o Arcane Core na mesma altura do Apparatus: ele deve ficar embaixo, formando uma coluna vertical.",
            "Observação de construção: o desenho representa posições horizontais dos equipamentos, e não a escada vertical inteira. Ajuste o acesso E à escada que já existe na torre, sem mudar as coordenadas das duas máquinas. O quarto livre em frente permite fazer essa ligação sem atravessar as máquinas."
          ]
        }
      ],
      "conclusion": "alas demarcadas e Arcane Core + Enchanting Apparatus instalados corretamente na ala direita.",
      "sources": [
        {
          "label": "Enchanting Apparatus",
          "url": "https://ars.guide/book/crafting/enchanting_apparatus/"
        },
        {
          "label": "Starbuncle Charm",
          "url": "https://ars.guide/book/crafting/starbuncle_charm/"
        },
        {
          "label": "Magical Crafting",
          "url": "https://ars.guide/book/getting_started/magical_crafting/"
        },
        {
          "label": "Sourcestone",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/sourcestone/"
        },
        {
          "label": "Imbuement Chamber",
          "url": "https://ars.guide/book/crafting/imbuement_chamber/"
        }
      ]
    },
    {
      "id": "criaturas-quatro-pedestais",
      "title": "Fabricar e distribuir quatro Arcane Pedestals",
      "summary": "Instalar quatro pedestais cardeais ao redor do Enchanting Apparatus.",
      "icon": "pedestal",
      "location": "Subsolo -1 e jardim arcano",
      "visualReference": "Arcane Pedestal e conjunto com os quatro pedestais ao redor da máquina.",
      "sections": [
        {
          "title": "Materiais",
          "items": [
            "16 Sourcestone.",
            "4 Source Gems.",
            "16 pepitas de ouro."
          ]
        },
        {
          "title": "Arcane Pedestal — 1 unidade por craft",
          "paragraphs": [
            "Bancada: Crafting Table.",
            "Custo unitário: 4 Sourcestone + 1 Source Gem + 4 pepitas de ouro. Para quatro pedestais: 16 Sourcestone + 4 Source Gems + 16 pepitas."
          ],
          "recipe": {
            "cells": [
              "Sourcestone",
              "Source Gem",
              "Sourcestone",
              "Pepita de ouro",
              "Sourcestone",
              "Pepita de ouro",
              "Pepita de ouro",
              "Sourcestone",
              "Pepita de ouro"
            ],
            "output": "Arcane Pedestal",
            "note": "Cada craft produz 1 pedestal. Repetir 4 vezes: 16 Sourcestone, 4 Source Gems e 16 pepitas.",
            "quantity": 1
          }
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Fabrique 4 Arcane Pedestals na Crafting Table (um por craft).",
            "Instale-os nas posições P do desenho: (11,3), (9,5), (13,5) e (11,7).",
            "Confira que os pedestais estão próximos do aparelho e que é possível acessar cada um para colocar itens.",
            "Mantenha as quatro posições o livres para expansão com outros pedestais. Não é necessário fabricá-los agora.",
            "Se desejar, marque um círculo decorativo no chão em torno da estação, sem substituir os blocos funcionais."
          ]
        }
      ],
      "conclusion": "4 Arcane Pedestals instalados e acessíveis, próximos ao Enchanting Apparatus.",
      "sources": [
        {
          "label": "Enchanting Apparatus",
          "url": "https://ars.guide/book/crafting/enchanting_apparatus/"
        },
        {
          "label": "Starbuncle Charm",
          "url": "https://ars.guide/book/crafting/starbuncle_charm/"
        },
        {
          "label": "Magical Crafting",
          "url": "https://ars.guide/book/getting_started/magical_crafting/"
        },
        {
          "label": "Sourcestone",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/sourcestone/"
        },
        {
          "label": "Imbuement Chamber",
          "url": "https://ars.guide/book/crafting/imbuement_chamber/"
        }
      ]
    },
    {
      "id": "criaturas-invocar-starbuncle",
      "title": "Criar o Starbuncle Charm e invocar a criatura",
      "summary": "Converter o Starbuncle Token em Charm e invocar o primeiro ajudante no jardim.",
      "icon": "charm",
      "location": "Subsolo -1 e jardim arcano",
      "visualReference": "Starbuncle Token, Starbuncle Charm e Starbuncle invocado.",
      "sections": [
        {
          "title": "Materiais",
          "items": [
            "1 Starbuncle Token.",
            "4 barras de ouro.",
            "Enchanting Apparatus e 4 Arcane Pedestals já instalados."
          ]
        },
        {
          "title": "Starbuncle Charm — receita de Enchanting Apparatus",
          "paragraphs": [
            "Não é crafting 3×3. Coloque 1 barra de ouro em cada um dos 4 Arcane Pedestals. Em seguida, use o Starbuncle Token no Enchanting Apparatus central.",
            "O Charm invoca a criatura ao ser usado no chão. O Token obtido no mundo é consumido na fabricação."
          ],
          "apparatus": {
            "pedestals": [
              "Barra de ouro",
              "Barra de ouro",
              "Barra de ouro",
              "Barra de ouro"
            ],
            "reagent": "Starbuncle Token",
            "output": "Starbuncle Charm",
            "sourceCost": 0,
            "note": "Colocar uma barra em cada um dos 4 pedestais; usar o Token diretamente no Apparatus. Não é crafting 3×3."
          }
        },
        {
          "title": "Como fazer",
          "ordered": true,
          "items": [
            "Vá até o Enchanting Apparatus no subsolo.",
            "Coloque 1 Gold Ingot em cada um dos quatro Arcane Pedestals ao redor da máquina.",
            "Segure o Starbuncle Token e use-o sobre o Enchanting Apparatus para iniciar o craft.",
            "Recolha o Starbuncle Charm. A receita padrão custa 0 Source.",
            "Leve o Charm até o jardim de Sourceberries da Etapa 4.",
            "Use o Charm no chão, perto da área técnica central reservada, para invocar o Starbuncle.",
            "Não configure os baús e não tente automatizar a coleta ainda: Dominion Wand e vínculos ficam para a Etapa 6."
          ]
        }
      ],
      "conclusion": "possuir um Starbuncle invocado na base, com o Charm já utilizado.",
      "sources": [
        {
          "label": "Enchanting Apparatus",
          "url": "https://ars.guide/book/crafting/enchanting_apparatus/"
        },
        {
          "label": "Starbuncle Charm",
          "url": "https://ars.guide/book/crafting/starbuncle_charm/"
        },
        {
          "label": "Magical Crafting",
          "url": "https://ars.guide/book/getting_started/magical_crafting/"
        },
        {
          "label": "Sourcestone",
          "url": "https://www.minecraft-guides.com/mod/ars-nouveau/wiki/sourcestone/"
        },
        {
          "label": "Imbuement Chamber",
          "url": "https://ars.guide/book/crafting/imbuement_chamber/"
        }
      ]
    }
  ]
}
