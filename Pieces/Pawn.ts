/**
 * Created by Anselm Stordeur on 11/24/16.
 */
import {Piece} from "../Piece";
import {Player} from "../Player";
import {Position} from "../Primitives/Position";

export class Pawn extends Piece {

  /**
   * Creates a new Pawn
   * @param {Position} position
   * @param {Player} player
   * @param {object} options
   * @param {boolean} options.captured
   * @param {boolean} options.moved
   */
  constructor(position: Position, player: Player, options?) {
    super('Pawn', position, player, options);
  }

}
