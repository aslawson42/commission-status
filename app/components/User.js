var React = require('react');
var Link = require('react-router-dom').Link;
var Publish = require('./Publish');

class User extends React.Component {
  render() {
    return (
      <div>
        <h1>User</h1>
        <h2>[Profile Picture]</h2>
        <h2>Andrew</h2>
        <h3>100 Followers</h3>
        <p><strong>[Follow Button]</strong></p>
        <h3>Status: CLOSED</h3>
        <p><strong>[Switch]</strong></p>
        <Publish />
      </div>
    )
  }
}

module.exports = User;
