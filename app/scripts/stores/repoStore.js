import Reflux from 'reflux';
import RepoActions from '../actions/repoActions';

let RepoStore = Reflux.createStore({
  listenables: RepoActions,

  init() {
    this.items = [];
    this.numberOfItems = 0;
  },

  loadRepos() {
    this.trigger({
      loading: true
    });
  },

  loadReposSuccess(response) {
    this.items = response.items;
    this.numberOfItems = response.total;

    this.trigger({
      numberOfItems: this.numberOfItems,
      items : this.items,
      loading: false
    });
  },

  loadReposFailure(error) {
    this.trigger({
      error : error,
      loading: false
    });
  }

});

export default RepoStore;