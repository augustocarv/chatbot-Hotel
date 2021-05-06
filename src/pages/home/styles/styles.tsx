import styled, { StyledComponent } from 'styled-components'

export const StyledContainer: StyledComponent<'div', any, {}, never> = styled.div`
  background-color: #7449ac;
  height: 100vh;
  width: 100%;
`
export const StyledContent: StyledComponent<'div', any, {}, never> = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`
export const StyledImage: StyledComponent<'img', any, {}, never> = styled.img`
  height: 100%;
  width: 100%;
`
export const StyledContentFull: StyledComponent<'div', any, {}, never> = styled.div`
  height: 100%;
  width: 100%;
`
export const StyledChatbotContent: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  width: 89%;
  justify-content: space-between;
`
export const StyledCardSituation: StyledComponent<'div', any, {}, never> = styled.div`
  background-color: white;
  padding: 22px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow-y: auto;
  width: 20%;
`
export const StyledSituation: StyledComponent<'div', any, {}, never> = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
