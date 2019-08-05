import React from "react";

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers: [[1, 2, 3], [4, 5, 6], [7, 8, 0]],
      empty: [2, 2]
    };
  }

  render() {
    return (
      <>
        <Row numbers={this.state.numbers[0]} />
        <Row numbers={this.state.numbers[1]} />
        <Row numbers={this.state.numbers[2]} />
      </>
    );
  }
}

function Row(props) {
  return (
    <div>
      {props.numbers.map(item => (
        <Tile key={item} num={item} />
      ))}
    </div>
  );
}

function Tile(props) {
  return (
    <div className="Tile">
      {props.num > 0 && <span>{props.num}</span>}
      {props.num === 0 && <span />}
    </div>
  );
}
