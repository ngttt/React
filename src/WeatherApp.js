import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Grid, GridSpacing, Paper, CircularProgress, TextField } from '@material-ui/core';
import moment from 'moment';
// import DailyWeatherList from './components/DailyWeatherList';
import CurrentWeather from './components/CurrentWeather';
import DailyWeatherList from './components/DailyWeatherList';
moment.locale();

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default class WeatherApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weatherData: {},
		};
	}

	componentDidMount() {
		this.getWeatherData();
	}

	getWeatherData = async () => {
		try {
			const url =
				'https://api.openweathermap.org/data/2.5/onecall?lat=-21.02851&lon=105.804817&&units=metric&lang=vi&appid=4451f0cc1d6e5960079c7eb4634f7df8';

			const response = await fetch(url);
			const responseJSON = await response.json();
			console.log(responseJSON);
			this.setState({
				weatherData: responseJSON,
			});
		} catch (error) {
			console.log(error);
		}
    };
    
    renderContent = () => {
        if(this.state.weatherData.current) {
            return (
                <React.Fragment>
                    <CurrentWeather current = {this.state.weatherData.current} />
                    <DailyWeatherList daily = {this.state.weatherData.daily} />
                </React.Fragment>
            )
        } else {
            return <CircularProgress />
        }

        
    }


	render() {
		return (
			<div style={{ flexGrow: 1 }}>
				<AppBar position='statics'>
					<Toolbar>
						<Typography variant='h6'>MindX WeatherApp</Typography>
					</Toolbar>
				</AppBar>
				<Container maxWidth='md'>
                <TextField id="standard-basic" label="City" />
					<Grid container spacing='2' style={{ marginTop: 30 }}>
                        {this.renderContent()}

						{/* {this.props.renderCurrentWeather()}
						{this.renderWeatherHourData()} */}
              
					</Grid>
				</Container>

				{/* {this.renderCurrentWeather()} */}
				{/* <div style={{ display: 'flex', padding: 24, overflowX: 'scroll' }}> */}
				{/* {this.renderWeatherHourData()} */}
				{/* </div> */}

			</div>
		);
	}
}