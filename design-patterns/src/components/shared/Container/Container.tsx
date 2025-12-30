import { ContainerProps } from './types'

/**
 * Container component that renders children with flexible layout options.
 *
 * @param {ContainerProps} props - The component props
 * @param {React.ReactNode[]} props.children - The child elements to render
 * @param {('flex' | 'grid')} [props.layout='flex'] - The layout mode to use for arranging children
 * @param {number} [props.maxChildren=6] - The maximum number of children to render
 * @param {string[]} [props.weights=[]] - Array of CSS class names to apply custom widths to each child
 * @param {string} [props.containerClassName=''] - Additional CSS class names to apply to the container
 * @returns {JSX.Element} The rendered container with children
 *
 * @example
 * // Flex layout with default weight
 * <Container layout="flex">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Container>
 *
 * @example
 * // Grid layout with custom weights
 * <Container layout="grid" weights={['w-1/2', 'w-1/4', 'w-1/4']}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Container>
 */
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
