import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "./const";
axios.defaults.baseURL = API_URL;

axios.defaults.headers.common = {
  Authorization:
    "bearer " +
    "ea;sdvklkandweqiomkaxcoieyJfaWQiOiI1YjZmOTk4ODU2YjBjOTA1NTg2OTI0ZWIiLCJpYXQiOjE1MzY3MTk3MTYsImV4cCI6MTUzOTMxMTcxNn0.DnPigBoD2_zW9YsTF14jQy4EbV_N-dHhYDEBNpiPeLA"
};

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { imageData: null };
  }
  componentDidMount() {
    let url = API_URL + "/homepageimage";

    axios
      .get(url)
      .then(response => {
        // handle success
        const imageData = response.data;
        imageData && this.setState({ imageData });
      })
      .catch(error => {
        // handle error
      });
  }

  render() {
    const imageData = this.state.imageData;
    if (imageData === null) return null;
    return <div />;
  }
}

export default Container;
