import type { Activity } from './types'

export const mageCategories = ["Feitiços","Livros","Armadura","Threads"] as const
export type MageCategory = typeof mageCategories[number]
export type MageActivity = Activity & { category: MageCategory }

export const mageTasks: MageActivity[] = [
  {
    "id": "mago-magelight",
    "title": "Iluminação e visão noturna",
    "summary": "aprender Conjure Magelight e criar os dois modos de uso.",
    "category": "Feitiços",
    "icon": "book",
    "iconItem": "Lantern",
    "sections": [
      {
        "title": "Requer",
        "paragraphs": [
          "Novice Spell Book e Scribe's Table."
        ]
      },
      {
        "title": "Materiais do glifo",
        "paragraphs": [
          "1 lanterna + 1 tocha; o desbloqueio ocorre na Scribe's Table, não na Crafting Table."
        ],
        "scribe": {
          "glyph": "Conjure Magelight",
          "ingredients": [
            "1 Lantern",
            "1 Torch"
          ]
        }
      },
      {
        "title": "Como fazer",
        "paragraphs": [
          "abrir o catálogo de glifos na Scribe's Table com o livro; selecionar Conjure Magelight e fornecer os itens indicados; salvar no livro as magias Projectile → Conjure Magelight (iluminar blocos) e Self → Conjure Magelight (visão noturna temporária)."
        ]
      }
    ],
    "conclusion": "os dois feitiços configurados e testados.",
    "visualReference": "1 lanterna + 1 tocha; o desbloqueio ocorre na Scribe's Table, não na Crafting Table.",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/glyphs_tier_one/light/"
      }
    ]
  },
  {
    "id": "mago-leap",
    "title": "Dash e deslocamento",
    "summary": "desbloquear Leap e usar a magia de impulso.",
    "category": "Feitiços",
    "icon": "book",
    "iconItem": "Air Essence",
    "sections": [
      {
        "title": "Requer",
        "paragraphs": [
          "Novice Spell Book, Scribe's Table e Air Essence."
        ]
      },
      {
        "title": "Materiais do glifo",
        "paragraphs": [
          "1 Air Essence + 3 Wilden Wings."
        ],
        "scribe": {
          "glyph": "Leap",
          "ingredients": [
            "1 Air Essence",
            "3 Wilden Wings"
          ]
        }
      },
      {
        "title": "Como fazer",
        "paragraphs": [
          "desbloquear Leap na Scribe's Table; configurar Self → Leap; testar em terreno aberto. O efeito impulsiona na direção do olhar. Não confundir com teletransporte e não presumir imunidade a queda."
        ]
      }
    ],
    "conclusion": "feitiço de mobilidade funcional.",
    "visualReference": "1 Air Essence + 3 Wilden Wings.",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/glyphs_tier_one/leap/"
      }
    ]
  },
  {
    "id": "mago-bounce",
    "title": "Proteção provisória contra quedas",
    "summary": "obter Bounce antes de desbloquear Slowfall.",
    "category": "Feitiços",
    "icon": "book",
    "iconItem": "Abjuration Essence",
    "sections": [
      {
        "title": "Materiais do glifo",
        "paragraphs": [
          "1 Abjuration Essence + 3 Slimeballs (ou alternativas equivalentes, caso a receita do modpack aceite)."
        ],
        "scribe": {
          "glyph": "Bounce",
          "ingredients": [
            "1 Abjuration Essence",
            "3 Slimeballs"
          ]
        }
      },
      {
        "title": "Como fazer",
        "paragraphs": [
          "desbloquear Bounce e configurar Self → Bounce. Esse glifo faz o personagem quicar quando cai; não é o mesmo efeito de Slow Falling. Testar com cautela e não assumir que substitui Feather Falling de botas em toda situação."
        ]
      }
    ],
    "conclusion": "Bounce disponível e testado.",
    "visualReference": "1 Abjuration Essence + 3 Slimeballs (ou alternativas equivalentes, caso a receita do modpack aceite).",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/glyphs_tier_one/bounce/"
      }
    ]
  },
  {
    "id": "mago-slowfall",
    "title": "Queda lenta definitiva",
    "summary": "desbloquear Slowfall (Tier 2).",
    "category": "Feitiços",
    "icon": "book",
    "iconItem": "Feather",
    "sections": [
      {
        "title": "Requer",
        "paragraphs": [
          "Mage's Spell Book."
        ]
      },
      {
        "title": "Materiais do glifo",
        "paragraphs": [
          "1 Air Essence + 1 Wilden Wing + 3 penas + 1 Blaze Rod + 1 Nether Wart."
        ],
        "scribe": {
          "glyph": "Slowfall",
          "ingredients": [
            "1 Air Essence",
            "1 Wilden Wing",
            "3 Feathers",
            "1 Blaze Rod",
            "1 Nether Wart"
          ]
        }
      },
      {
        "title": "Como fazer",
        "paragraphs": [
          "desbloquear o glifo na Scribe's Table, criar Self → Slowfall e testar uma queda controlada. Pode continuar usando Bounce como alternativa."
        ]
      }
    ],
    "conclusion": "Slowfall equipado e testado.",
    "visualReference": "1 Air Essence + 1 Wilden Wing + 3 penas + 1 Blaze Rod + 1 Nether Wart.",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/glyphs_tier_two/slowfall/"
      }
    ]
  },
  {
    "id": "mago-heal",
    "title": "Cura em exploração",
    "summary": "preparar uma magia de recuperação (Tier 2).",
    "category": "Feitiços",
    "icon": "book",
    "iconItem": "Golden Apple",
    "sections": [
      {
        "title": "Requer",
        "paragraphs": [
          "Mage's Spell Book."
        ]
      },
      {
        "title": "Materiais do glifo",
        "paragraphs": [
          "1 Abjuration Essence + 4 Glistering Melon Slices + 1 Golden Apple."
        ],
        "scribe": {
          "glyph": "Heal",
          "ingredients": [
            "1 Abjuration Essence",
            "4 Glistering Melon Slices",
            "1 Golden Apple"
          ]
        }
      },
      {
        "title": "Como fazer",
        "paragraphs": [
          "aprender Heal na Scribe's Table e salvar Self → Heal. A magia recupera vida e consome fome do conjurador; levar comida para longas expedições."
        ]
      }
    ],
    "conclusion": "feitiço de cura configurado.",
    "visualReference": "1 Abjuration Essence + 4 Glistering Melon Slices + 1 Golden Apple.",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/glyphs_tier_two/heal/"
      }
    ]
  },
  {
    "id": "mago-grimorio-exploracao",
    "title": "Grimório de exploração",
    "summary": "organizar atalhos úteis no livro de feitiços.",
    "category": "Feitiços",
    "icon": "book",
    "sections": [
      {
        "title": "Materiais",
        "paragraphs": [
          "nenhum adicional obrigatório para a organização; usar os glifos já conhecidos."
        ]
      },
      {
        "title": "Como fazer",
        "paragraphs": [
          "abrir a edição de feitiços do Spell Book (tecla padrão C, ajustável nas configurações) e salvar combinações diferentes para luz, visão noturna, Leap, segurança contra quedas, quebrar blocos (Touch → Break) e, após desbloquear, cura. O livro permite até dez feitiços salvos. Não exigir que todos sejam obtidos antes das tarefas intermediárias."
        ]
      }
    ],
    "conclusion": "pelo menos quatro perfis de feitiço úteis organizados e utilizáveis.",
    "visualReference": "nenhum adicional obrigatório para a organização; usar os glifos já conhecidos.",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/getting_started/introduction_to_spellcrafting/"
      }
    ]
  },
  {
    "id": "mago-livro-novice",
    "title": "Novice Spell Book",
    "summary": "possuir o livro inicial (pode ser marcado caso já tenha sido concluído na Etapa 3 da torre).",
    "category": "Livros",
    "icon": "book",
    "sections": [
      {
        "title": "Crafting — Novice Spell Book",
        "recipe": {
          "cells": [
            "Book",
            "Iron Sword",
            "Iron Pickaxe",
            "Iron Axe",
            "Iron Shovel",
            "Vazio",
            "Vazio",
            "Vazio",
            "Vazio"
          ],
          "output": "Novice Spell Book",
          "note": "Um livro e uma ferramenta de ferro de cada tipo. A ordem dos cinco ingredientes é livre.",
          "quantity": 1,
          "shapeless": true
        }
      },
      {
        "title": "Como fazer",
        "paragraphs": [
          "combinar os cinco itens na Crafting Table e abrir o livro. Ele habilita glifos Tier 1."
        ]
      }
    ],
    "conclusion": "Novice Spell Book funcional.",
    "visualReference": "Itens e estações descritos nas instruções fornecidas.",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/spell_casting/spell_books/"
      }
    ]
  },
  {
    "id": "mago-livro-mage",
    "title": "Mage's Spell Book",
    "summary": "aprimorar o livro para acessar Tier 2.",
    "category": "Livros",
    "icon": "book",
    "sections": [
      {
        "title": "Crafting — Mage's Spell Book",
        "recipe": {
          "cells": [
            "Novice Spell Book",
            "Obsidian",
            "Diamond",
            "Diamond",
            "Diamond",
            "Quartz Block",
            "Quartz Block",
            "Blaze Rod",
            "Blaze Rod"
          ],
          "output": "Mage's Spell Book",
          "note": "Use o Novice Spell Book como base. O exemplo mostra Obsidian; Crying Obsidian só se essa alternativa aparecer no JEI/EMI do seu modpack. Os nove ingredientes podem ser organizados livremente.",
          "quantity": 1,
          "shapeless": true
        }
      },
      {
        "title": "Como fazer",
        "paragraphs": [
          "reunir os ingredientes e efetuar a combinação na Crafting Table. O livro melhorado preserva os glifos aprendidos."
        ]
      }
    ],
    "conclusion": "Mage's Spell Book obtido.",
    "visualReference": "Itens e estações descritos nas instruções fornecidas.",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/spell_casting/spell_books/"
      }
    ]
  },
  {
    "id": "mago-livro-archmage",
    "title": "Archmage Spell Book",
    "summary": "obter o livro Tier 3, objetivo de longo prazo.",
    "category": "Livros",
    "icon": "book",
    "sections": [
      {
        "title": "Crafting — Archmage Spell Book",
        "recipe": {
          "cells": [
            "Mage's Spell Book",
            "Ender Pearl",
            "Ender Pearl",
            "Ender Pearl",
            "Emerald",
            "Emerald",
            "Totem of Undying",
            "Nether Star",
            "Wilden Tribute"
          ],
          "output": "Archmage Spell Book",
          "note": "Use o Mage's Spell Book como base. Cada uma das três Ender Pearls e das duas Emeralds ocupa um espaço separado.",
          "quantity": 1,
          "shapeless": true
        }
      },
      {
        "title": "Como fazer",
        "paragraphs": [
          "reunir os materiais avançados, incluindo Wilden Tribute, e fabricar o livro. Os glifos anteriores permanecem disponíveis."
        ]
      }
    ],
    "conclusion": "Archmage Spell Book obtido.",
    "visualReference": "Itens e estações descritos nas instruções fornecidas.",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/spell_casting/spell_books/"
      }
    ]
  },
  {
    "id": "mago-magebloom",
    "title": "Preparar Magebloom e fibras",
    "summary": "iniciar a produção de Magebloom Fiber para equipamentos mágicos.",
    "category": "Armadura",
    "icon": "blocks",
    "iconItem": "Magebloom Fiber",
    "sections": [
      {
        "title": "Requer",
        "paragraphs": [
          "Enchanting Apparatus, Arcane Core e pedestais (construídos na Etapa 5 da torre)."
        ]
      },
      {
        "title": "Receita no Enchanting Apparatus",
        "apparatus": {
          "reagent": "semente comum compatível",
          "pedestals": [
            "Source Gem",
            "Source Gem",
            "Source Gem",
            "Source Gem"
          ],
          "output": "Magebloom Seeds",
          "note": "1 semente comum compatível como item central + 4 Source Gems nos pedestais → Magebloom Seeds.",
          "sourceCost": 0
        }
      },
      {
        "title": "Como fazer",
        "paragraphs": [
          "produzir Magebloom Seeds, plantar em área cultivável e colher Magebloom. Cada Magebloom pode ser convertido em 4 Magebloom Fibers no crafting sem forma. Reservar 16 fibras para o conjunto Battlemage e novas fibras para a Alteration Table e Threads."
        ]
      },
      {
        "title": "Crafting — Magebloom Fiber",
        "recipe": {
          "cells": [
            "Magebloom",
            "Vazio",
            "Vazio",
            "Vazio",
            "Vazio",
            "Vazio",
            "Vazio",
            "Vazio",
            "Vazio"
          ],
          "output": "Magebloom Fiber",
          "note": "Uma Magebloom produz quatro fibras. Guarde fibras para armadura, Alteration Table e Threads.",
          "quantity": 4,
          "shapeless": true
        }
      }
    ],
    "conclusion": "plantação de Magebloom funcionando e pelo menos 16 fibras disponíveis ou já aplicadas no conjunto.",
    "visualReference": "Enchanting Apparatus, Arcane Core e pedestais (construídos na Etapa 5 da torre).",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/field_guide/magebloom_crop/"
      }
    ]
  },
  {
    "id": "mago-armadura-battlemage",
    "title": "Conjunto completo Battlemage",
    "summary": "transformar um conjunto completo de diamante na armadura Battlemage.",
    "category": "Armadura",
    "icon": "blocks",
    "iconItem": "Diamond Chestplate",
    "sections": [
      {
        "title": "Materiais",
        "paragraphs": [
          "24 Diamonds convertidos em Diamond Helmet, Diamond Chestplate, Diamond Leggings e Diamond Boots; 16 Magebloom Fibers (4 por peça)."
        ]
      },
      {
        "title": "Receita, repetida quatro vezes no Enchanting Apparatus",
        "apparatus": {
          "reagent": "Peça de armadura de diamante",
          "pedestals": [
            "Magebloom Fiber",
            "Magebloom Fiber",
            "Magebloom Fiber",
            "Magebloom Fiber"
          ],
          "output": "Peça Battlemage correspondente",
          "note": "peça de diamante no centro, 4 Magebloom Fibers nos pedestais → peça Battlemage correspondente. Este craft não é uma grade 3×3.",
          "sourceCost": 0
        }
      },
      {
        "title": "Como fazer",
        "paragraphs": [
          "fabricar as quatro peças de diamante, transformá-las individualmente no Apparatus e equipar o conjunto. A Battlemage prioriza defesa física em detrimento de slots de Thread mais potentes."
        ]
      }
    ],
    "conclusion": "quatro peças Battlemage equipáveis.",
    "visualReference": "24 Diamonds convertidos em Diamond Helmet, Diamond Chestplate, Diamond Leggings e Diamond Boots; 16 Magebloom Fibers (4 por peça).",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/armor/armor/"
      }
    ]
  },
  {
    "id": "mago-alteration-table",
    "title": "Construir a Alteration Table",
    "summary": "montar a estação para equipar e remover Threads.",
    "category": "Armadura",
    "icon": "blocks",
    "sections": [
      {
        "title": "Local na torre",
        "paragraphs": [
          "segundo andar, na biblioteca; não repetir a construção do Enchanting Apparatus."
        ]
      },
      {
        "title": "Crafting Table",
        "recipe": {
          "cells": [
            "Vazio",
            "Magebloom Fiber",
            "Vazio",
            "Magebloom Fiber",
            "Scribe's Table",
            "Magebloom Fiber",
            "Vazio",
            "Magebloom Fiber",
            "Vazio"
          ],
          "output": "Alteration Table",
          "note": "1 Scribe's Table no centro e 4 Magebloom Fibers nos quatro lados cardeais (acima, abaixo, esquerda, direita). Se a Scribe's Table existente não puder ser removida da biblioteca, fabricar outra exclusivamente para a receita."
        }
      },
      {
        "title": "Como fazer",
        "paragraphs": [
          "construir a Alteration Table, instalá-la e interagir com uma peça de armadura mágica para visualizar os espaços de Thread."
        ]
      }
    ],
    "conclusion": "bancada instalada e acessível.",
    "visualReference": "Itens e estações descritos nas instruções fornecidas.",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/armor/alteration_table/"
      }
    ]
  },
  {
    "id": "mago-armadura-tier-2",
    "title": "Aprimorar o conjunto Battlemage para Tier 2",
    "summary": "elevar o conjunto para o segundo tier no Enchanting Apparatus.",
    "category": "Armadura",
    "icon": "blocks",
    "iconItem": "Diamond Chestplate",
    "sections": [
      {
        "title": "Aprimoramento para Tier 2",
        "apparatus": {
          "reagent": "Peça Battlemage Tier 1",
          "output": "Mesma peça Battlemage Tier 2",
          "pedestals": [
            "Blaze Rod",
            "Blaze Rod"
          ],
          "sourceCost": 2500,
          "note": "Aprimore uma peça por operação. Repita para capacete, peitoral, calças e botas. Receita padrão do Ars Nouveau 4.12.7; se o modpack a alterar, confira o JEI/EMI."
        }
      },
      {
        "title": "Como fazer",
        "paragraphs": [
          "Coloque uma peça Tier 1 no aparelho central e um ingrediente em cada pedestal indicado. Forneça 2.500 Source e recolha a mesma peça no Tier 2. Repita para completar as quatro peças."
        ]
      }
    ],
    "conclusion": "quatro peças no Tier 2.",
    "visualReference": "Armadura Battlemage Tier 1 → Tier 2, no Enchanting Apparatus.",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/armor/armor_upgrading/"
      }
    ]
  },
  {
    "id": "mago-armadura-tier-3",
    "title": "Aprimorar o conjunto Battlemage para Tier 3",
    "summary": "alcançar o tier final da armadura.",
    "category": "Armadura",
    "icon": "blocks",
    "iconItem": "Diamond Chestplate",
    "sections": [
      {
        "title": "Aprimoramento para Tier 3",
        "apparatus": {
          "reagent": "Peça Battlemage Tier 2",
          "output": "Mesma peça Battlemage Tier 3",
          "pedestals": [
            "Ender Pearl",
            "Ender Pearl",
            "Chorus Fruit"
          ],
          "sourceCost": 5000,
          "note": "Aprimore uma peça por operação. Repita para capacete, peitoral, calças e botas. Receita padrão do Ars Nouveau 4.12.7; se o modpack a alterar, confira o JEI/EMI."
        }
      },
      {
        "title": "Como fazer",
        "paragraphs": [
          "Coloque uma peça Tier 2 no aparelho central e um ingrediente em cada pedestal indicado. Forneça 5.000 Source e recolha a mesma peça no Tier 3. Repita para completar as quatro peças."
        ]
      }
    ],
    "conclusion": "quatro peças Battlemage Tier 3.",
    "visualReference": "Armadura Battlemage Tier 2 → Tier 3, no Enchanting Apparatus.",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/armor/armor_upgrading/"
      }
    ]
  },
  {
    "id": "mago-thread-branca",
    "title": "Fabricar Blank Thread",
    "summary": "produzir a base dos aprimoramentos de armadura.",
    "category": "Threads",
    "icon": "table",
    "iconItem": "Blank Thread",
    "sections": [
      {
        "title": "Crafting Table, grade 3×3",
        "recipe": {
          "cells": [
            "Magebloom Fiber",
            "Magebloom Fiber",
            "Magebloom Fiber",
            "Gold Nugget",
            "Gold Nugget",
            "Gold Nugget",
            "Magebloom Fiber",
            "Magebloom Fiber",
            "Magebloom Fiber"
          ],
          "output": "Blank Thread",
          "note": "F = Magebloom Fiber (6 unidades); G = Gold Nugget (3 unidades)."
        }
      },
      {
        "title": "Como fazer",
        "paragraphs": [
          "fabricar um Blank Thread e reservá-lo para o Enchanting Apparatus."
        ]
      }
    ],
    "conclusion": "ao menos 1 Blank Thread fabricada.",
    "visualReference": "Itens e estações descritos nas instruções fornecidas.",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/armor/alteration_table/"
      }
    ]
  },
  {
    "id": "mago-thread-capacidade",
    "title": "Fabricar Thread: Magic Capacity",
    "summary": "adquirir um aprimoramento útil para aumentar a mana máxima.",
    "category": "Threads",
    "icon": "table",
    "iconItem": "Magic Capacity Thread",
    "sections": [
      {
        "title": "Receita no Enchanting Apparatus",
        "apparatus": {
          "reagent": "Blank Thread",
          "pedestals": [
            "Sourceberry Bush",
            "Sourceberry Bush",
            "Sourceberry Bush",
            "Magebloom",
            "Magebloom",
            "Magebloom"
          ],
          "output": "Magic Capacity Thread",
          "note": "Blank Thread no centro; 3 Sourceberry Bushes e 3 Mageblooms, um por pedestal. A receita local do Ars Nouveau 4.12.7 usa o arbusto (ars_nouveau:sourceberry_bush); confirme no JEI/EMI se o modpack alterar o ingrediente.",
          "sourceCost": 0
        }
      },
      {
        "title": "Efeito",
        "paragraphs": [
          "aumenta mana máxima em 10% por nível de slot."
        ]
      }
    ],
    "conclusion": "Magic Capacity Thread fabricada.",
    "visualReference": "Itens e estações descritos nas instruções fornecidas.",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/armor/thread_magic_capacity/"
      }
    ]
  },
  {
    "id": "mago-thread-aplicada",
    "title": "Aplicar uma Thread à armadura",
    "summary": "personalizar uma peça de armadura mágica.",
    "category": "Threads",
    "icon": "table",
    "iconItem": "Blank Thread",
    "sections": [
      {
        "title": "Como fazer",
        "paragraphs": [
          "colocar uma peça Battlemage na Alteration Table; examinar os slots; aplicar uma Thread compatível ao display da mesa; retirar a armadura para consolidar o aprimoramento. Para remover, recolocar e interagir com o slot usando a mão vazia."
        ]
      },
      {
        "title": "Importante",
        "paragraphs": [
          "as Threads não se acumulam repetidamente em peças diferentes do conjunto para multiplicar o mesmo efeito. O nível de slot influencia a intensidade."
        ]
      }
    ],
    "conclusion": "pelo menos uma Thread ativa na armadura.",
    "visualReference": "Itens e estações descritos nas instruções fornecidas.",
    "sources": [
      {
        "label": "Guia fornecido no roteiro",
        "url": "https://ars.guide/book/armor/alteration_table/"
      }
    ]
  }
]

