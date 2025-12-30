import { createContext, useState, ReactNode } from 'react'
import { ContextState, CreateContextFactoryResult } from './types'
import { useGenericContext } from '../../hooks/useGenericContext/useGenericContext'

export function createContextFactory<T>(
  displayName: string,
  initialValue: T,
): CreateContextFactoryResult<T> {
  const Context = createContext<ContextState<T> | undefined>(undefined)
  Context.displayName = displayName

  const Provider = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState<T>(initialValue)

    return (
      <Context.Provider value={{ value, setValue }}>
        {children}
      </Context.Provider>
    )
  }

  const useContextHook = () => useGenericContext<T>(Context, displayName)

  return {
    Context,
    Provider,
    useContext: useContextHook,
  }
}
