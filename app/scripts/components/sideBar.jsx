import React from 'react';
import { Link } from 'react-router';

const SideBar = (props) => {
	return (
		<nav className="cd-side-nav">
      <ul>
        <li className="cd-label">Main</li>
        <li className="has-children overview">
          <Link to="info">Overview</Link>
        </li>
        <li className="has-children notifications active">
          <Link to="info">Notifications<span className="count">3</span></Link>
        </li>
        <li className="has-children comments">
          <Link to="info">Comments</Link>
        </li>
      </ul>
      <ul>
        <li className="cd-label">Secondary</li>
        <li className="has-children bookmarks">
          <Link to="info">Bookmarks</Link>
        </li>
        <li className="has-children images">
          <Link to="info">Images</Link>
        </li>
        <li className="has-children users">
          <Link to="info">Users</Link>
        </li>
      </ul>
      <ul>
        <li className="cd-label">Action</li>
        <li className="action-btn"><a href="#0">+ Button</a></li>
      </ul>
    </nav>
	);
}

export default SideBar;