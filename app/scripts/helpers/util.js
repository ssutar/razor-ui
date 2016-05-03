import React from 'react';

export default {
	getPageTitle(title, description) {
		return (
        <div className="page-title">
          <h1 className="title">{title}</h1>
          <div className="description">{description}</div>
        </div>
      );
	},

 getLoader() {
	return (
			<div className="loader-container text-center color-white">
        <i className="fa fa-spinner fa-pulse fa-3x"></i>
        <p>Loading</p>
      </div>
    );
	}
}