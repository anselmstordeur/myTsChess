/**
 * Created by Anselm Stordeur on 11/24/16.
 */

export class Position {

  row: number;
  column: number;

  /**
   * Creates a new Position
   * @param x
   * @param y
   */
  constructor(x: number, y: number){

    if(typeof x !== 'number'){
      throw new Error('Position\'s row is not of type number');
    }

    if(typeof y !== 'number'){
      throw new Error('Position\'s column is not of type number');
    }

    this.row = x;
    this.column = y;
  }

}