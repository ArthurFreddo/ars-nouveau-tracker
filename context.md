# Ars Nouveau Progress Tracker

Site local para acompanhar a progressão no Ars Nouveau (Minecraft 1.20.1), inspirado na referência visual fornecida. React + TypeScript + Vite + CSS puro, Pixelarticons e fontes locais Fontsource.

Dados em `src/data/stages.ts`, tipos em `src/data/types.ts`; `coleta.ts`, `torre.ts` e `equipamentos.ts` contêm o conteúdo estático fornecido nos três guias. Componentes simples em `src/components/`. Ícones SVG ilustrativos locais em `public/images/`, sem texturas de terceiros. Não há backend nem ingestão de Markdown.

O progresso guarda somente IDs estáveis concluídos em `localStorage`, chave `ars-nouveau-tracker:v1`. O filtro afeta apenas a exibição. Use sempre o mesmo navegador, perfil e `http://127.0.0.1:5173/`; a porta é fixa com `strictPort`. A expansão fica na sessão. Os dados do navegador não são enviados ao GitHub.

Executar: `npm install` (primeira vez), `npm run dev`. Build opcional: `npm run build`; prévia do build: `npm run preview` (pare antes o dev, pois ambos usam 5173).

As etapas 1–3 já incluem as 15 atividades dos guias fornecidos (5 + 6 + 4), preservando IDs, materiais, instruções, receitas e suas posições. As etapas 4–8 ainda não receberam conteúdo real e mantêm uma demonstração cada. O total de 20 inclui essas cinco demonstrações, identificado na interface. Referências visuais reais aguardam assets; os ícones são ilustrativos. Não pesquisar mecânicas, alterar receitas, adicionar backend ou ferramentas auxiliares. Repo privado `https://github.com/ArthurFreddo/ars-nouveau-tracker`; branch `main`.
