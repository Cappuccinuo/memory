import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

// Set the card type and match number
const uniqueCards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export default function run_demo(root) {
  ReactDOM.render(<Demo />, root);
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  initialState() {
    return {
      cards: [],
      moves: 0,
      selected: [],
    }
  }

  gameBoard() {
    return (
      <div id="gameBoard">
        Hello Memory
      </div>
    )
  }

  restart() {
    this.setState(this.initialState());
  }

  render() {
    const gameboard = this.gameBoard();
    return (
      <div>
        <div className="endMsg"></div>
        <div className="score">
          <span>Score:  {this.state.moves}</span>
        </div>
        {gameboard}
      </div>
    );
  }
}
