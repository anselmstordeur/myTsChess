/**
 * Created by Anselm Stordeur on 11/24/16.
 */
import {Piece} from "../Piece";
import {Player} from "../Player";
import {Move} from "../Primitives/Move";
import {Position} from "../Primitives/Position";

export class Bishop extends Piece {

  /**
   * Creates a new Bishop
   * @param {Position} position
   * @param {Player} player
   * @param {object} options
   * @param {boolean} options.captured
   * @param {boolean} options.moved
   */
  constructor(position: Position, player: Player, options?) {
    super('Bishop', position, player, options);
  }

  public isValidMove(move: Move, fields: Piece[][]): boolean {

    let movingVector: Position = move.getMovingVector();
    let steps: number = Math.abs(movingVector.getColumn());

    // Moving diagonal and more than 0?
    if (Math.abs(movingVector.getRow()) === Math.abs(movingVector.getColumn()) && steps > 0) {

      let startingPosition: Position = move.getPiece().getPosition();

      // go through all pieces on the way
      for (let i = 1; i < Math.abs(movingVector.getRow()); i++) {
        let actual: Piece = fields
          [startingPosition.getRow() + Math.sign(movingVector.getRow()) * i]
          [startingPosition.getColumn() + Math.sign(movingVector.getColumn()) * i];
        // there is a piece on the way and it is not the final step
        if (actual && i < steps) {
          return false;
        }else if (actual && i === steps) { // there is a piece on the last step
          // check if the piece belongs to this player -> we can capture it or not
          return !move.getPiece().getPlayer().equals(actual.getPlayer());
        }
      }
    }
    return false;
  }

}
