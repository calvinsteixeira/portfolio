# Regras de desenvolvimento

## Objetivo

Este projeto é um portfólio construído com Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Zustand e Lucide React. Priorize código simples, legível, seguro, acessível e fácil de manter. Evite abstrações e dependências sem necessidade real (overengineering).

As regras deste arquivo orientam agentes de IA e pessoas que contribuem para o projeto. Em caso de conflito, siga as decisões mais específicas do diretório ou a instrução explícita da tarefa atual.

## Fluxo de trabalho

- Trabalhe sempre em uma branch com prefixo permitido: `feat/`, `fix/`, `chore/`, `docs/`, `refactor/`, `test/`, `ci/`, `build/`, `perf/` ou `hotfix/`.
- Não faça alterações diretamente na `main`; use Pull Requests.
- Antes de concluir, execute `pnpm lint`, `pnpm typecheck` e `pnpm build`.
- Mensagens de commit devem ser escritas em português, ser objetivas e usar um prefixo convencional, por exemplo: `feat: adicionar seção de projetos` ou `fix: corrigir foco do menu`.
- Não inclua segredos, tokens ou dados pessoais no código, nos logs ou nos commits.

## Estrutura de componentes

- Use componentes funcionais tipados com TypeScript.
- Adote composição em vez de herança. Para componentes complexos, prefira componentes compostos, `children`, slots e componentes especializados que possam ser combinados.
- Mantenha cada componente com responsabilidade única e organize o código por funcionalidade/domínio.
- Cada componente ou tela deve ter sempre estes três arquivos próximos entre si:
  - `nome-do-componente.tsx`: implementação do componente;
  - `nome-do-componente.style.css`: estilos específicos do componente;
  - `nome-do-componente.test.tsx`: testes unitários.
- Componentes puramente visuais e sem regra própria também devem manter a estrutura de estilo e teste; o teste pode documentar a renderização e os estados essenciais.
- Use nomes de arquivos em `kebab-case`. Prefira exports nomeados; use export default apenas quando for o componente principal de uma página ou módulo.
- Componentes de shadcn/ui devem ser adicionados a partir do registry e então customizados localmente. Não instale shadcn/ui como uma biblioteca monolítica.

## React e hooks

- Use hooks apenas no topo de componentes ou hooks customizados; nunca em condições, loops ou funções aninhadas.
- Extraia lógica reutilizável para hooks customizados com nomes `use...` e responsabilidades claras.
- Declare dependências completas em `useEffect`, `useMemo` e `useCallback`. Não use esses hooks por padrão: aplique memoização apenas quando reduzir trabalho mensurável ou estabilizar uma referência necessária.
- Prefira derivar valores durante a renderização a duplicá-los em estado. Use `useState` para estado local e `useReducer` quando houver transições relacionadas ou complexas.
- Evite efeitos para sincronizar estado derivado, manipular dados que poderiam ser calculados diretamente ou executar lógica de negócio.
- Use Zustand para estado global de cliente, com slices por domínio e seletores focados para evitar renderizações desnecessárias. Não coloque estado local ou dados sensíveis globalmente sem necessidade.
- Em componentes de servidor do Next.js, não use hooks de cliente sem a diretiva `"use client"`; mantenha o máximo possível da árvore como Server Components.

## Performance e UX

- Mantenha a renderização no servidor quando possível e carregue componentes pesados sob demanda.
- Use `next/image` para imagens e defina dimensões, prioridade e texto alternativo adequados.
- Evite listas sem chave estável, renders redundantes e buscas repetidas.
- Prefira feedback claro para carregamento, erro, vazio e sucesso. Microinterações devem ser sutis e não bloquear a tarefa.
- Use Tailwind e os tokens do design system; não crie valores arbitrários quando já houver um token equivalente.

## Acessibilidade

- Use HTML semântico antes de ARIA. Todo controle interativo deve ser operável por teclado e ter nome acessível.
- Mantenha foco visível, ordem de tabulação lógica e contraste compatível com WCAG 2.1 AA.
- Implemente estados `disabled`, `loading`, erro e foco de forma perceptível, sem depender apenas de cor.
- Imagens informativas precisam de `alt`; imagens decorativas devem usar `alt=""`.
- Nos testes, consulte elementos por papel, nome, texto ou label antes de recorrer a seletores de implementação.

## Testes e identificadores

- Todo componente renderizado em uma tela deve receber um `id` estável e significativo quando isso facilitar a localização nos testes ou a navegação por âncoras.
- Prefira React Testing Library para testar comportamento observável e interações do usuário. Não teste detalhes internos, classes ou implementação sem motivo.
- Cubra estados principais, interações, mensagens de erro e caminhos de acessibilidade. Testes devem ser determinísticos e independentes.
- Use `data-testid` apenas como último recurso; quando necessário, prefira um valor semântico e estável.

## TypeScript e segurança

- Mantenha o modo estrito ativo. Modele props e dados com `interface` ou `type` explícitos e evite `any`.
- Valide entradas no cliente para UX e no servidor para segurança. Nunca confie em dados vindos do navegador.
- Nunca injete HTML não confiável. Evite `dangerouslySetInnerHTML`; quando inevitável, sanitize o conteúdo antes.
- Use HTTPS, variáveis de ambiente para segredos e cookies seguros quando houver autenticação. Não exponha segredos em componentes de cliente.
- Valide tipo, tamanho e conteúdo de uploads. Considere cabeçalhos de segurança e CSP no servidor quando a aplicação passar a consumir dados externos.
- Trate erros com mensagens úteis para a pessoa usuária, sem expor stack traces, tokens ou detalhes internos.

## Estilo e revisão

- Use dois espaços, strings com aspas simples em código novo, `const` para valores imutáveis, encadeamento opcional e coalescência nula quando melhorarem a clareza.
- Preserve o design system e os padrões existentes antes de criar novas variantes.
- Seja direto: não adicione comentários ou camadas de abstração sem que expliquem uma decisão necessária.
- Ao finalizar uma alteração, descreva o que mudou, quais validações foram executadas e qualquer limitação restante.
