/**
 * Created by Anselm Stordeur on 11/24/16.
 */

import { Game } from './Game';
import { Player } from './Player';
import { Piece } from './Piece';

const players = [ (new Player('first', 'white')), (new Player('second', 'black')) ];
let game = new Game(players);


game.board.fields.forEach(function (row: Array<Piece>) {
  let output: Array<string> = row.map(function (piece: Piece) {
    return piece.type + ' '.repeat(6 - piece.type.length);
  });

  console.log(output.join(', '));
});

// select row, column
console.log(game.board.fields[0][3].type);

console.log('done');

