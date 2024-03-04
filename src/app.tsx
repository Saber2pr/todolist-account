import 'normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'

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
import { AsideMenu } from './components/aside-menu'
import { AboutPage } from './pages/About'
import { ProductsPage } from './pages/Products'

export const App = () => {
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
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
          </Routes>
        </MainContent>
        <AsideContent>
          <AsideMenu />
        </AsideContent>
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

ReactDOM.render(<Index />, document.getElementById('root'))
