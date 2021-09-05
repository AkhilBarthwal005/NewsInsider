import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsComponent from "./Components/NewsComponent";
import Footer from "./Components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <NewsComponent pageSize="6" country="in" category="sports" />
        <Footer />
      </div>
    );
  }
}
