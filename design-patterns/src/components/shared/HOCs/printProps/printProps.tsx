import React from 'react'

export const printProps = <P extends object>(
  Component: React.ComponentType<P>,
) => {
  return (props: P) => {
    console.log('Props:', props)
    return <Component {...props} />
  }
}
