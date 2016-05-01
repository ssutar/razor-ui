import React from 'react';
import RepoStore from '../stores/repoStore';
import RepoActions from '../actions/repoActions';

class RepoTable extends React.Component {
  constructor(props) {
    super(props);
    this.path = props.path;
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

  render() {
    let items = this.state.items.map(item => {
      return (
        <tr key={ item.id }>
          <td>{ item.name }</td>
          <td>{ item.id }</td>
          <td>{ item.spec }</td>
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
        </div>
        <div className="card-body">
          {loading}
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Spec</th>
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