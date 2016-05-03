import React from 'react';
import RepoForm from '../components/repoForm.jsx';

class Repos extends React.Component {
  render() {
    return (
      <div>
        <div className="page-title">
          <h1 className="title">Add new repository</h1>
          <div className="description"></div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <RepoForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Repos;