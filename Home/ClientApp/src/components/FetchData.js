import React, { Component } from 'react';
import { Jumbotron, Well } from 'react-bootstrap';
// import {WeatherProcessor} from ''

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };

    fetch('api/SampleData/WeatherForecasts')
      .then(response => response.json())
      .then(data => {
        this.setState({ forecasts: data, loading: false });
      });
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.dateFormatted}>
              <td>{forecast.dateFormatted}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div className="wrapper">
        <Well>
        <Jumbotron>
        <h1>Weather forecast</h1>
        <p>This is your weather for the day!  http://api.openweathermap.org/data/2.5/weather?zip=43093,us&appid=315d048a6a2e4d1ead6bee3276682180</p>
        </Jumbotron>
        {contents}
        {/* <WeatherProcessor>

        </WeatherProcessor> */}
        </Well>
      </div>
    );
  }
}
