import React from 'react';
import './editwiki.styles.css';
import { Link } from 'react-router-dom';

const EditWiki = ({
  name,
  description,
  editWikiDescription,
  saveWiki,
  history
}) => (
  <div className="edit-wiki">
    <h1>Edit</h1>
    <h4>{name}</h4>
    <form>
      <div className="form-group row">
        <label htmlFor="description" className="col-sm-2 col-form-label">
          Description
        </label>
        <div className="col-sm-10">
          <input
            onChange={e => editWikiDescription(name, e.target.value)}
            value={description || ''}
            type="text"
            className="form-control"
            id="description"
          />
        </div>
      </div>
      <div
        onClick={() => {
          saveWiki(name, description);
          history.push('/');
        }}
        className="edit-btn btn btn-home btn-primary">
        Submit
      </div>
      <Link className="edit-btn btn btn-home btn-info" to={'/'}>
        Cancel
      </Link>
    </form>
  </div>
);

export default EditWiki;
