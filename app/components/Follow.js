var React = require('react');
var ReactDOM = require('react-dom');

//Defaults to Follow
class Follow extends React.Component {
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
        className={this.state.isToggleOn ? 'button-green' : 'button-red'}
        onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Follow' : 'Unfollow'}
      </button>
    );
  }
}

module.exports = Follow;
