import React from 'react'
import { StyledContainer, StyledContent } from '../../styles/styles'

interface Props {
  children: React.ReactNode
}

export const Container: React.FC<Props> = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>
}

export const Content: React.FC<Props> = ({ children }: Props) => {
  return <StyledContent>{children}</StyledContent>
}
