/**
 * Created by Anselm Stordeur on 11/24/16.
 */
import {Piece} from "./Piece";

export class Board {

  private flipped: boolean;
  private fields: Piece[][];
  private rows: number;
  private columns: number;

  /**
   * Creates the board
   * @param {object} options
   * @param {number} options.rows
   * @param {number} options.columns
   * @param {boolean} options.flipped
   */
  constructor(options?) {

    let rows = 8;
    let columns = 8;
    let flipped = false;

    if (typeof options !== 'undefined') {
      if (typeof options.rows === 'number') {
        rows = options.rows;
      }
      if (typeof options.columns === 'number') {
        columns = options.columns;
      }
      if (typeof options.flipped === 'boolean') {
        flipped = options.flipped;
      }
    }

    let fields: Piece[][] = [];
    for (let i = 0; i < columns; i++) {
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
  public setPiece(piece: Piece) {
    this.fields[piece.getPosition().row][piece.getPosition().column] = piece;
  }

  public getRows(): number {
    return this.rows;
  }

  public getColumns(): number {
    return this.columns;
  }

  public getFields(): Piece[][] {
    return this.fields;
  }

}
