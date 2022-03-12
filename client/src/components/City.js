import React, { Component } from 'react'

export default class City extends Component {
    render() {
        console.log(this.props)

        if (!this.props.cityTemp) {
            return null
        }
        return (
            <div>
                <h1>Weather for {this.props.cityName}</h1>
                <div>
                    <h2>High Temp For Today</h2>
                    <p>{this.props.cityTemp.Maximum.Value}</p>
                </div>
                <div>
                    <h2>Low Temp For Today</h2>
                    <p>{this.props.cityTemp.Minimum.Value}</p>
                </div>
                
            </div>
        )
    }
}
