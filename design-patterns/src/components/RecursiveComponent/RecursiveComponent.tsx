import React from 'react'

const isObject = (value: unknown): value is Record<string, any> =>
  typeof value === 'object' && value !== null && !React.isValidElement(value)

interface RecursiveComponentProps {
  data: string | number | boolean | Record<string, any>
}

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
