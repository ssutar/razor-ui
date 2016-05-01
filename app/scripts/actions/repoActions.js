import Reflux from 'reflux';
import $ from 'jquery';

const RepoActions = Reflux.createActions({
  'loadRepos': {children: ['success', 'failure']}
});

RepoActions.loadRepos.listen(function(path){
  $.get('/api/collections/' + path)
  .then((response) => this.success(response))
  .fail((error) => this.failure(error));
});

export default RepoActions;