export const essences = [
  {
    "name": "Air Essence",
    "reagent": "1 Source Gem",
    "catalysts": [
      "1 Feather",
      "1 Wilden Wing",
      "1 Arrow (seta comum; variações aceitas conforme receita)"
    ],
    "source": "2.000",
    "uses": [
      "Leap",
      "Slowfall",
      "Thread: Heights"
    ]
  },
  {
    "name": "Fire Essence",
    "reagent": "1 Source Gem",
    "catalysts": [
      "1 Flint and Steel",
      "1 Torch",
      "1 Gunpowder"
    ],
    "source": "2.000",
    "uses": []
  },
  {
    "name": "Water Essence",
    "reagent": "1 Source Gem",
    "catalysts": [
      "1 Water Bucket",
      "1 Snow Block",
      "1 Kelp"
    ],
    "source": "2.000",
    "uses": []
  },
  {
    "name": "Earth Essence",
    "reagent": "1 Source Gem",
    "catalysts": [
      "1 Iron Ingot",
      "1 semente compatível (ex.: Wheat Seeds)",
      "1 bloco de terra compatível (ex.: Dirt)"
    ],
    "source": "2.000",
    "uses": []
  },
  {
    "name": "Abjuration Essence",
    "reagent": "1 Source Gem",
    "catalysts": [
      "1 Fermented Spider Eye",
      "1 Sugar",
      "1 Milk Bucket"
    ],
    "source": "2.000",
    "uses": [
      "Bounce",
      "Heal",
      "Thread: Feather"
    ]
  },
  {
    "name": "Conjuration Essence",
    "reagent": "1 Source Gem",
    "catalysts": [
      "1 Wilden Horn",
      "1 Starbuncle Token",
      "1 Book"
    ],
    "source": "2.000",
    "uses": []
  },
  {
    "name": "Manipulation Essence",
    "reagent": "1 Source Gem",
    "catalysts": [
      "1 Stone Button",
      "1 Redstone Dust",
      "1 Clock"
    ],
    "source": "2.000",
    "uses": [
      "Thread: Repairing",
      "Tablet of Containment · Drygmy"
    ]
  }
]
export const essenceSteps = [
  "Construir Imbuement Chamber no laboratório do subsolo (já previsto na Etapa 3 da torre).",
  "Para uma essência, colocar 1 Source Gem como ingrediente transformado na câmara.",
  "Posicionar 3 Arcane Pedestals próximos/adjacentes à câmara, a até um bloco, cada um com o material indicado para a essência.",
  "Fornecer 2.000 Source por operação (a máquina pode retirar energia das Source Jars próximas, dentro de dois blocos). A gema é transformada; os materiais nos pedestais funcionam como catalisadores e não são consumidos.",
  "Esperar a conclusão e recolher a essência."
]
export const essenceReminder = "uma Source Gem simples é produzida na Imbuement Chamber com 1 Lapis Lazuli ou 1 Amethyst Shard, consumindo 500 Source."
export const magicStations = {
  "headers": [
    "Estação",
    "Uso principal",
    "Local planejado",
    "Disponibilidade na progressão da torre"
  ],
  "rows": [
    [
      "Crafting Table",
      "Livros e crafts comuns",
      "Térreo",
      "Etapa 2"
    ],
    [
      "Scribe's Table",
      "Aprender glifos",
      "Biblioteca, 2º andar",
      "Etapa 3"
    ],
    [
      "Imbuement Chamber",
      "Source Gems e essências",
      "Subsolo, ala esquerda",
      "Etapa 3"
    ],
    [
      "Arcane Pedestals",
      "Catalisadores e ingredientes",
      "Subsolo",
      "Etapa 5"
    ],
    [
      "Arcane Core + Enchanting Apparatus",
      "Charms, Magebloom, armaduras e Threads",
      "Subsolo, ala direita",
      "Etapa 5"
    ],
    [
      "Alteration Table",
      "Aplicar ou remover Threads",
      "Biblioteca, 2º andar",
      "Progressão do Mago (C3)"
    ],
    [
      "Ritual Brazier",
      "Rituais",
      "Observatório, 4º andar",
      "Reservado; não obrigatório nesta trilha"
    ]
  ]
}
export const threadReference = {
  "headers": [
    "Thread",
    "Efeito",
    "Receita no Enchanting Apparatus, além de Blank Thread"
  ],
  "rows": [
    [
      "Feather",
      "Reduz dano de queda; complementa Feather Falling",
      "4 penas + 2 Abjuration Essences"
    ],
    [
      "Heights",
      "Aumenta salto e margem de queda",
      "1 Spider Eye + 3 Rabbit Hides + 2 Air Essences"
    ],
    [
      "Repairing",
      "Usa mana para reparar armadura mágica e equipamentos compatíveis",
      "1 Anvil + 2 Manipulation Essences"
    ],
    [
      "Magic Capacity",
      "Aumenta a mana máxima",
      "3 Sourceberries + 3 Mageblooms"
    ]
  ]
}
export const magePracticalOrder = "Começar por Novice, Magelight e magias simples; depois buscar Leap, Mage's Book e Slowfall. Quando o Enchanting Apparatus estiver pronto, cultivar Magebloom e produzir a Battlemage. Alteration Table, Threads e upgrades avançados podem acontecer paralelamente. Archmage Spell Book fica para o final por exigir itens difíceis."
