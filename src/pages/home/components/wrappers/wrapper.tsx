import React from 'react'
import { StyledContainer, StyledContent, StyledChatbotContent, StyledCardSituation, StyledSituation } from '../../styles/styles'

interface Props {
  children: React.ReactNode
}

export const Container: React.FC<Props> = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>
}

export const Content: React.FC<Props> = ({ children }: Props) => {
  return <StyledContent>{children}</StyledContent>
}
export const ChatBotWrapper: React.FC<Props> = ({ children }: Props) => {
  return <StyledChatbotContent>{children}</StyledChatbotContent>
}
export const CardSituation: React.FC<Props> = ({ children }: Props) => {
  return <StyledCardSituation>{children}</StyledCardSituation>
}
export const Situation: React.FC<Props> = ({ children }: Props) => {
  return <StyledSituation>{children}</StyledSituation>
}
