# Regras de desenvolvimento

## Objetivo

Este projeto é um portfólio construído com Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Zustand e Lucide React. Priorize código simples, legível, seguro, acessível e fácil de manter. Evite abstrações e dependências sem necessidade real (overengineering).

As regras deste arquivo orientam agentes de IA e pessoas que contribuem para o projeto. Em caso de conflito, siga as decisões mais específicas do diretório ou a instrução explícita da tarefa atual.

## Fluxo de trabalho

- Trabalhe sempre em uma branch com prefixo permitido: `feat/` ou `fix/`.
- Não faça alterações diretamente na `main`; use Pull Requests.
- Antes de concluir, execute `pnpm lint`, `pnpm typecheck` e `pnpm build`.
- Mensagens de commit devem ser escritas em português, ser objetivas e usar um prefixo convencional, por exemplo: `feat: adicionar seção de projetos` ou `fix: corrigir foco do menu`.
- Não inclua segredos, tokens ou dados pessoais no código, nos logs ou nos commits.

Exemplos de nomes válidos: `feat/secao-sobre` e `fix/menu-mobile`. Nomes como `chore/atualizar-dependencias` não são aceitos.

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

Estrutura esperada:

```text
components/projeto-card/
├── projeto-card.tsx
├── projeto-card.style.css
└── projeto-card.test.tsx
```

Exemplo de composição: o componente pai define a estrutura, enquanto o conteúdo permanece flexível.

```tsx
interface ProjetoCardProps {
  children: React.ReactNode
}

export function ProjetoCard({ children }: ProjetoCardProps) {
  return <article className='rounded-lg border border-border p-6'>{children}</article>
}

export function ProjetoCardTitulo({ children }: { children: React.ReactNode }) {
  return <h3 className='text-xl font-semibold'>{children}</h3>
}
```

Uso:

```tsx
<ProjetoCard>
  <ProjetoCardTitulo>Redesenho do onboarding</ProjetoCardTitulo>
</ProjetoCard>
```

## React e hooks

- Use hooks apenas no topo de componentes ou hooks customizados; nunca em condições, loops ou funções aninhadas.
- Extraia lógica reutilizável para hooks customizados com nomes `use...` e responsabilidades claras.
- Declare dependências completas em `useEffect`, `useMemo` e `useCallback`. Não use esses hooks por padrão: aplique memoização apenas quando reduzir trabalho mensurável ou estabilizar uma referência necessária.
- Prefira derivar valores durante a renderização a duplicá-los em estado. Use `useState` para estado local e `useReducer` quando houver transições relacionadas ou complexas.
- Evite efeitos para sincronizar estado derivado, manipular dados que poderiam ser calculados diretamente ou executar lógica de negócio.
- Use Zustand para estado global de cliente, com slices por domínio e seletores focados para evitar renderizações desnecessárias. Não coloque estado local ou dados sensíveis globalmente sem necessidade.
- Em componentes de servidor do Next.js, não use hooks de cliente sem a diretiva `"use client"`; mantenha o máximo possível da árvore como Server Components.

Exemplo: derive valores na renderização; não crie um efeito apenas para sincronizar estado.

```tsx
interface ProjetosProps {
  projetos: Projeto[]
}

export function Projetos({ projetos }: ProjetosProps) {
  const projetosPublicados = projetos.filter((projeto) => projeto.publicado)

  return <p>{projetosPublicados.length} projetos publicados</p>
}
```

Use `useCallback` somente quando a referência estável for necessária, por exemplo ao entregá-la para um componente memorizado:

```tsx
const handleSelecionarProjeto = useCallback((id: string) => {
  setProjetoSelecionado(id)
}, [])
```

## Fluxo de dados e prop drilling

- Não encaminhe a mesma prop por múltiplos níveis quando os níveis intermediários não a usam.
- Para estado local compartilhado por uma subárvore, prefira composição ou Contexto restrito à funcionalidade.
- Para estado global de cliente, use uma store Zustand com seletores pequenos. Não use Zustand como substituto indiscriminado de props locais.

Evite este padrão:

```tsx
<Pagina usuario={usuario}>
  <Cabecalho usuario={usuario}>
    <Menu usuario={usuario} />
  </Cabecalho>
</Pagina>
```

Prefira um contexto local quando apenas a subárvore precisa do valor:

```tsx
const UsuarioContext = createContext<Usuario | null>(null)

export function AreaDoUsuario({ children, usuario }: {
  children: React.ReactNode
  usuario: Usuario
}) {
  return <UsuarioContext value={usuario}>{children}</UsuarioContext>
}

export function NomeDoUsuario() {
  const usuario = useContext(UsuarioContext)

  if (!usuario) throw new Error('NomeDoUsuario deve estar dentro de AreaDoUsuario')

  return <span>{usuario.nome}</span>
}
```

Para Zustand, selecione apenas o dado necessário:

```tsx
const tema = usePreferenciasStore((estado) => estado.tema)
const definirTema = usePreferenciasStore((estado) => estado.definirTema)
```

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

Exemplo acessível e testável: use um `id` estável, um botão semântico e teste pelo papel acessível.

```tsx
export function BotaoContato() {
  return (
    <a id='botao-contato' href='mailto:ola@exemplo.com'>
      Entrar em contato
    </a>
  )
}
```

```tsx
it('exibe o atalho de contato', () => {
  render(<BotaoContato />)

  expect(screen.getByRole('link', { name: 'Entrar em contato' })).toHaveAttribute(
    'id',
    'botao-contato',
  )
})
```

## TypeScript e segurança

- Mantenha o modo estrito ativo. Modele props e dados com `interface` ou `type` explícitos e evite `any`.
- Valide entradas no cliente para UX e no servidor para segurança. Nunca confie em dados vindos do navegador.
- Nunca injete HTML não confiável. Evite `dangerouslySetInnerHTML`; quando inevitável, sanitize o conteúdo antes.
- Use HTTPS, variáveis de ambiente para segredos e cookies seguros quando houver autenticação. Não exponha segredos em componentes de cliente.
- Valide tipo, tamanho e conteúdo de uploads. Considere cabeçalhos de segurança e CSP no servidor quando a aplicação passar a consumir dados externos.
- Trate erros com mensagens úteis para a pessoa usuária, sem expor stack traces, tokens ou detalhes internos.

Exemplo: valide e tipifique uma entrada antes de usá-la.

```ts
interface ContatoInput {
  email: string
}

export function validarContato(input: ContatoInput) {
  const email = input.email.trim()

  if (!email.includes('@')) {
    return { sucesso: false, mensagem: 'Informe um e-mail válido.' }
  }

  return { sucesso: true, email }
}
```

## Estilo e revisão

- Use dois espaços, strings com aspas simples em código novo, `const` para valores imutáveis, encadeamento opcional e coalescência nula quando melhorarem a clareza.
- Preserve o design system e os padrões existentes antes de criar novas variantes.
- Seja direto: não adicione comentários ou camadas de abstração sem que expliquem uma decisão necessária.
- Ao finalizar uma alteração, descreva o que mudou, quais validações foram executadas e qualquer limitação restante.
