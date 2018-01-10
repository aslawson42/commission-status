var React = require('react');
var Link = require('react-router-dom').Link;
var Follow = require('./Follow');
var Unfollow = require('./Unfollow');

class Notification extends React.Component {
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
          {this.state.isToggleOn ? <i className="material-icons check-on">check_circle</i> : <i className="material-icons check-off">cancel</i>}
      </button>
    );
  }
}

class Checkbox extends React.Component {
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
        onClick={this.handleClick}>
          {this.state.isToggleOn ? <i className="material-icons check-on">check_box</i> : <i className="material-icons check-off">check_box_outline_blank</i>}
      </button>
    );
  }
}

class Follow_List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var names = ['Alice', 'Bob', 'Carlos', 'Dmitri'];
    return (
      <ul>
        {names.map((name, index) => {
          return <li key={ index }><Checkbox />{ name } - <Unfollow /></li>;
        })}
      </ul>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div className='main'>
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
          <li><Notification />Email - <Checkbox />For Openings <Checkbox />For Closings</li>
          <li><Notification />Text - <Checkbox />For Openings <Checkbox />For Closings</li>
          <li><Notification />Push - <Checkbox />For Openings <Checkbox />For Closings</li>
        </ul>
        <h2>Follow List</h2>
        <button className="button-red">Unfollow Selected</button>
        <Follow_List />
      </div>
      //Make "Unfollow Selected" button clear all the checkboxes and change all buttons to "Follow" in Follow List
    )
  }
}

module.exports = Options;
