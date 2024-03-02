import 'normalize.css'

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'

import {
  AsideContent,
  Container,
  Content,
  GlobalStyle,
  MainContent,
} from './app.style'
import { Header } from './components/header'
import { AccountPage } from './pages/Account'
import { ConfirmResetPage } from './pages/confirmReset'
import { LoginPage } from './pages/Login'
import { RegisterPage } from './pages/Register'
import { ResetPage } from './pages/Reset'
import { store } from './store/store'
import { parseUrlParam } from './utils/parseUrlParam'
import { setCode } from './api'

export const App = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const query = parseUrlParam(location.search)
    if (query?.code) {
      setCode(query?.code)
      navigate('/confirmReset')
    }
  }, [])

  return (
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
            <Route path="/confirmReset" element={<ConfirmResetPage />}></Route>
          </Routes>
        </MainContent>
        <AsideContent></AsideContent>
      </Content>
    </Container>
  )
}

const Index = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
