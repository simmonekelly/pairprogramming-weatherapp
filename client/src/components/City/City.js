import React, { Component } from 'react'
import "./City.scss"

export default class City extends Component {
    render() {

        if (!this.props.cityTemp) {
            return null
        }
        return (
            <div className="city">
                <h1>Weather for {this.props.cityName}</h1>
                <div className="city__tempreture">
                <div >
                    <h2>High Temp For Today</h2>
                    <p>{this.props.cityTemp.Maximum.Value} {this.props.cityTemp.Maximum.Unit}</p>
                </div>
                <div>
                    <h2>Low Temp For Today</h2>
                    <p>{this.props.cityTemp.Minimum.Value} {this.props.cityTemp.Minimum.Unit}</p>
                </div>
                    
                </div>
                
                
            </div>
        )
    }
}
