import { ButtonProps } from './types'

/**
 * A reusable button component that renders a native HTML button element.
 *
 * @param props - The button properties and attributes
 * @param props.children - The content to display inside the button
 * @param props.className - CSS class names to apply to the button
 * @param props.onClick - Callback function triggered when the button is clicked
 * @param props.disabled - Whether the button is disabled
 * @param props.type - The button type (button, submit, reset)
 *
 * @returns A button element with the provided props
 *
 * @example
 * ```tsx
 * <Button onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 * ```
 */
export const Button = (props: ButtonProps) => {
  return <button {...props}>Click me</button>
}
