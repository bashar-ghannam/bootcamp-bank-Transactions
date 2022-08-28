import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Operations from './components/Operations';
import Transcations from './components/Transcations';
import Loading from './components/Loading';
import Categorys from './components/Categorys';

class App extends Component {
  constructor() {
    super();
    this.state = {
      transcations: [],
      balance: 0,
      isLoading: false,
      categorys: [],
    };
  }

  componentDidMount() {
    this.getTranscations();
  }

  getTranscations = async () => {
    let transcations = await axios.get('http://localhost:4200/transactions');
    await this.setState({
      transcations: transcations.data,
      isLoading: true,
    });
    this.getBalance(transcations.data);
  };

  addTranscation = async (transcation) => {
    await axios.post('http://localhost:4200/transaction', transcation);
    this.getTranscations();
  };

  deleteTranscation = async (transcationID) => {
    await axios.delete(`http://localhost:4200/transaction/${transcationID}`);
    this.getTranscations();
  };

  getBalance(transcations) {
    let balance = 0;
    transcations.forEach((transcation) => {
      balance += transcation.amount;
    });
    this.setState({ balance });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <span className="navbar-brand">
                <span className="logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-bank2"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z" />
                  </svg>
                </span>
                Bank Transcations
              </span>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/operations" className="nav-link">
                      Add Transcation
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/categorys" className="nav-link">
                      Categorys
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="main">
            {this.state.isLoading ? (
              <Routes>
                <Route
                  path="/"
                  element={
                    <Transcations
                      transcations={this.state.transcations}
                      deleteTranscation={this.deleteTranscation}
                      balance={this.state.balance}
                    />
                  }
                />
                <Route
                  path="/operations"
                  element={<Operations addTranscation={this.addTranscation} />}
                />
                <Route
                  path="/categorys"
                  element={
                    <Categorys
                      categorys={this.state.categorys}
                      balance={this.state.balance}
                    />
                  }
                />
              </Routes>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
