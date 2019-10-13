import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { Header } from './header'
import StreamCreate from './streams/stream_create';
import StreamEdit from './streams/stream_edit';
import StreamDelete from './streams/stream_delete';
import StreamList from './streams/stream_list';
import StreamShow from './streams/stream_show';
import history from '../history'

export const App = () => {
  return (
    <div className="ui container">
      <Router history={ history }>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}
