import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Topics,
  About,
} from './../../components';
import Home from '../Home/Home';
import './App.css';
export interface IProps {
}

interface IState {
}

export class App extends React.Component<IProps, IState> {

  render() {

    return (
      <Router>
        <div>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          <section className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </section>
        </div>
      </Router>
    );
  }
}
