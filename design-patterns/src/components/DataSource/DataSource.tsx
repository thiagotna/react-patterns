import React, { useState, useEffect, Suspense } from 'react'

interface DataSourceProps {
  getDataFunction: () => Promise<any>
  resourceName: string
  children: React.ReactNode
}

export const DataSource = ({
  getDataFunction,
  resourceName,
  children,
}: DataSourceProps) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const result = await getDataFunction()
      setData(result)
      setLoading(false)
    })()
  }, [getDataFunction])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: data })
        }
        return child
      })}
    </Suspense>
  )
}
