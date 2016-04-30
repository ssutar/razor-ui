import Reflux from 'reflux';
import RepoActions from '../actions/repoActions';

let RepoStore = Reflux.createStore({
  listenables: RepoActions,

  init() {
    this.items = [];
  },

  loadItems() {
    this.trigger({
      loading: true
    });
  },

  loadItemsCompleted(items) {
    this.items = items;

    this.trigger({
      items : this.items,
      loading: false
    });
  },

  loadItemsFailed(error) {
    this.trigger({
      error : error,
      loading: false
    });
  }

});

export default RepoStore;