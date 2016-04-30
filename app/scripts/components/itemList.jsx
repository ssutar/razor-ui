import React from 'react';

const ItemList = (props) => {
  debugger;
    let items = props.items.map(item => <li key={ item.id }>{ item.name }</li>),
      loading = props.loading ? <div className="loading-label">Loading...</div> : '';

    return (
      <div>
        {loading}
        <ul>
          {items}
        </ul>
      </div>
    );
};

ItemList.propTypes = {
  loading : React.PropTypes.bool,
  items : React.PropTypes.array
}

export default ItemList;