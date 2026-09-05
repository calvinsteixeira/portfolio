import type { MessageKey } from '@/messages/pt-BR'

export const homeContent = {
  navigation: {
    links: [
      { href: '#abordagem', label: 'navigation.approach' as const },
      { href: '#conhecimentos', label: 'navigation.expertise' as const },
      { href: '#contato', label: 'navigation.contactSection' as const },
    ],
  },
  hero: {
    highlights: ['hero.highlightOne', 'hero.highlightTwo', 'hero.highlightThree'] as const,
  },
  approach: {
    principles: [
      { id: 'problema', icon: 'problem', number: 'approach.principleOneNumber', title: 'approach.principleOneTitle', description: 'approach.principleOneDescription' },
      { id: 'decisao', icon: 'decision', number: 'approach.principleTwoNumber', title: 'approach.principleTwoTitle', description: 'approach.principleTwoDescription' },
      { id: 'manutencao', icon: 'code', number: 'approach.principleThreeNumber', title: 'approach.principleThreeTitle', description: 'approach.principleThreeDescription' },
    ],
  },
  expertise: {
    items: ['expertise.itemOne', 'expertise.itemTwo', 'expertise.itemThree', 'expertise.itemFour', 'expertise.itemFive', 'expertise.itemSix', 'expertise.itemSeven'] as const,
    aiItems: ['expertise.aiItemOne', 'expertise.aiItemTwo', 'expertise.aiItemThree', 'expertise.aiItemFour', 'expertise.aiItemFive'] as const,
  },
  contact: { href: 'https://www.linkedin.com/in/calvinteixeira/' },
  backToTop: { threshold: 480 },
} as const

export type PrincipleIcon = (typeof homeContent.approach.principles)[number]['icon']

export interface Principle {
  id: string
  icon: PrincipleIcon
  number: MessageKey
  title: MessageKey
  description: MessageKey
}
