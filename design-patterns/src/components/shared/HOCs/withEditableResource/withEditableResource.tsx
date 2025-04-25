import React, { useState, useEffect } from 'react'

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const withEditableResource = <T,>(
  Component: React.ComponentType<any>,
  resourcePath: string,
  resourceName: string,
) => {
  return (props: React.ComponentProps<typeof Component>) => {
    const [originalData, setOriginalData] = useState<T | null>(null)
    const [data, setData] = useState<T | null>(null)

    useEffect(() => {
      ;async () => {
        const response = await fetch(resourcePath)
        const jsonData = await response.json()
        setOriginalData(jsonData)
        setData(jsonData)
      }
    }, [])

    const onSave = async () => {
      await fetch(resourcePath, {
        method: 'PUT',
        body: JSON.stringify({ [resourceName]: data }),
      })
      setOriginalData(data)
    }

    const onChange = (changes: Partial<T>) => {
      if (!data) return
      setData({ ...data, ...changes })
    }

    const onReset = () => {
      setData(originalData)
    }

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    }

    return <Component {...props} {...resourceProps} />
  }
}
