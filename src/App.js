import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";

import { fetchData } from "./api";

import coronaImage from "./images/image.png";
import styles from "./App.module.css";

class App extends Component {
  state = {
    data: {},
    country: "India",
  };

  async componentDidMount() {
    const { country } = this.state;
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    console.log(country);
    // fetch data
    const fetchedData = await fetchData(country);
    // set data
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
