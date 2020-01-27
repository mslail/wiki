import React, { Component } from 'react';
import './errorpage.styles.css';
import { Link } from 'react-router-dom';

class ErrorPage extends Component {
  render() {
    return (
      <div className="error-page container-fluid">
        <div className="error-page-text-container">
          <h1>404</h1>
          <h2>Error</h2>
          <p>Well, what to say. Hmm? Sorry ...</p>
          <p>
            <Link className="error-btn btn btn-home btn-primary" to="/">
              home
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
