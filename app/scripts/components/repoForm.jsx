import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import Util from '../helpers/util';
import RepoStore from '../stores/repoStore';
import RepoActions from '../actions/repoActions';

class RepoForm extends React.Component {
  constructor(props) {
    super(props);
    this.repoId = props.repoId;
    this.state = {
      loading: false,
      data: {},
      urlInputEnabled: false
    }
  }

  componentDidMount() {
    this.unsubscribe = RepoStore.listen(this.onStatusChange.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.props.history.pushState(null, '/repos');
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true }, this.sendFormData);
  }

  handleUrlInput(event) {
    event.preventDefault();
    let value = event.target.value;
    if (!value || value === 'no_content') {
      this.setState({urlInputEnabled: false});
    } else {
      this.setState({urlInputEnabled: true});
    }
  }

  sendFormData() {
    let data = {};
    data.name = ReactDOM.findDOMNode(this.refs.name).value;
    let url = ReactDOM.findDOMNode(this.refs.url).value;
    data.task = ReactDOM.findDOMNode(this.refs.task).value;
    if (!url) {
      data.no_content = true;
    } else {
      data.url = url;
    }
    RepoActions.createRepo(data);
    console.dir(data);
    // this.setState({ loading: false });
  }

  render() {
    return (
      <div className={'card ' + (this.state.loading ? 'loader' : '') }>
        <div className="card-header">
          <div className="card-title">
            <h2 className="title">Create repository</h2>
          </div>
        </div>
        <div className="card-body">
          { Util.getLoader() }
          <form onSubmit={ this.handleSubmit.bind(this) }>
            <div className="form-group">
              <label htmlFor="name">Repository name</label>
              <input type="text" ref="name" name="name" className="form-control" placeholder="Repository name" />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <select name="type" className="form-control" onChange={this.handleUrlInput.bind(this)} aria-describedby="type_help_text">
                <option></option>
                <option value="url">URL</option>
                <option value="iso_path">ISO path</option>
                <option value="no_content">No content</option>
              </select>
              <p id="type_help_text" className="help-block">
                You can create three types of repositories:
                <ul className="help-block">
                  <li>Those that reference content available on another server, for example, on a mirror you maintain <mark>(url)</mark></li>
                  <li>Those where Razor unpacks ISOs for you and serves their contents <mark>(iso_url)</mark></li>
                  <li>Those where Razor creates a stub directory that you can manually fill with content <mark>(no_content)</mark></li>
                </ul>
              </p>
            </div>
            <div className="form-group">
              <input disabled={ !this.state.urlInputEnabled } type="text" ref="url" name="url" className="form-control" placeholder="URL (URL or ISO path or no-content)" />
            </div>
            <div className="form-group">
              <label htmlFor="task">Task</label>
              <select className="form-control" name="task" ref="task" onChange={this.handleUrlInput} aria-describedby="task_help_text">
                <option></option>
                <option value="puppet">Puppet</option>
                <option value="noop">Noop</option>
              </select>
              <p id="task_help_text" className="help-block">Default task that should be used when installing machines using this repository, If you’re not using a task, reference the stock task <mark>noop</mark></p>
            </div>
            <button type="submit" className="btn btn-info">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default RepoForm;