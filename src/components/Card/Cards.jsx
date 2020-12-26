import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'


import cx from 'classnames'
import CountUp from 'react-countup'

import './card.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Loading ...'
    }

    if (!recovered) {
        return 'Loading ...'
    }

    if (!deaths) {
        return 'Loading ...'
    }

    if (!lastUpdate) {
        return 'Loading ...'
    }

    return (

        <div className="container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className="card infected" >
                    <CardContent>
                        <Typography varient="h2" color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varient="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                seperator=","
                            ></CountUp>
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography varient="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className="card recovered" >

                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varaint="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                seperator=","
                            ></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries cases from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className="card death">

                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography varaint="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                seperator=","
                            ></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Number of death cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>


        </div>
    )
}

export default Cards