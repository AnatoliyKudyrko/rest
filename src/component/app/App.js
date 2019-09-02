import React from 'react';
import Head from "../head/head";
import Randomplanets from "../randomplanets/randomplanets";
import NamePeople from "../peopleName/index";


export default class App extends React.Component{
  render() {
    return(
        <div>
        <Head />
        <Randomplanets />
        <NamePeople />
        </div>
    )
  }
}

