import React, { Component } from "react";
import "./App.css";
import NavBarItem from "./NavBarItem";
import FooterContent from "./FooterContent";
import AppRouter from "./AppRouter";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Header elements */}
        <NavBarItem />
        {/* <FlexNav />
        <MobileMenu /> */}
        {/* different pages from the router gets loaded here */}
        <AppRouter />
        <div className="bgLayer" />
        <FooterContent />
      </div>
    );
  }
}

export default App;
