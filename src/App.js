import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default class App extends Component {
    render() {
        return (
            <Router>
            <div>
            <nav>
                <ul>
                    <li>
                        <Link to= '/'>Home</Link>
                    </li>
                    <li>
                        <Link to= '/about'>About</Link>
                    </li>
                    <li>
                        <Link to= '/user'>User</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Router path='/'></Router>
                <Router path='/'></Router>
            </Switch>
        </div>
    </Router>

        )
    }
}
