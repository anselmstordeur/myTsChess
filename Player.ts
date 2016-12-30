/**
 * Created by Anselm Stordeur on 11/24/16.
 */

export class Player {

  private color: string;
  private id: string;

  /**
   * Creates a new Player
   * @param {String} id
   * @param {String} color
   */
  constructor(id: string, color: string) {
    this.color = color;
    this.id = id;
  }

  public equals(other: Player): boolean {
    return this.getId() === other.getId();
  }

  public getColor(): string {
    return this.color;
  }

  public getId(): string {
    return this.id;
  }

}
