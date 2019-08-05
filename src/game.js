import React from "react";

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers: [[5, 3, 7], [6, 1, 8], [4, 0, 2]],
      empty: [2, 1],
      message: "",
      attempts: 0,
      isFinalState: false
    };
  }

  isWinningMove() {
    let numbers = this.state.numbers;
    if (numbers.toString() === "1,2,3,4,5,6,7,8,0") {
      return true;
    }
    return false;
  }
  isValidMove(move) {
    if (
      move[0] === this.state.empty[0] &&
      Math.abs(this.state.empty[1] - move[1]) === 1
    ) {
      return true;
    }
    if (
      move[1] === this.state.empty[1] &&
      Math.abs(this.state.empty[0] - move[0]) === 1
    ) {
      return true;
    }
    return false;
  }
  clickHandler = (row, col) => {
    if (this.state.isFinalState) {
      return;
    }
    this.updateMessage("");
    if (this.isValidMove([row, col])) {
      let numbers = this.state.numbers.slice();
      let selection = numbers[row][col];
      numbers[this.state.empty[0]][this.state.empty[1]] = selection;
      numbers[row][col] = 0;
      this.setState({
        numbers,
        empty: [row, col]
      });
      this.setState({
        attempts: this.state.attempts + 1
      });
      if (this.isWinningMove()) {
        this.setState({
          isFinalState: true
        });
        this.updateMessage("Yay!! You've Won!");
      }
    } else {
      this.updateMessage("Invalid Move :(");
    }
  };
  updateMessage(message) {
    this.setState({ message });
  }
  render() {
    return (
      <>
        {this.state.numbers.map((item, index) => (
          <Row
            numbers={item}
            key={index}
            row={index}
            clickHandler={this.clickHandler}
          />
        ))}
        <div>Attempts {this.state.attempts}</div>
        <div>{this.state.message}</div>
      </>
    );
  }
}

function Row(props) {
  return (
    <div>
      {props.numbers.map((item, index) => (
        <Tile
          key={index}
          row={props.row}
          col={index}
          num={item}
          clickHandler={props.clickHandler}
        />
      ))}
    </div>
  );
}

function Tile(props) {
  return (
    <div
      className={props.num === 0 ? "Tile empty" : "Tile"}
      onClick={props.clickHandler.bind(this, props.row, props.col)}
    >
      {props.num > 0 && <span>{props.num}</span>}
      {props.num === 0 && <span />}
    </div>
  );
}
