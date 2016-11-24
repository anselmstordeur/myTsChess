/**
 * Created by Anselm Stordeur on 11/24/16.
 */
import { Piece } from '../Piece';
import { Position } from '../Primitives/Position';
import { Player } from '../Player';

export class Rook extends Piece {

  /**
   * Creates a new Rook
   * @param {Position} position
   * @param {Player} player
   * @param {object} options
   * @param {boolean} options.captured
   * @param {boolean} options.moved
   */
  constructor(position: Position, player: Player, options?){
    super('Rook', position, player, options);
  }

}