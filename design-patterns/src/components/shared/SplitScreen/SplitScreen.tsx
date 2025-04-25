import { ReactNode } from 'react'

interface SplitScreenProps {
  children: [ReactNode, ReactNode]
  leftWeight?: string // Tailwind CSS class for flex. I.E. "flex-1"
  rightWeight?: string // Tailwind CSS class for flex. I.E. "flex-1"
}

export const SplitScreen = ({
  children,
  leftWeight,
  rightWeight,
}: SplitScreenProps) => {
  const [left, right] = children

  return (
    <div className="container mx-auto flex">
      <div className={leftWeight}>{left}</div>
      <div className={rightWeight}>{right}</div>
    </div>
  )
}
