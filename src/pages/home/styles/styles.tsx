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
