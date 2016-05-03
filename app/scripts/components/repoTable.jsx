import React from 'react';
import RepoStore from '../stores/repoStore';
import RepoActions from '../actions/repoActions';
import { Link } from 'react-router';

class RepoTable extends React.Component {
  constructor(props) {
    super(props);
    this.path = props.path || 'repos';
    this.state = {
      numberOfItems: 0,
      loading: true,
      items: []
    }
  }

  componentDidMount() {
    this.unsubscribe = RepoStore.listen(this.onStatusChange.bind(this));
    RepoActions.loadRepos(this.path);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  deleteRepo(repoName) {
    console.log(repoName);
    RepoActions.deleteRepo(repoName);
  }

  render() {
    let items = this.state.items.map(item => {
      return (
        <tr key={ item.id }>
          <td>{ item.name }</td>
          <td>{ item.id }</td>
          <td>{ item.spec }</td>
          <td><button className="btn btn-default btn-xs" onClick={this.deleteRepo.bind(this, item.name)}>Remove</button></td>
        </tr>
      );
    }),

    loading = this.state.loading ? <div className="loading-label">Loading...</div> : '';

    return (
      <div className="card">
        <div className="card-header">
          <div className="card-title">
            <h2 className="title">Repositories ({this.state.numberOfItems})</h2>
          </div>
          <div className="pull-right card-action">
            <Link className="btn btn-info" to="/repos/create">
              Create new repository
            </Link>
          </div>
        </div>
        <div className="card-body">
          {loading}
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Spec</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RepoTable;