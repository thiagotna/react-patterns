import { ItemComponentProps, RegularListProps } from './types'

/**
 * Renders a list of items using a provided component.
 * @template T - The type of items in the list
 * @template R - The string literal type representing the resource name property
 * @param {Object} props - The component props
 * @param {T[]} props.items - Array of items to render
 * @param {R} props.resourceName - The property name to use for passing items to the ItemComponent
 * @param {React.ComponentType<ItemComponentProps<T, R>>} props.ItemComponent - The component to render for each item
 * @returns {React.ReactElement} A fragment containing rendered item components
 */
export const RegularList = <T, R extends string>({
  items,
  resourceName,
  ItemComponent,
}: RegularListProps<T, R>) => {
  return (
    <>
      {items.map((item, index) => {
        const props = {
          [resourceName]: item,
        } as ItemComponentProps<T, R>

        return <ItemComponent key={index} {...props} />
      })}
    </>
  )
}
