import React from 'react';

const RepoTable = (props) => {
  debugger;
    let items = props.items.map(item => {
      return (
        <tr key={ item.id }>
          <td>{ item.name }</td>
          <td>{ item.id }</td>
          <td>{ item.spec }</td>
        </tr>
      );
    }),
    loading = props.loading ? <div className="loading-label">Loading...</div> : '';

    return (
      <div>
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
    );
};

RepoTable.propTypes = {
  loading : React.PropTypes.bool,
  items : React.PropTypes.array
}

export default RepoTable;