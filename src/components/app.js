import React from 'react';
import { Router, Route } from 'react-router-dom';

import { Header } from './header'
import StreamCreate from './streams/stream_create';
import StreamEdit from './streams/stream_edit';
import { StreamDelete } from './streams/stream_delete';
import StreamList from './streams/stream_list';
import { StreamShow } from './streams/stream_show';
import history from '../history'

export const App = () => {
  return (
    <div className="ui container">
      <Router history={ history }>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  )
}
