import { Context, JSX, ReactNode } from 'react'

export interface ContextState<T> {
  value: T
  setValue: (newValue: T) => void
}

export interface CreateContextFactoryResult<T> {
  Context: Context<ContextState<T> | undefined>
  Provider: ({ children }: { children: ReactNode }) => JSX.Element
  useContext: () => ContextState<T>
}
