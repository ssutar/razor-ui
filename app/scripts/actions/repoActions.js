import Reflux from 'reflux';
// import $ from 'jquery';

const RepoActions = Reflux.createActions({
  'loadRepos': {children: ['success', 'failure']},
  'createRepo': {children: ['success', 'failure']},
  'deleteRepo': {children: ['success', 'failure']}
});

RepoActions.loadRepos.listen(function(path){
  $.get('/api/collections/' + path)
  .done((response) => this.success(response))
  .fail((error) => this.failure(error));
});

RepoActions.createRepo.listen(function(repo){
  $.post({
  	url: '/api/commands/create-repo',
  	data: JSON.stringify(repo)
  })
  .done((response) => this.success(response))
  .fail((error) => this.failure(error));
});

RepoActions.deleteRepo.listen(function(repoName){
  $.post({
  	url: '/api/commands/delete-repo',
  	data: JSON.stringify({name: repoName})
  })
  .done((response) => this.success(response))
  .fail((error) => this.failure(error));
});



export default RepoActions;