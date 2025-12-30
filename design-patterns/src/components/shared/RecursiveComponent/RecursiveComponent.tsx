import React from 'react'
import { RecursiveComponentProps } from './types'

/**
 * A recursive component that renders data structures as nested lists.
 * Handles both primitive values and complex objects by recursively rendering nested data.
 *
 * @component
 * @example
 * const data = { name: 'John', age: 30, address: { city: 'NYC' } };
 * return <RecursiveComponent data={data} />
 *
 * @param {RecursiveComponentProps} props - The component props
 * @param {unknown} props.data - The data to render. Can be a primitive value or an object
 * @returns {React.ReactElement} A list item for primitives or a nested list structure for objects
 */

const isObject = (value: unknown): value is Record<string, any> =>
  typeof value === 'object' && value !== null && !React.isValidElement(value)

export const RecursiveComponent: React.FC<RecursiveComponentProps> = ({
  data,
}) => {
  if (!isObject(data)) {
    return <li>{String(data)}</li>
  }

  const pairs = Object.entries(data)

  return (
    <>
      {pairs.map(([key, value]) => (
        <li key={key}>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  )
}
