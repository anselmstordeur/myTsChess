/**
 * Created by Anselm Stordeur on 11/24/16.
 */

export class Player {

  id: string;
  color: string;

  /**
   * Creates a new Player
   * @param {String} id
   * @param {String} color
   */
  constructor(id: string, color: string){
    this.id = id;
    this.color = color;
  }

}