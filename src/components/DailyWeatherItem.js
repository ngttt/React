import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Grid, GridSpacing, Paper, CircularProgress } from '@material-ui/core';
import moment from 'moment';
moment.locale();

export default class DailyWeatherItem extends Component {
    render() {
        const el = this.props.weatherData;
                    const imageUrl = `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`;
                    return (
                        <Grid item xs={6} sm={3}>
                            <Paper elevation={1} style={{ padding: 16 }}>
                                <Typography variant='subtitle1' style={{ textAlign: 'center' }}>
                                    {moment.unix(el.dt).format('DD/MM')}
                                </Typography>
                                <Typography variant='h6' style={{ textAlign: 'center' }}>
                                    {el.temp.min} - {el.temp.max} C
                                </Typography>
                                <img src={imageUrl} style={{ width: '100%' }} />
                                <Typography
                                    variant='subtitle1'
                                    style={{ textAlign: 'center', textTransform: 'capitalize' }}
                                >
                                    {el.weather[0].description}
                                </Typography>
                            </Paper>
                        </Grid>
                    );
                };
            
        };
        
