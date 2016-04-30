import Reflux from 'reflux';
import $ from 'jquery';

const RepoActions = Reflux.createActions({
  'loadItems': {children: ['completed', 'failed']}
});

RepoActions.loadItems.listen(function(){
  $.get('/api/collections/repos')
  .then((response) => this.completed(response.items))
  .fail((error) => this.failed(error));
});

export default RepoActions;