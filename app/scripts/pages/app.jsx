import React from 'react';
import Header from '../components/header.jsx'
import SideBar from '../components/sideBar.jsx'

const App = (props) => {
    return (
      <div>
        <Header />
        <SideBar />
        <main className="cd-main-content">
			    <div className="content-wrapper">
			      {props.children}
			    </div>
			  </main>
      </div>
    );
};

export default App;