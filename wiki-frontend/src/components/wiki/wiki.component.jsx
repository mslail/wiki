import React from 'react';
import './wiki.styles.css';
import { Link } from 'react-router-dom';

const Wiki = ({ name, description }) => (
  <div className="wiki" key={name}>
    <Link className="link" to={`/${name}`}>
      <h3>{name}</h3>
    </Link>
    <p>{description}</p>
    <Link className="edit-btn btn btn-home btn-primary" to={`/edit/${name}`}>
      Edit
    </Link>
  </div>
);

export default Wiki;
