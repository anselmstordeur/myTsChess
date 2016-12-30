/**
 * Created by Anselm Stordeur on 11/24/16.
 */
import {Piece} from "./Piece";

export class Board {

  private columns: number;
  private pieces: Piece[];
  private flipped: boolean;
  private rows: number;

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

    this.pieces = [];
    this.rows = rows;
    this.columns = columns;
    this.flipped = flipped;
  }

  public getColumns(): number {
    return this.columns;
  }

  public getPieces(): Piece[] {
    return this.pieces;
  }

  public getRows(): number {
    return this.rows;
  }

  /**
   * Sets a new Piece on the board.
   * @param piece
   */
  public setPiece(piece: Piece) {
    this.pieces.push(piece);
  }
}
