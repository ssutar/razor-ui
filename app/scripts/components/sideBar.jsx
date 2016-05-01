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
              <div className="title">Flat Admin V.2</div>
            </Link>
            <button type="button" className="navbar-expand-toggle pull-right visible-xs">
              <i className="fa fa-times icon"></i>
            </button>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/home">
                <span className="icon fa fa-tachometer"></span><span className="title">Dashboard</span>
              </Link>
            </li>
            <li className="panel panel-default dropdown">
              <a data-toggle="collapse" href="#dropdown-element">
                <span className="icon fa fa-desktop"></span><span className="title">UI Kits</span>
              </a>
              <div id="dropdown-element" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul className="nav navbar-nav">
                    <li><a href="ui-kits/theming.html">Theming</a>
                    </li>
                    <li><a href="ui-kits/grid.html">Grid</a>
                    </li>
                    <li><a href="ui-kits/button.html">Buttons</a>
                    </li>
                    <li><a href="ui-kits/card.html">Cards</a>
                    </li>
                    <li><a href="ui-kits/list.html">Lists</a>
                    </li>
                    <li><a href="ui-kits/modal.html">Modals</a>
                    </li>
                    <li><a href="ui-kits/alert.html">Alerts & Toasts</a>
                    </li>
                    <li><a href="ui-kits/panel.html">Panels</a>
                    </li>
                    <li><a href="ui-kits/loader.html">Loaders</a>
                    </li>
                    <li><a href="ui-kits/step.html">Tabs & Steps</a>
                    </li>
                    <li><a href="ui-kits/other.html">Other</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="panel panel-default dropdown">
              <a data-toggle="collapse" href="#dropdown-table">
                <span className="icon fa fa-table"></span><span className="title">Table</span>
              </a>
              <div id="dropdown-table" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul className="nav navbar-nav">
                    <li><a href="table/table.html">Table</a>
                    </li>
                    <li><a href="table/datatable.html">Datatable</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="panel panel-default dropdown">
              <a data-toggle="collapse" href="#dropdown-form">
                <span className="icon fa fa-file-text-o"></span><span className="title">Form</span>
              </a>
              <div id="dropdown-form" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul className="nav navbar-nav">
                    <li><a href="form/ui-kits.html">Form UI Kits</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="panel panel-default dropdown">
              <a data-toggle="collapse" href="#component-example">
                <span className="icon fa fa-cubes"></span><span className="title">Components</span>
              </a>
              <div id="component-example" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul className="nav navbar-nav">
                    <li><a href="components/pricing-table.html">Pricing Table</a>
                    </li>
                    <li><a href="components/chartjs.html">Chart.JS</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="panel panel-default dropdown">
              <a data-toggle="collapse" href="#dropdown-example">
                <span className="icon fa fa-slack"></span><span className="title">Page Example</span>
              </a>
              <div id="dropdown-example" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul className="nav navbar-nav">
                    <li><a href="pages/login.html">Login</a>
                    </li>
                    <li><a href="pages/index.html">Landing Page</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="panel panel-default dropdown">
              <a data-toggle="collapse" href="#dropdown-icon">
                <span className="icon fa fa-archive"></span><span className="title">Icons</span>
              </a>
              <div id="dropdown-icon" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul className="nav navbar-nav">
                    <li><a href="icons/glyphicons.html">Glyphicons</a>
                    </li>
                    <li><a href="icons/font-awesome.html">Font Awesomes</a>
                    </li>
                  </ul>
                </div>
              </div>
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