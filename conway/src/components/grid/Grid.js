import React, { Component } from "react";
import Cell from "./Cell";

import "./Grid.css";

const corners = [
  [true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true],
  [true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,true, true, true, true, true],
  [true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true],
  [true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true],
  [true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  [true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true],
  [true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true],
  [true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true],
  [true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true],
  [true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true],
  ]


  const smile = [
    { x: 36, y: 11 },
    { x: 14, y: 12 },
    { x: 36, y: 12 },
    { x: 14, y: 13 },
    { x: 36, y: 13 },
    { x: 14, y: 14 },
    { x: 36, y: 14 },
    { x: 14, y: 15 },
    { x: 36, y: 15 },
    { x: 14, y: 16 },
    { x: 36, y: 16 },
    { x: 14, y: 17 },
    { x: 39, y: 25 },
    { x: 11, y: 26 },
    { x: 38, y: 27 },
    { x: 13, y: 28 },
    { x: 36, y: 29 },
    { x: 14, y: 31 },
    { x: 34, y: 31 },
    { x: 17, y: 32 },
    { x: 20, y: 33 },
    { x: 23, y: 33 },
    { x: 27, y: 33 },
    { x: 31, y: 33 }
  ]; 
  const ills = [
  { x: 18, y: 15 },
 { x: 18, y: 16 },
 { x: 18, y: 17 },
 { x: 18, y: 18 },
 { x: 18, y: 19 },
 { x: 18, y: 20 },
 { x: 18, y: 21 },
 { x: 18, y: 22 },
 { x: 18, y: 23 },
 { x: 18, y: 24 },
 { x: 18, y: 25 },
 { x: 16, y: 25 },
 { x: 17, y: 25 },
 { x: 15, y: 25 },
 { x: 14, y: 25 },
 { x: 13, y: 25 },
 { x: 12, y: 25 },
 { x: 11, y: 25 },
 { x: 17, y: 15 },
 { x: 16, y: 15 },
 { x: 15, y: 15 },
 { x: 14, y: 15 },
 { x: 13, y: 15 },
 { x: 12, y: 15 },
 { x: 11, y: 15 },
 { x: 19, y: 15 },
 { x: 20, y: 15 },
 { x: 21, y: 15 },

 { x: 22, y: 15 },
 { x: 23, y: 15 },
 { x: 24, y: 15 },
 { x: 25, y: 15 },
 { x: 19, y: 25 },
 { x: 20, y: 25 },
 { x: 21, y: 25 },
 { x: 22, y: 25 },
 { x: 23, y: 25 },
 { x: 24, y: 25 },
 { x: 25, y: 25 },
 { x: 27, y: 15 },
 { x: 27, y: 16 },
 { x: 27, y: 17 },
 { x: 27, y: 18 },
 { x: 27, y: 19 },
 { x: 27, y: 20 },
 { x: 27, y: 21 },
 { x: 27, y: 22 },
 { x: 27, y: 23 },
 { x: 27, y: 24 },
 { x: 27, y: 25 },
 { x: 30, y: 15 },
 { x: 30, y: 16 },
 { x: 30, y: 17 },
 { x: 30, y: 18 },
 { x: 30, y: 19 },
 { x: 30, y: 20 },
 { x: 30, y: 21 },
 { x: 30, y: 22 },
 { x: 30, y: 23 },
 { x: 30, y: 24 },
 { x: 30, y: 25 },
 { x: 32, y: 15 },
 { x: 33, y: 15 },
 { x: 34, y: 15 },
 { x: 35, y: 15 },
 { x: 36, y: 15 },
 { x: 37, y: 15 },
 { x: 38, y: 15 },
 { x: 32, y: 16 },
 { x: 32, y: 17 },
 { x: 32, y: 18 },
 { x: 32, y: 19 },
 { x: 32, y: 20 },
 { x: 33, y: 20 },
 { x: 34, y: 20 },
 { x: 35, y: 20 },
 { x: 36, y: 20 },
 { x: 37, y: 20 },
 { x: 38, y: 20 },
 { x: 38, y: 21 },
 { x: 38, y: 22 },
 { x: 38, y: 23 },
 { x: 38, y: 24 },
 { x: 37, y: 25 },
 { x: 38, y: 25 },
 { x: 36, y: 25 },
 { x: 35, y: 25 },
 { x: 34, y: 25 },
 { x: 33, y: 25 },
 { x: 32, y: 25 }

 

  ]
  const triangle = [
    { x: 26, y: 13 },
{ x: 27, y: 14 },
{ x: 28, y: 15 },
{ x: 29, y: 16 },
{ x: 30, y: 17 },
{ x: 31, y: 18 },
{ x: 32, y: 19 },
{ x: 33, y: 20 },
{ x: 34, y: 21 },
{ x: 35, y: 22 },
{ x: 36, y: 23 },
{ x: 37, y: 24 },
{ x: 38, y: 25 },
{ x: 39, y: 26 },
{ x: 40, y: 27 },
{ x: 41, y: 28 },
{ x: 42, y: 29 },
{ x: 43, y: 30 },
{ x: 25, y: 14 },
{ x: 24, y: 15 },
{ x: 23, y: 16 },
{ x: 22, y: 17 },
{ x: 21, y: 18 },
{ x: 20, y: 19 },
{ x: 19, y: 20 },
{ x: 18, y: 21 },
{ x: 17, y: 22 },
{ x: 16, y: 23 },
{ x: 15, y: 24 },
{ x: 14, y: 25 },
{ x: 13, y: 26 },
{ x: 12, y: 27 },
{ x: 11, y: 28 },
{ x: 10, y: 29 },
{ x: 9, y: 30 },
{ x: 11, y: 30 },
{ x: 13, y: 30 },
{ x: 15, y: 30 },
{ x: 17, y: 30 },
{ x: 19, y: 30 },
{ x: 21, y: 30 },
{ x: 23, y: 30 },
{ x: 25, y: 30 },
{ x: 27, y: 30 },
{ x: 29, y: 30 },
{ x: 31, y: 30 },
{ x: 33, y: 30 },
{ x: 35, y: 30 },
{ x: 37, y: 30 },
{ x: 39, y: 30 },
{ x: 41, y: 30 },




  ]

  class Grid extends Component {
  state = {
    cells: [],
    interval: 500,
    isRunning: false,
    CELL_SIZE: 10,
    WIDTH: 500,
    HEIGHT: 500,
    counter: 0,
    clicked_array: []
  };

  rows = this.state.HEIGHT / this.state.CELL_SIZE;
  cols = this.state.WIDTH / this.state.CELL_SIZE;
  board = this.makeEmptyBoard();
  preset_board = this.makeEmptyBoard()

//determine coordinates we want to change for preset
//make a copy of empty board

  // Creates an empty board
  makeEmptyBoard() {
    let board = [];

    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = false;
      }
    }
    return board;
  }

  // Create cells from this.board
  makeCells() {
    let cells = [];

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x]) {
          cells.push({ x, y });
        }
      }
    }
    return cells;
  }

  getElementOffset() {
    // rect is a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height
    const rect = this.boardRef.getBoundingClientRect();
    // Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
    const doc = document.documentElement;
    // console.log("doc:",doc)
    // console.log("rect.left=",rect.left,rect.top)
    // console.log(doc.clientTop)

    return {
      x: rect.left + window.pageXOffset - doc.clientLeft,
      y: rect.top + window.pageYOffset - doc.clientTop
    };
  }
  

  handleClick = event => {
    const elemOffset = this.getElementOffset();
    // console.log(elemOffset)
    const offsetX = event.clientX - elemOffset.x;
    // The read-only Window property pageYOffset is an alias for scrollY; as such, it returns the number of pixels the document is currently scrolled along the vertical axis (that is, up or down) with a value of 0.0, indicating that the top edge of the Document is currently aligned with the top edge of the window's content area.
    const offsetY = event.clientY - elemOffset.y;
    const x = Math.floor(offsetX / this.state.CELL_SIZE);
    const y = Math.floor(offsetY / this.state.CELL_SIZE);
    console.log(`{ x: ${x}, y: ${y} }`);

    if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
      this.board[y][x] = !this.board[y][x];
      
    }

    this.setState({
      cells: this.makeCells(),
      
    });
    
  };

  runGame = () => {
    this.setState({ isRunning: true });
    this.runIteration();
  };

  stopGame = () => {
    this.setState({ isRunning: false });
    if (this.timeoutHandler) {
      window.clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  };

  handleIntervalChange = event => {
    this.setState({ interval: event.target.value });
  };

  handleClear = () => {
    this.board = this.makeEmptyBoard();
    this.setState({
      cells: this.makeCells(),
      counter: 0
    });
  };

  handlePreset = () => {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.board[y][x] = corners[y][x];
      }
      this.stopGame();
    }
    this.setState({
      cells: this.makeCells(),
      counter: 0
    });
  };

  handleRandom = () => {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.board[y][x] = Math.random() >= .5;
        console.log(this.board[y][x])
      }
      this.stopGame();
    }
    this.setState({
      counter: 0,
      cells: this.makeCells()
    });
  };
  handleRandomTEST = () => {
    this.handleClear()
    smile.forEach(item => {
      this.board[item.y][item.x] = true;
    });
    this.setState({
      counter: 0,
      cells: this.makeCells()
    });
  };
  handleIlls = () => {
    this.handleClear()
    ills.forEach(item => {
      this.board[item.y][item.x] = true;
    });
    this.setState({
      counter: 0,
      cells: this.makeCells()
    });
  };
  handleTriangle = () => {
    this.handleClear()
    triangle.forEach(item => {
      this.board[item.y][item.x] = true;
    });
    this.setState({
      counter: 0,
      cells: this.makeCells()
    });
  };
  

  runIteration() {
    console.log("running iteration");
    let newBoard = this.makeEmptyBoard();
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let neighbors = this.calculateNeighbors(this.board, x, y);
        /* Checks to see if cell exists */
        if (this.board[y][x]) {
          /* Satisfies 2nd rule of Conway's Game of Life */
          if (neighbors === 2 || neighbors === 3) {
            /* This cell lives to the next generation */
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
    this.board = newBoard;
    console.log("Generation: ", this.state.counter);
    this.setState((prevState, { counter }) => ({
      cells: this.makeCells(),
      counter: prevState.counter + 1
    }));
    this.timeoutHandler = window.setTimeout(() => {
      this.runIteration();
    }, this.state.interval);
  }

  calculateNeighbors(board, x, y) {
    let neighbors = 0;
    const dirs = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1]
    ];
    for (let i = 0; i < dirs.length; i++) {
      const dir = dirs[i];
      let y1 = y + dir[0];
      let x1 = x + dir[1];

      if (
        x1 >= 0 &&
        x1 < this.cols &&
        y1 >= 0 &&
        y1 < this.rows &&
        board[y1][x1]
      ) {
        neighbors++;
      }
    }

    return neighbors;
  }

  render() {
    
    const {
      cells,
      interval,
      isRunning,
      CELL_SIZE,
      WIDTH,
      HEIGHT,
      counter
    } = this.state;
    return (
      <div>
        <h2>Generation: {counter}</h2>
        <br />
        <div
          className='Board'
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`
          }}
          onClick={this.handleClick}
          ref={n => {
            this.boardRef = n;
          }}
        >
          {cells.map(cell => (
            <Cell
              CELL_SIZE={CELL_SIZE}
              x={cell.x}
              y={cell.y}
              key={Math.floor(Math.random() * Math.floor(100000000))}
            />
          ))}
        </div>
        <div className='controls'>
          Update every
          <input
            value={interval}
            onChange={this.handleIntervalChange}
          /> msec{" "}
          {isRunning ? (
            <button className='button' onClick={this.stopGame}>
              Pause
            </button>
          ) : (
            <button className='button' onClick={this.runGame}>
              Play
            </button>
          )}{" "}
          <button className='button' onClick={this.handleRandom}>
            Random
          </button>
          <button className='button' onClick={this.handleClear}>
            Clear
          </button>
          <button className='button' 
          onClick={this.handleRandomTEST}>
            smile
          </button>
          <button className='button' 
          onClick={this.handleIlls}>
            ills
          </button>
          <button className='button' 
          onClick={this.handleTriangle}>
            triangle
          </button>
        </div>
      </div>
    );
  }
}

export default Grid;
