import React from 'react';
import Header from '../components/header.jsx'
import SideBar from '../components/sideBar.jsx'

const App = (props) => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="container-fluid">
        <div className="side-body padding-top">
		      {props.children}
		    </div>
		  </div>
    </div>
  );
};

export default App;