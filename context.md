# Ars Nouveau Progress Tracker

Site local para acompanhar a progressão no Ars Nouveau (Minecraft 1.20.1), inspirado na referência visual fornecida. React + TypeScript + Vite + CSS puro, Pixelarticons e fontes locais Fontsource.

Dados em `src/data/stages.ts`, tipos em `src/data/types.ts`; componentes simples em `src/components/`. Ícones SVG ilustrativos locais em `public/images/`, sem texturas de terceiros. Não há backend nem ingestão de Markdown.

O progresso guarda somente IDs estáveis concluídos em `localStorage`, chave `ars-nouveau-tracker:v1`. O filtro afeta apenas a exibição. Use sempre o mesmo navegador, perfil e `http://127.0.0.1:5173/`; a porta é fixa com `strictPort`. A expansão fica na sessão. Os dados do navegador não são enviados ao GitHub.

Executar: `npm install` (primeira vez), `npm run dev`. Build opcional: `npm run build`; prévia do build: `npm run preview` (pare antes o dev, pois ambos usam 5173).

Esta base contém demonstrações nas oito etapas; o conteúdo verdadeiro ainda não foi incorporado. A solicitação já autoriza incorporar em seguida os três guias fornecidos (Coleta, Torre e Equipamentos), preservando IDs e receitas. Etapas 4–8 continuarão provisórias. Não pesquisar mecânicas, alterar receitas, adicionar backend ou ferramentas auxiliares. Repo privado na conta pessoal autenticada; branch `main`.
