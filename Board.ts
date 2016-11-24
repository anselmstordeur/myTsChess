/**
 * Created by Anselm Stordeur on 11/24/16.
 */
import { Piece } from './Piece';

export class Board {

  flipped: boolean;
  fields: Piece[][];
  rows: number;
  columns: number;

  /**
   * Creates the board
   * @param {object} options
   * @param {number} options.rows
   * @param {number} options.columns
   * @param {boolean} options.flipped
   */
  constructor(options?){

    let rows = 8;
    let columns = 8;
    let flipped = false;

    if(typeof options !== 'undefined'){
      if(typeof options.rows === 'number'){
        rows = options.rows;
      }
      if(typeof options.columns === 'number'){
        columns = options.columns;
      }
      if(typeof options.flipped === 'boolean'){
        flipped = options.flipped;
      }
    }

    let fields: Array<Array<Piece>> = [];
    for(let i = 0; i < columns; i++){
      fields[i] = new Array<Piece>(rows); // this is a column
    }

    this.fields = fields;
    this.rows = rows;
    this.columns = columns;
    this.flipped = flipped;
  }

  /**
   * Sets a new Piece on the board.
   * @param piece
   */
  setPiece(piece: Piece){
    this.fields[piece.position.row][piece.position.column] = piece;
  }

}