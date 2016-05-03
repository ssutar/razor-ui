import React from 'react';
import { Link } from 'react-router';

const SideBar = (props) => {
	return (
		<div className="side-menu sidebar-inverse">
      <nav className="navbar navbar-default" role="navigation">
        <div className="side-menu-container clearfix">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <div className="icon fa fa-paper-plane"></div>
              <div className="title">Razor UI</div>
            </Link>
            <button type="button" className="navbar-expand-toggle pull-right visible-xs">
              <i className="fa fa-times icon"></i>
            </button>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/repos">
                <span className="icon fa fa-tachometer"></span><span className="title">Repositories</span>
              </Link>
            </li>
            <li>
              <Link to="/info">
                <span className="icon fa fa-thumbs-o-up"></span><span className="title">License</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
	);
}

export default SideBar;