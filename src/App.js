import React from 'react';

import HomeContainer from './containers/HomeContainer';
import NotesContainer from './containers/NotesContainer';
import ListContainer from './containers/ListContainer';

import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Link
} from 'react-router-dom';

const App = () => (
  <HashRouter>
    <div className="columns">
      <div className="column is-2">
        <aside className="menu">
          <p className="menu-label">
            Pages
          </p>
          <ul className="menu-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/notes">Notes</Link></li>
            <li><Link to="/list">List Of Something</Link></li>
          </ul>
        </aside>
      </div>

      <div className="column">
        <Route exact path="/" component={HomeContainer} />
        <Route path="/notes" component={NotesContainer} />
        <Route path="/list" component={ListContainer} />
      </div>
    </div>
  </HashRouter>
)

export default App
