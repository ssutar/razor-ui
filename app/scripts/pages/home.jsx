import React from 'react';
import RepoTable from '../components/repoTable.jsx';
import RepoStore from '../stores/repoStore';
import RepoActions from '../actions/repoActions';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading: false
    };
  }

  componentDidMount() {
    this.unsubscribe = RepoStore.listen(this.onStatusChange.bind(this));
    RepoActions.loadItems();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <div className="page-title">
          <h1 className="title">Repositories</h1>
          <div className="description">List of repositories on the server</div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  <h2 className="title">Repositories</h2>
                </div>
              </div>
              <div className="card-body">
                <RepoTable { ...this.state } />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;