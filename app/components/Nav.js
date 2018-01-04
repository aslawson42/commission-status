var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/search'>
          Search
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/user'>
          User
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/options'>
          Options
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;