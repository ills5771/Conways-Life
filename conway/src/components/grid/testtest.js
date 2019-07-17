for (let y = 0; y < this.rows; y++) {
  for (let x = 0; x < this.cols; x++) {
    let neighbors = this.calculateNeighbors(this.board, x, y);
    if (this.board[y][x]) {
      if (neighbors === 2 || neighbors === 3) {
        newBoard[y][x] = true;
      } else {
        newBoard[y][x] = false;
      }
    } else {
      if (!this.board[y][x] && neighbors === 3) {
        newBoard[y][x] = true;
      }
    }
  }
}
