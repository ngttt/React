import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import ToDoApp from "./containers/ToDoApp";
import WeatherApp from "./containers/WeatherApp";
import { AppBar } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Navigation extends Component {
    render() {
        return(
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
    <div>
        <input className="search" placeholder="Search" onChange={e => {
            this.setState({
                searchText: e.target.value,
            })
        }}
        onKeyDown={(el) => {
            if(el.key === "Enter") {
                console.log(this.props.WeatherApp)
                this.props.history.push({
                    pathname: `/weather/?name=${this.state.searchText}`
                })
            }
        }} />
    </div>
    </div>
        )
    }
}

const NavigationBar = withRouter(Navigation);

export default class App extends Component {
    render() {
        return (

            <Router>
                <div>
                    <NavigationBar />
            <Switch>
                <Route path='/to-do'>
                    <ToDoApp/>
                </Route>
                <Route path='/weather'>
                    <WeatherApp/>
                </Route>

            </Switch>
        </div>
    </Router>

        )
    }
}
