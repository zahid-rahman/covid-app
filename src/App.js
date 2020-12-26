import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components'
import './App.css'

import { fetchData } from './api'
import { requirePropFactory } from '@material-ui/core';

class App extends Component {

    state = {
        data: {}
    }


    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({
            data: fetchedData
        })
    }
    render() {
        return (
            <div className="container">
                <div className="container">
                    <img src="https://i.imgur.com/XdIfgTk.png"></img>
                </div>
                <Cards data={this.state.data} ></Cards>

                <Chart></Chart>
                <CountryPicker></CountryPicker>
            </div>
        );
    }
}

export default App;