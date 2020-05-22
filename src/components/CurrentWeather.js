import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Grid, GridSpacing, Paper } from '@material-ui/core';
import moment from 'moment';

export default class CurrentWeather extends Component {
    render() {
			const { current } = this.props;
			const imageUrl = `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
                        return (
                            <Grid item xs={12} sm={12}>
                                <Paper elevation={1} style={{ padding: 16 }}>
                                    <Grid container spacing='2'>
                                        <Grid item sm={3}>
                                            <img src={imageUrl} style={{ width: '100%' }} />
                                        </Grid>
                                        <Grid item sm={9}>
                                            <Typography variant='subtitle1'>
                                                {moment.unix(current.dt).format('HH:mm DD/MM/YYYY')}
                                            </Typography>
            
                                            <Typography variant='h3'> {current.temp} C</Typography>
                                            <Typography
                                                variant='h5'
                                                style={{ textTransform: 'capitalize' }}
                                            >
                                                {current.weather[0].description}
                                            </Typography>
                                            <Typography variant='subtitle2' gutterBottom>
                                                Cảm giác: {current.feels_like} C
                                            </Typography>
                                            <Typography variant='subtitle2' gutterBottom>
                                                Độ ẩm: {current.humidity}%
                                            </Typography>
                                            <Typography variant='subtitle2' gutterBottom>
                                                Áp suất: {current.pressure} hpa
                                            </Typography>
                                            <Typography variant='subtitle2' gutterBottom>
                                                Tốc độ gió: {current.wind_speed} m/s
                                            </Typography>
                                            <Typography variant='subtitle2' gutterBottom>
                                                Mặt trời mọc: {moment.unix(current.sunrise).format('HH:mm')}
                                            </Typography>
                                            <Typography variant='subtitle2' gutterBottom>
                                                Mặt trời lặn: {moment.unix(current.sunset).format('HH:mm')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        );
                    }
    
}
