export interface DataSourceProps {
  getDataFunction: () => Promise<never>
  resourceName: string
  children: React.ReactNode
}
