var React = require('react');
var Link = require('react-router-dom').Link;

class Options extends React.Component {
  render() {
    return (
      <div>
        <h1>Options</h1>
        <h2>User Options</h2>
        <ul>
          <li>Edit Profile Pic</li>
          <li>Edit Username</li>
          <li>Change Password</li>
          <li>Change Email</li>
          <li>Change Phone Number</li>
        </ul>
        <h2>Notification Options</h2>
        <ul>
          <li>Email - For Openings, For Closings</li>
          <li>Text - For Openings, For Closings</li>
          <li>Push - For Openings, For Closings</li>
        </ul>
        <h2>Followed List</h2>
        <h3>Unfollow Selected</h3>
        <ul>
          <li>Alice - Unfollow</li>
          <li>Bob - Unfollow</li>
          <li>Carlos - Unfollow</li>
          <li>Dmitri - Unfollow</li>
        </ul>
      </div>
    )
  }
}

module.exports = Options;
