import React from 'react';
import RepoTable from '../components/repoTable.jsx';
import Util from '../helpers/util.js';

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render(props) {
    return (
      <div>
        { Util.getPageTitle('Repositories', 'List of repositories on the server') }
        <div className="row">
          <div className="col-xs-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Repos;