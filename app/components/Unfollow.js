var React = require('react');
var ReactDOM = require('react-dom');

//Defaults to Unfollow
class Unfollow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

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
        className={this.state.isToggleOn ? 'button-red' : 'button-green'}
        onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Unfollow' : 'Follow'}
      </button>
    );
  }
}

module.exports = Unfollow;
