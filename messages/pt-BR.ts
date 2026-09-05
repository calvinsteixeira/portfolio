export const messages = {
  metadata: {
    title: 'Calvin Teixeira — Desenvolvedor front-end',
    description: 'Portfólio de Calvin Teixeira, desenvolvedor front-end focado em soluções digitais com intenção.',
  },
  profile: {
    name: 'Calvin Teixeira',
    initials: 'CT',
  },
  navigation: {
    label: 'Navegação principal',
    skip: 'Pular para o conteúdo',
    contact: 'Vamos conversar',
    approach: 'Abordagem',
    expertise: 'Conhecimentos',
    contactSection: 'Contato',
  },
  hero: {
    role: 'Desenvolvedor front-end & solucionador de problemas',
    title: 'Tecnologia com',
    emphasis: 'intenção,',
    continuation: 'não só',
    ending: 'entrega.',
    description: 'Eu transformo problemas complexos em experiências digitais claras, úteis e sustentáveis, conectando produto, design e engenharia.',
    action: 'Conheça minha abordagem',
    summary: 'Em poucas palavras',
    highlightOne: 'Rigor técnico sem perder de vista as pessoas.',
    highlightTwo: 'Interfaces que comunicam, orientam e funcionam.',
    highlightThree: 'Decisões que fazem sentido hoje e amanhã.',
  },
  approach: {
    label: 'Minha forma de trabalhar',
    title: 'Um bom produto nasce de uma pergunta bem feita.',
    principleOneNumber: '01',
    principleTwoNumber: '02',
    principleThreeNumber: '03',
    principleOneTitle: 'Começar pelo problema',
    principleOneDescription: 'Antes da interface ou da stack, eu busco entender o contexto, as restrições e o que precisa melhorar para quem usa.',
    principleTwoTitle: 'Decidir com clareza',
    principleTwoDescription: 'Transformo necessidades abertas em decisões técnicas explicáveis, considerando impacto, manutenção e velocidade.',
    principleThreeTitle: 'Construir para durar',
    principleThreeDescription: 'Entrego experiências acessíveis e consistentes, com código simples o suficiente para o próximo passo ser fácil.',
  },
  expertise: {
    label: 'Conhecimentos',
    title: 'Ferramentas são meio. Critério é o diferencial.',
    stackLabel: 'Stack de domínio',
    description: 'Minha base é o desenvolvimento front-end moderno, com interesse especial em sistemas que equilibram qualidade de código, performance e uma experiência cuidadosa.',
    aiLabel: 'IA no fluxo de desenvolvimento',
    aiDescription: 'Na prática, incorporo agentes ao processo de engenharia para investigar, prototipar e automatizar tarefas repetitivas. Eu reviso, questiono e decido: a IA acelera o caminho, mas a qualidade do resultado continua sob minha responsabilidade.',
    itemOne: 'TypeScript',
    itemTwo: 'React',
    itemThree: 'Next.js',
    itemFour: 'Design systems',
    itemFive: 'Arquitetura front-end',
    itemSix: 'Acessibilidade',
    itemSeven: 'Experiência de produto',
    aiItemOne: 'IDEs com agentes integrados',
    aiItemTwo: 'Fluxos agênticos de desenvolvimento',
    aiItemThree: 'Orquestração de agentes na pipeline',
    aiItemFour: 'Desenvolvimento orientado por contexto',
    aiItemFive: 'Automação assistida por IA',
    note: 'Projetos em desenvolvimento serão apresentados como estudos de caso: contexto, decisões, trade-offs e resultados.',
  },
  contact: {
    label: 'Próximo passo',
    title: 'Vamos resolver algo que importa?',
    action: 'Acesse meu LinkedIn',
    href: 'https://www.linkedin.com/in/calvinteixeira/',
  },
  backToTop: {
    label: 'Voltar ao topo',
    threshold: 480,
  },
  footer: {
    copyright: '©',
    top: 'Voltar ao topo',
    signature: 'Feito com intenção.',
  },
} as const

export type MessageKey =
  | 'metadata.title'
  | 'metadata.description'
  | 'profile.name'
  | 'profile.initials'
  | 'navigation.label'
  | 'navigation.skip'
  | 'navigation.contact'
  | 'navigation.approach'
  | 'navigation.expertise'
  | 'navigation.contactSection'
  | 'hero.role'
  | 'hero.title'
  | 'hero.emphasis'
  | 'hero.continuation'
  | 'hero.ending'
  | 'hero.description'
  | 'hero.action'
  | 'hero.summary'
  | 'hero.highlightOne'
  | 'hero.highlightTwo'
  | 'hero.highlightThree'
  | 'approach.label'
  | 'approach.title'
  | 'approach.principleOneNumber'
  | 'approach.principleTwoNumber'
  | 'approach.principleThreeNumber'
  | 'approach.principleOneTitle'
  | 'approach.principleOneDescription'
  | 'approach.principleTwoTitle'
  | 'approach.principleTwoDescription'
  | 'approach.principleThreeTitle'
  | 'approach.principleThreeDescription'
  | 'expertise.label'
  | 'expertise.title'
  | 'expertise.stackLabel'
  | 'expertise.description'
  | 'expertise.aiLabel'
  | 'expertise.aiDescription'
  | 'expertise.note'
  | 'expertise.itemOne'
  | 'expertise.itemTwo'
  | 'expertise.itemThree'
  | 'expertise.itemFour'
  | 'expertise.itemFive'
  | 'expertise.itemSix'
  | 'expertise.itemSeven'
  | 'expertise.aiItemOne'
  | 'expertise.aiItemTwo'
  | 'expertise.aiItemThree'
  | 'expertise.aiItemFour'
  | 'expertise.aiItemFive'
  | 'contact.label'
  | 'contact.title'
  | 'contact.action'
  | 'backToTop.label'
  | 'footer.copyright'
  | 'footer.top'
  | 'footer.signature'

type MessageValue = string | readonly string[] | Readonly<Record<string, unknown>>

function getMessage(key: MessageKey): MessageValue {
  return key.split('.').reduce<unknown>((value, segment) => {
    if (!value || typeof value !== 'object') return undefined
    return (value as Record<string, unknown>)[segment]
  }, messages) as MessageValue
}

export function t(key: MessageKey): string {
  const value = getMessage(key)
  if (typeof value !== 'string') throw new Error(`A chave de tradução "${key}" não contém uma string.`)
  return value
}

export const locale = 'pt-BR'
