/**
 * Created by Anselm Stordeur on 11/29/16.
 */
import {Piece} from "../Piece";
import {Position} from "./Position";

export class Move {
  private from: Position;
  private to: Position;
  private piece: Piece;

  /**
   * Creates a simple Move
   * @param from
   * @param to
   * @param piece
   */
  constructor(from: Position, to: Position, piece: Piece) {
    this.from = from;
    this.to = to;
    this.piece = piece;
  }

  public getFrom() {
    return this.from;
  }

  public getTo() {
    return this.to;
  }

  public getPiece() {
    return this.piece;
  }

  public getMovingVector(): Position {
    return this.to.substract(this.from);
  }

}
