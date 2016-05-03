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
  },

  createRepo() {
    this.trigger({
      loading: true
    })
  },

  createRepoSuccess(response) {
    this.trigger({
      success : true,
      loading: false
    });
  },

  createRepoFailure(error) {
    this.trigger({
      error : true,
      loading: false
    });
  },

  deleteRepo() {
    this.trigger({
      loading: true
    })
  },

  deleteRepoSuccess(response) {
    this.items = [];
    this.numberOfItems = 0;
    this.trigger({
      numberOfItems: this.numberOfItems,
      items : this.items,
      loading: false
    });
  },

  deleteRepoFailure(error) {
    this.trigger({
      error : true,
      loading: false
    });
  }

});

export default RepoStore;