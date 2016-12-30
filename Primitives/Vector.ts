/**
 * Created by Anselm Stordeur on 11/24/16.
 */

export class Vector {

  private column: number;
  private row: number;

  /**
   * Creates a new Vector
   * @param x
   * @param y
   */
  constructor(x: number, y: number) {

    if (typeof x !== 'number') {
      throw new Error('Vector\'s row is not of type number');
    }

    if (typeof y !== 'number') {
      throw new Error('Vector\'s column is not of type number');
    }

    this.row = x;
    this.column = y;
  }

  public getColumn(): number {
    return this.column;
  }

  public getRow(): number {
    return this.row;
  }

  public substract(other: Vector): Vector {
    return new Vector(this.getRow() - other.getRow(), this.getColumn() - other.getColumn());
  }

}
