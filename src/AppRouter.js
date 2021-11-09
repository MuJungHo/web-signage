import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import Editor from "./view/Editor"
import View from "./view/View"
export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/editor" component={Editor} />
        <Route path="/view" component={View} />
        <Redirect to='/editor' />
      </Switch>
    </BrowserRouter>
  )
}