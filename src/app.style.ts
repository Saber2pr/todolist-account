import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  padding-top: 40px;
`

export const Content = styled.div`
  display: flex;
  margin: 0 4.5rem;
`

export const MainContent = styled.div`
  width: 70%;
  padding-top: 16px;
`
export const AsideContent = styled.div`
  background-color: #f7f7f7;
  transition: background-color 1s;
  border-left: 1px solid #ececec;
  position: fixed;
  right: -1rem;
  width: 30%;
  height: 100%;
  z-index: 3;
  overflow-y: auto;
`

export const GlobalStyle = createGlobalStyle`
  .password-form-item {
    label {
      width: 100%;
    }
  }
`
