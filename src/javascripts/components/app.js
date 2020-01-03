import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { HeaderAppBar } from './HeaderAppBar'

const App = () => (
  <Router>
    <div>
      <HeaderAppBar />
      <Route exact path='/' component={Youtubes} />
      <Route path='/youtubes' component={Youtubes} />
      <Route path='/ustreams' component={Ustreams} />
      <Route path='/members' component={Members} />
      <Route path='/unit_groups' component={UnitGroups} />
      <Route path='/artists' component={Artists} />
      <Route path='/musical_instruments' component={MusicalInstruments} />
      <Route path='/musical_instrument_player' component={MusicalInstrumentsPlayer} />
      <Route path='/genre' component={Genre} />
    </div>
  </Router>
)

const Youtubes = () => (
  <div>
    youtube
  </div>
)
const Ustreams = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Members = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const MusicalInstruments = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const MusicalInstrumentsPlayer = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Artists = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const UnitGroups = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Genre = () => (
  <div>
    <h2>Home</h2>
  </div>
)

export default App
