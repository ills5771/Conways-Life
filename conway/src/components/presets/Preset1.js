import React from "react";

const Preset1 = () => {
    return (

    )

  handleRandom = () => {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.board[y][x] = Math.random() >= 0.5;
      }
      this.stopGame();
    }
    this.setState({
      counter: 0,
      cells: this.makeCells()
    });
  };



};

export default Preset1;
