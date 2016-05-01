import React from 'react';
import RepoTable from '../components/repoTable.jsx';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="page-title">
          <h1 className="title">Repositories</h1>
          <div className="description">List of repositories on the server</div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <RepoTable path="repos"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;