// your Bomb code here!
export default class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {secondsLeft: this.props.initialCount}
  }

  render() {
    return(
      <div>{this.state.secondsLeft ? `${this.state.}`}</div>
    )
  }
}
