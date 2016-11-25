/**
 * Created by Anselm Stordeur on 11/24/16.
 */
import {Player} from "./Player";
import {Position} from "./Primitives/Position";

export abstract class Piece {

  private position: Position;
  private belongsTo: Player;
  private type: string;
  private captured: boolean;
  private moved: boolean;

  /**
   * Creates a new Piece
   * @param {string} type
   * @param {Position} position
   * @param {Player} player
   * @param {object} options
   * @param {boolean} options.captured
   * @param {boolean} options.moved
   */
  constructor(type: string, position: Position, player: Player, options) {

    let captured = false;
    let moved = false;

    // We do this options stuff, because it can be relevant for more complex things later
    // Normally every new created Piece is not captured and not moved, but if we wish a
    // Piece when a Pawn reaches the other side we can create a create a Rook that should
    // act like it's already moved
    if (typeof options !== 'undefined') {
      if (typeof options.captured === 'boolean') {
        captured = options.captured;
      }
      if (typeof options.moved === 'boolean') {
        moved = options.moved;
      }
    }

    this.type = type;
    this.position = position;
    this.belongsTo = player;
    this.captured = captured;
    this.moved = moved;
  }

  public getPosition(): Position {
    return this.position;
  }

  public getType(): string {
    return this.type;
  }

}
