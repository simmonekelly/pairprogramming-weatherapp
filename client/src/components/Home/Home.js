import { React, Component } from 'react';
import './Home.scss';
import City from '../City';
import axios from 'axios';
let apiKey = 'UcmWA5pipNdbXRVDpPVdtgA7qBuniPCb'

export default class Home extends Component {

    state = {
        cityId: "",
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        console.log(e.target.city.value)
        this.fetchCityWeather(e.target.city.value)
    }

    fetchCityWeather(city) {
        axios.get()
        .then(results => {
            console.log(results)
            // this.setState({
            //     cityId:
            // })
        })
    }

    render() {
        //console.log(props.routerProps)
        console.log('home rendering')
        console.log(this.state.city)
        return (
            <div>
                <h1>Search For Your City's Weather</h1>
                <form onSubmit = {(e) => this.handleSubmit(e)} >
                    <input type="text" name="city" id="city" placeholder="Search your city"></input>
                    <button>Search</button>
                </form>
                <City
                    routeProps={this.props}/>
            </div>
        )
    }
}
