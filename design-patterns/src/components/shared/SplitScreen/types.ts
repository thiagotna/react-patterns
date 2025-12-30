import { ReactNode } from 'react'

export interface SplitScreenProps {
  children: [ReactNode, ReactNode]
  leftWeight?: string // Tailwind CSS class for flex. I.E. "flex-1"
  rightWeight?: string // Tailwind CSS class for flex. I.E. "flex-1"
}
