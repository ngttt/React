import React, { Component } from 'react';
import DailyWeatherItem from './DailyWeatherItem'

export default class DailyWeatherList extends Component {

    
    render() {
			const { daily } = this.props;
			return daily.map((el, index) => {
				return (
				<DailyWeatherItem weatherData={el}/>
				);
			});
		
    };
}

