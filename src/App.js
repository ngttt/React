import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ToDoApp from "./containers/ToDoApp";
import WeatherApp from "./containers/WeatherApp";
import { AppBar } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
            <div className="nav-logo" >
					<Toolbar>
						<Typography variant='h6'>MindX WeatherApp</Typography>
					</Toolbar>
            <nav className="nav-bar">
                <ul>
                    <li className="list-nav">
                        <Link className="list-item" to= '/'>Home</Link>
                    </li>
                    <li className="list-nav">
                        <Link className="list-item" to= '/to-do'>Todo App</Link>
                    </li>
                    <li className="list-nav">
                        <Link className="list-item" to= '/weather'>Weather App</Link>
                    </li>
                </ul>
            </nav>

            <input className="search" value="Search"></input>

            </div>
            <Switch>
                <Route path='/to-do'>
                    render={(props) => <ToDoApp {...props}/>}
                </Route>
                <Route path='/weather'>
                render={(props) => <WeatherApp {...props}/>}
                </Route>
            </Switch>
        </div>
    </Router>

        )
    }
}
