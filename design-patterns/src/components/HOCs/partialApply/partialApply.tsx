import React from 'react'

export function partialApply<P extends object, K extends keyof P>(
  Component: React.ComponentType<P>,
  fixedProps: Pick<P, K>,
) {
  // Omit props that have already been "fixed"
  const WrappedComponent = (props: Omit<P, K>) => {
    return <Component {...(fixedProps as P)} {...(props as P)} />
  }
  WrappedComponent.displayName = `PartialApply(${
    Component.displayName || Component.name || 'Component'
  })`
  return WrappedComponent
}
