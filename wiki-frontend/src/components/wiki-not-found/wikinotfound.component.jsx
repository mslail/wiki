import React from 'react';
import './wikinotfound.styles.css';
import { Link } from 'react-router-dom';

const WikiNotFound = ({ name }) => (
  <div className="wiki-not-found">
    <div className="wiki-not-found container-fluid">
      <div className="wiki-not-found-text-container">
        <h1>{name}</h1>
        <h2>No article with this exact name found.</h2>
        <p>Use Edit button to add it.</p>
        <p>
          <Link
            className="edit-btn btn btn-home btn-primary"
            to={`/edit/${name}`}>
            Edit
          </Link>
          <Link className="edit-btn btn btn-home btn-info" to={'/'}>
            Cancel
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default WikiNotFound;
