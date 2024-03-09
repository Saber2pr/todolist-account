import 'normalize.css'

import React, { useEffect } from 'react'
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
import { store, useAppDispatch, useAppSelector } from './store/store'
import { AsideMenu } from './components/aside-menu'
import { AboutPage } from './pages/About'
import { ProductsPage } from './pages/Products'
import { Spin, message } from 'antd'
import { useAsync } from './hooks/useAsync'
import { getProductCheckout } from './api/vip'
import { commonSlice } from './store/common'
import { Footer } from './components/footer'
import { getConfig } from './api/common'

message.config({
  top: 48,
})

export const App = () => {
  const loadingInfo = useAppSelector((state) => state?.common?.loadingInfo)
  const dispatch = useAppDispatch()

  useAsync(async () => {
    const config = await getConfig()
    dispatch(commonSlice.actions.setConfig(config))
  }, [])

  useEffect(() => {
    const handle = () => {
      dispatch(
        commonSlice.actions.setLoading({
          loading: false,
          text: '',
        }),
      )
    }
    window.addEventListener('unload', handle)
    return () => {
      window.removeEventListener('unload', handle)
    }
  }, [])

  return (
    <Container>
      {/* @ts-ignore */}
      <GlobalStyle />
      <Header />
      <Spin spinning={loadingInfo?.loading} tip={loadingInfo?.text}>
        <Content>
          <MainContent>
            <Routes>
              <Route path="/" element={<AccountPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/reset" element={<ResetPage />}></Route>
              <Route
                path="/confirmReset"
                element={<ConfirmResetPage />}
              ></Route>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/products" element={<ProductsPage />}></Route>
            </Routes>
          </MainContent>
          <AsideContent>
            <AsideMenu />
          </AsideContent>
        </Content>
      </Spin>
      <Footer />
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
