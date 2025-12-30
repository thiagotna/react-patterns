import { ReactNode } from 'react'
import { SplitScreenProps } from './types'

/**
 * A layout component that splits the screen into two sections with customizable widths.
 *
 * @component
 * @param {SplitScreenProps} props - The component props
 * @param {ReactNode[]} props.children - An array containing exactly two ReactNode elements to display in left and right sections
 * @param {string} props.leftWeight - CSS class for styling and sizing the left section
 * @param {string} props.rightWeight - CSS class for styling and sizing the right section
 * @returns {JSX.Element} A flexbox container with two weighted child sections
 *
 * @example
 * <SplitScreen leftWeight="w-1/3" rightWeight="w-2/3">
 *   <LeftComponent />
 *   <RightComponent />
 * </SplitScreen>
 */
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
