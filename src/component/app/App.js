import React from 'react';
import Head from "../head/head";
import Randomplanets from "../randomplanets/randomplanets";

export default class App extends React.Component{
  render() {
    return(
        <div>
        <Head />
        <Randomplanets />
        </div>
    )
  }
}

