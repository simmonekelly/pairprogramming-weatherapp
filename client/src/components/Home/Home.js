import { React, Component } from "react";
import "./Home.scss";
import City from "../City";
import axios from "axios";
let apiKey = "UcmWA5pipNdbXRVDpPVdtgA7qBuniPCb";
const SEARCH_URL =
  "http://dataservice.accuweather.com/locations/v1/cities/search";

const WEATHER_URL =
  "http://dataservice.accuweather.com/forecasts/v1/daily/1day/";

export default class Home extends Component {
  state = {
    cityId: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.city.value);
    this.fetchCityID(e.target.city.value);
  };

  fetchCityID(city) {
    axios
      .get(SEARCH_URL + "?apikey=" + apiKey + "&q=" + city)
      .then((results) => {
        const filteredResults = results.data[0];

        console.log(filteredResults.Key);
        console.log(results);

        axios
          .get(WEATHER_URL + filteredResults.Key + "?apikey=" + apiKey)
          .then((results) => {
            console.log(results.data.DailyForecasts[0].Temperature);
          });
        // this.setState({
        //     cityId:
        // })
      });
  }

  render() {
    //console.log(props.routerProps)
    console.log("home rendering");
    console.log(this.state.city);
    return (
      <div>
        <h1>Search For Your City's Weather</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Search your city"
          ></input>
          <button>Search</button>
        </form>
        <City routeProps={this.props} />
      </div>
    );
  }
}
