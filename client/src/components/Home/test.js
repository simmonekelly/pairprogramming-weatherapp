import React from 'react';
import './Home.scss';

export default class Home extends Component {

    state = {
        city: "",
    }

    handleSubmit() {
        e.preventDefault();
        console.log(e)
        console.log(e.target.city.value)
        this.setState({
            city: e.target.city.value,
        })
    }

    render() {
        console.log(props);
        //console.log(props.routerProps)
        return (
            <div>
                <h1>Search For Your City's Weather</h1>
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" name="city" id="city" placeholder="Search your city"></input>
                    <button>Search</button>
                </form>
                <CityWeather
                    routeProps={this.props}/>
            </div>
        )
    }
}
