import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import RegisterVideo from './pages/register/Video';
import RegisterCategory from './pages/register/Category';
import NotFound404 from './pages/NotFound404';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register/video" component={RegisterVideo} />
      <Route path="/register/category" component={RegisterCategory} />
      <Route component={NotFound404} />
    </Switch>  
  </Router>,
  document.getElementById('root')
);

