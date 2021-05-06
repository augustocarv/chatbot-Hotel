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
  user?: boolean
  options?: Options[]
  asMessage?: boolean
  component?: any
}
export type CustomComponentProps = {
  previousStep: {
    avatar: string
    delay: number
    hideInput: false
    id: string
    key: string
    label: string
    message: string
    trigger: string
    user: boolean
    value: number | string
  }
  step: {
    delay: number
    id: string
    key: string
    trigger: string
  }
  steps: any
  triggerNextStep: () => void
}
export type ArgumentsMessage = {
  previousValue: number
}
