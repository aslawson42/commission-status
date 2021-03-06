var React = require('react');
var Link = require('react-router-dom').Link;
var Publish = require('./Publish');
var Follow = require('./Follow');

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button
        className={this.state.isToggleOn ? 'button-green' : 'button-red'}
        onClick={this.handleClick}>
          {this.state.isToggleOn ? <div>OPEN<i className="material-icons check-on">check_circle</i></div> : <div>CLOSED<i className="material-icons check-off">cancel</i></div>}
      </button>
    );
  }
}

class User extends React.Component {
  render() {
    return (
      <div className='main'>
        <h1>User</h1>
        <h2><i className="material-icons md-48">account_circle</i> Andrew</h2>
        <h3>100 Followers</h3>
        <Follow />
        <h3>Status: <Status /></h3>
        <Publish />
      </div>
    )
  }
}

module.exports = User;
