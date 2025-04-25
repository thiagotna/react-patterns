import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode[]
  layout?: 'flex' | 'grid'
  maxChildren?: number
  weights?: string[] // Array com classes Tailwind para cada child
  containerClassName?: string // classes extras pro container
}

export const Container = ({
  children,
  layout = 'flex',
  maxChildren = 6,
  weights = [],
  containerClassName = '',
}: ContainerProps) => {
  const validChildren = children.slice(0, maxChildren)
  const layoutClass =
    layout === 'flex' ? 'flex' : `grid grid-cols-${validChildren.length}`

  return (
    <div className="container mx-auto px-4">
      <div className={`container mx-auto ${layoutClass} ${containerClassName}`}>
        {validChildren.map((child, index) => (
          <div key={index} className={weights[index] || 'flex-1'}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
