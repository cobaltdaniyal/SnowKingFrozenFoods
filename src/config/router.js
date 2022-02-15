import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import Home from '../components/Home/Home.js'

class Approuter extends Component {
    render() {
        return (
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
        )
    }
}
export default Approuter;