# Ars Nouveau Progress Tracker

Site local para acompanhar a progressão no Ars Nouveau (Minecraft 1.20.1), inspirado na referência visual fornecida. React + TypeScript + Vite + CSS puro, Motion para transições, Pixelarticons e fontes locais Fontsource. O tema atual é um grimório em uma oficina arcana, com animações respeitando movimento reduzido.

Dados em `src/data/stages.ts`, tipos em `src/data/types.ts`; `coleta.ts`, `torre.ts` e `equipamentos.ts` contêm o conteúdo estático fornecido nos três guias. Componentes em `src/components/`. `ItemIcon.tsx` associa os nomes das receitas a ícones locais, preservando nomes e posições; equipamentos 3D usam SVGs ilustrativos. As texturas de ingredientes em `public/images/items/` foram copiadas dos arquivos locais Minecraft 1.20.1 (Mojang) e Ars Nouveau 4.12.7 (autores do mod). `arcane-workshop.png` e `beatriz-mage.png` são artes geradas pelo ImageGen; Beatriz usa a referência visual do autor, por solicitação dele. Não há backend nem ingestão de Markdown.

O progresso guarda somente IDs estáveis concluídos em `localStorage`, chave `ars-nouveau-tracker:v1`. O filtro afeta apenas a exibição. Use sempre o mesmo navegador, perfil e `http://127.0.0.1:5173/`; a porta é fixa com `strictPort`. A expansão fica na sessão e permanece ao alternar abas. Há um atalho para abrir a próxima atividade pendente e um botão de conclusão ao final das instruções. Os dados do navegador não são enviados ao GitHub.

Executar: `npm install` (primeira vez), `npm run dev`. Build opcional: `npm run build`; prévia do build: `npm run preview` (pare antes o dev, pois ambos usam 5173).

As etapas 1–3 incluem as 15 atividades dos guias fornecidos (5 + 6 + 4), preservando IDs, materiais, instruções, receitas e suas posições. As etapas 4–8 ainda não receberam conteúdo real e mantêm uma demonstração cada. O total de 20 inclui essas cinco demonstrações, identificado na interface. Não pesquisar mecânicas, alterar receitas, adicionar backend ou ferramentas auxiliares. Repo privado `https://github.com/ArthurFreddo/ars-nouveau-tracker`; branch `main`.
