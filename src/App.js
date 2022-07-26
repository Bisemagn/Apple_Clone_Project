import React, { Component } from "react";

// import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./classComponents/Header/Header";
import Footer from "./classComponents/Footer/Footer";
import AlertSec from "./classComponents/AlertSec/AlertSec";
import FirstSec from "./classComponents/FirstSec/FirstSec";
import SecondSec from "./classComponents/SecondSec/SecondSec";
import ThirdSec from "./classComponents/ThirdSec/ThirdSec";
import FourthSec from "./classComponents/FourthSec/FourthSec";
import FifthSex from "./classComponents/FifthSec/FifthSex";
import SixthSec from "./classComponents/SixthSec/SixthSec";
import YoutubeVideos from "./classComponents/YouTube/YoutubeVideos";

class App extends Component {
  render() {
    return (
      <div>
        {/* <router> */}
        {/* <Route path="/mac" exact component={Mac} /> */}
        <Header />
        {/* </router> */}
        <AlertSec />
        <FirstSec />
        <SecondSec />
        <ThirdSec />
        <FourthSec />
        <FifthSex />
        <SixthSec />
        <YoutubeVideos />
        <Footer />
      </div>
    );
  }
}
export default App;
