import React from 'react';
import Util from '../helpers/util';
import RepoTable from '../components/repoTable.jsx';

class Home extends React.Component {
  render() {
    return (
      <div>
        { Util.getPageTitle('Repositories', 'List of repositories on the server') }
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