/**
 * Created by Anselm Stordeur on 11/24/16.
 */
import {Piece} from "../Piece";
import {Player} from "../Player";
import {Vector} from "../Primitives/Vector";

export class Rook extends Piece {

  /**
   * Creates a new Rook
   * @param {Vector} position
   * @param {Player} player
   * @param {object} options
   * @param {boolean} options.captured
   * @param {boolean} options.moved
   */
  constructor(position: Vector, player: Player, options?) {
    super('Rook', position, player, options);
  }

  public isValidMove(): boolean {
    // TODO: implement validation of move
    return false;
  }

}
