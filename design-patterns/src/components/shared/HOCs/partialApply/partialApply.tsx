/**
 * Higher-order component that partially applies fixed props to a component.
 *
 * This HOC allows you to create a new component with some props pre-filled,
 * reducing the need to pass those props repeatedly.
 *
 * @template P - The props object type of the original component
 * @template K - The keys of props that will be fixed/partially applied
 *
 * @param Component - The React component to wrap
 * @param fixedProps - An object containing the props to be fixed on the component
 *
 * @returns A new component that accepts only the remaining props (excluding the fixed ones)
 *
 * @example
 * ```tsx
 * interface ButtonProps {
 *   label: string;
 *   onClick: () => void;
 *   variant: 'primary' | 'secondary';
 * }
 *
 * const Button: React.FC<ButtonProps> = ({ label, onClick, variant }) => (
 *   <button className={variant} onClick={onClick}>{label}</button>
 * );
 *
 * const PrimaryButton = partialApply(Button, { variant: 'primary' });
 *
 * // Now PrimaryButton only requires 'label' and 'onClick' props
 * <PrimaryButton label="Click me" onClick={() => console.log('clicked')} />
 * ```
 */
export function partialApply<P extends object, K extends keyof P>(
  Component: React.ComponentType<P>,
  fixedProps: Pick<P, K>,
) {
  const WrappedComponent = (props: Omit<P, K>) => {
    return <Component {...(fixedProps as P)} {...(props as P)} />
  }
  WrappedComponent.displayName = `PartialApply(${
    Component.displayName || Component.name || 'Component'
  })`
  return WrappedComponent
}
