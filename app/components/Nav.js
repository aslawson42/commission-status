var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <div className='nav-container'>
      <ul className='nav'>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            <i className="material-icons">home</i><br />Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/search'>
            <i className="material-icons">search</i><br />Search
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/user'>
            <i className="material-icons">account_circle</i><br />User
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/options'>
            <i className="material-icons">settings</i><br />Options
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

module.exports = Nav;
