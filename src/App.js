import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Films from './Films'
import Chars from './Chars'
import Species from './Species'
import Vehicles from './Vehicles'
import Starships from './Starships'
import Planets from './Planets'

import NavBar from './components/NavBar'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      people: [],
      species: [],
      vehicles: [],
      starships: [],
      planets: [],
    };
  }

  componentDidMount() {
    Promise.all([
      fetch('https://swapi.co/api/films/'),
      fetch('https://swapi.co/api/people/'),
      fetch('https://swapi.co/api/species/'),
      fetch('https://swapi.co/api/vehicles/'),
      fetch('https://swapi.co/api/starships/'),
      fetch('https://swapi.co/api/planets/'),
    ])
      .then(([res1, res2, res3, res4, res5, res6]) =>
        Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json()]))
      .then(([data1, data2, data3, data4, data5, data6, data7]) =>
        this.setState({
          films: data1.results.sort((a, b) => a.episode_id - b.episode_id),
          people: data2.results,
          species: data3.results,
          vehicles: data4.results,
          starships: data5.results,
          planets: data6.results,
      }));
  }

  render() {
    return (
      <Router>
        <NavBar>
        <Link to="/films">Films</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/species">Species</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/starships">Starships</Link>
        <Link to="/planets">Planets</Link>

        </NavBar>
        <Route
          path='/films'
          render={(props) => <Films films={this.state.films}/>}
        />
        <Route
          path='/characters'
          render={(props) => <Chars chars={this.state.people}/>}
        />
        <Route
          path='/species'
          render={(props) => <Species species={this.state.species}/>}
        />
        <Route
          path='/vehicles'
          render={(props) => <Vehicles vehicles={this.state.vehicles}/>}
        />
        <Route
          path='/starships'
          render={(props) => <Starships starships={this.state.starships}/>}
        />
        <Route
          path='/planets'
          render={(props) => <Planets planets={this.state.planets}/>}
        />
      </Router>

    );
  }
}
