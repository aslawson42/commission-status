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
          <li><i className="material-icons check-on">check_circle</i>Email - <i className="material-icons">check_box</i>For Openings, <i className="material-icons">check_box_outline_blank</i>For Closings</li>
          <li><i className="material-icons check-off">cancel</i>Text - <i className="material-icons">check_box_outline_blank</i>For Openings, <i className="material-icons">check_box</i>For Closings</li>
          <li><i className="material-icons check-off">cancel</i>Push - <i className="material-icons">check_box</i>For Openings, <i className="material-icons">check_box_outline_blank</i>For Closings</li>
        </ul>
        <h2>Followed List</h2>
        <h3><i className="material-icons">indeterminate_check_box</i>Unfollow Selected</h3>
        <ul>
          <li><i className="material-icons">check_box</i>Alice - <strong>Unfollow</strong></li>
          <li><i className="material-icons">check_box_outline_blank</i>Bob - <strong>Unfollow</strong></li>
          <li><i className="material-icons">check_box</i>Carlos - <strong>Unfollow</strong></li>
          <li><i className="material-icons">check_box_outline_blank</i>Dmitri - <strong>Unfollow</strong></li>
        </ul>
      </div>
    )
  }
}

module.exports = Options;
