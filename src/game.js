import React from "react";

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers: [[1, 2, 3], [4, 5, 6], [7, 8, 0]],
      empty: [2, 2]
    };
  }

  clickHandler = (row, col) => {
    console.log(row, col);
  };

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
      className="Tile"
      onClick={props.clickHandler.bind(this, props.row, props.col)}
    >
      {props.num > 0 && <span>{props.num}</span>}
      {props.num === 0 && <span />}
    </div>
  );
}
