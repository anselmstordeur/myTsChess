/**
 * Created by Anselm Stordeur on 11/29/16.
 */
import {Piece} from "../Piece";
import {Vector} from "./Vector";

export class Move {

  private from: Vector;
  private piece: Piece;
  private to: Vector;

  /**
   * Creates a simple Move
   * @param from
   * @param to
   * @param piece
   */
  constructor(from: Vector, to: Vector, piece: Piece) {
    this.from = from;
    this.to = to;
    this.piece = piece;
  }

  public getFrom(): Vector {
    return this.from;
  }

  public getTo(): Vector {
    return this.to;
  }

  public getPiece(): Piece {
    return this.piece;
  }

  public getMovingVector(): Vector {
    return this.to.substract(this.from);
  }

}
