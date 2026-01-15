---
status: accepted
date: 2026-01-15
deciders: [rafhael, antigravity]
consulted: []
informed: []
---

# Adoção de unplugin-icons

## Contexto e Problema
O projeto utilizava componentes `.astro` individuais contendo SVGs inline ou arquivos `.svg` brutos para ícones. Isso gerava:
1.  **Manutenção manual**: Necessidade de copiar/colar SVGs para cada novo ícone.
2.  **Inconsistência**: Diferentes fontes e estilos de ícones.
3.  **Boilerplate**: Criação de múltiplos arquivos para funcionalidade simples.
4.  **Performance**: Carregamento de SVGs não otimizados.

## Decisão
Adotamos a biblioteca **`unplugin-icons`** em conjunto com os datasets do **Iconify** (especificamente `lucide` e `fa-brands`).

## Justificativa (Por que unplugin-icons?)
1.  **On-demand**: O compilador gera apenas os ícones que estão sendo usados no projeto.
2.  **Zero Runtime**: Os ícones são compilados como componentes funcionais no build, sem overhead de client-side JS extra para fetch.
3.  **Agnóstico**: Funciona bem com Astro (via integração Vite).
4.  **Padronização**: Acesso a bibliotecas padrão da indústria (Lucide, FontAwesome, Material) com uma única sintaxe.
5.  **Flexibilidade**: Suporta `currentColor` e props de classe CSS nativamente.

## Vantagens
- **DX (Developer Experience)**: Importar ícones é trivial (`import Icon from '~icons/set/name'`) sem criar arquivos.
- **Limpeza**: Remoção da pasta `src/icons` e `src/assets/icons` cheia de arquivos avulsos.
- **Bundle Size**: Tree-shaking automático garantido pelo plugin.

## Desafios e Resoluções
- **Configuração no Astro**: Houve um conflito inicial com o compilador Astro (`panic: html: bad parser state`), que foi resolvido garantindo a estrutura correta dos componentes `.astro` (adicionando fences `---` faltantes que causavam o erro de parseamento ao injetar o plugin).
- **TypeScript**: Necessário adicionar `/// <reference types="unplugin-icons/types/astro" />` no `env.d.ts` para o VS Code reconhecer os imports virtuais.

## Consequências
- A partir de agora, novos ícones devem ser importados diretamente via `~icons/...`.
- Não devemos criar componentes `.astro` para wrappers de ícones simples, a menos que haja lógica de negócio atrelada.
