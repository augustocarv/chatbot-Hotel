type Options = {
  value: number | string | boolean
  label: string
  trigger: string
}

export type Steps = {
  id: string
  message?: any
  trigger?: string
  end?: boolean
  options?: Options[]
  component?: any
}
export type ArgumentsMessage = {
  previousValue: number
}
