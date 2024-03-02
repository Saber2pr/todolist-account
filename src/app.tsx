import 'normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes, HashRouter } from 'react-router-dom'

import { Header } from './components/header'
import { RegisterPage } from './pages/Register'
import {
  AsideContent,
  Container,
  Content,
  MainContent,
  GlobalStyle,
} from './app.style'
import { LoginPage } from './pages/Login'
import { ResetPage } from './pages/Reset'
import { AccountPage } from './pages/Account'

export const App = () => {
  return (
    <HashRouter>
      <Container>
        {/* @ts-ignore */}
        <GlobalStyle />
        <Header />
        <Content>
          <MainContent>
            <Routes>
              <Route path="/" element={<AccountPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/reset" element={<ResetPage />}></Route>
            </Routes>
          </MainContent>
          <AsideContent></AsideContent>
        </Content>
      </Container>
    </HashRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
