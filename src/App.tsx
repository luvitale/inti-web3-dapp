import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Page } from './components/base/base'
import { NavBar } from './components/NavBar'
import { GlobalStyle } from './global/GlobalStyle'
import { Balance } from './pages/Balance'
import { NotificationsList } from './components/Transactions/History'
import { Web3Modal } from './pages/Web3Modal'

export function App() {
  return (
    <Page>
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/balance" component={Balance} />
          <Route exact path="/web3modal" component={Web3Modal} />
          <Redirect exact from="/" to="/balance" />
        </Switch>
      </BrowserRouter>
      <NotificationsList />
    </Page>
  )
}
