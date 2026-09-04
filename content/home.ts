export interface Principle {
  id: string
  number: string
  title: string
  description: string
  icon: 'problem' | 'decision' | 'code'
}

export const homeContent = {
  profile: { name: 'Calvin Teixeira', initials: 'CT' },
  metadata: {
    title: 'Calvin Teixeira — Desenvolvedor front-end',
    description: 'Portfólio de Calvin Teixeira, desenvolvedor front-end focado em soluções digitais com intenção.',
  },
  navigation: {
    label: 'Navegação principal',
    skip: 'Pular para o conteúdo',
    contact: 'Vamos conversar',
    links: [
      { href: '#abordagem', label: 'Abordagem' },
      { href: '#conhecimentos', label: 'Conhecimentos' },
      { href: '#contato', label: 'Contato' },
    ],
  },
  hero: {
    role: 'Desenvolvedor front-end & solucionador de problemas',
    title: 'Tecnologia com',
    emphasis: 'intenção,',
    continuation: 'não só',
    ending: 'entrega.',
    description: 'Eu transformo problemas complexos em experiências digitais claras, úteis e sustentáveis — conectando produto, design e engenharia.',
    action: 'Conheça minha abordagem',
    summary: 'Em poucas palavras',
    highlights: [
      'Rigor técnico sem perder de vista as pessoas.',
      'Interfaces que comunicam, orientam e funcionam.',
      'Decisões que fazem sentido hoje e amanhã.',
    ],
  },
  approach: {
    label: 'Minha forma de trabalhar',
    title: 'Um bom produto não nasce de uma tela bonita. Nasce de uma pergunta bem feita.',
    principles: [
      { id: 'problema', number: '01', title: 'Começar pelo problema', description: 'Antes da interface ou da stack, eu busco entender o contexto, as restrições e o que precisa melhorar para quem usa.', icon: 'problem' },
      { id: 'decisao', number: '02', title: 'Decidir com clareza', description: 'Transformo necessidades abertas em decisões técnicas explicáveis, considerando impacto, manutenção e velocidade.', icon: 'decision' },
      { id: 'manutencao', number: '03', title: 'Construir para durar', description: 'Entrego experiências acessíveis e consistentes, com código simples o suficiente para o próximo passo ser fácil.', icon: 'code' },
    ] satisfies Principle[],
  },
  expertise: {
    label: 'Conhecimentos',
    title: 'Ferramentas são meio. Critério é o diferencial.',
    description: 'Minha base é o desenvolvimento front-end moderno, com interesse especial em sistemas que equilibram qualidade de código, performance e uma experiência cuidadosa.',
    items: ['TypeScript', 'React', 'Next.js', 'Design systems', 'Arquitetura front-end', 'Acessibilidade', 'Experiência de produto'],
    note: 'Projetos em desenvolvimento serão apresentados como estudos de caso: contexto, decisões, trade-offs e resultados.',
  },
  contact: { label: 'Próximo passo', title: 'Vamos resolver algo que importa?', pending: 'Contato em breve' },
  footer: { copyright: '©', top: 'Voltar ao topo', signature: 'Feito com intenção.' },
}
