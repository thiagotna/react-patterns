import { ReactNode } from 'react'

export interface ContainerProps {
  children: ReactNode[]
  layout?: 'flex' | 'grid'
  maxChildren?: number
  weights?: string[] // Array com classes Tailwind para cada child
  containerClassName?: string // classes extras pro container
}
