/**
 * Created by Anselm Stordeur on 11/24/16.
 */
import {Board} from "./Board";
import {Piece} from "./Piece";
import {Bishop} from "./Pieces/Bishop";
import {King} from "./Pieces/King";
import {Knight} from "./Pieces/Knight";
import {Pawn} from "./Pieces/Pawn";
import {Queen} from "./Pieces/Queen";
import {Rook} from "./Pieces/Rook";
import {Player} from "./Player";
import {Position} from "./Primitives/Position";

export class Game {

  private board: Board;
  private playedBy: Player[];
  private moveCounter: number;
  private moves: string;

  /**
   * Creates a new Game
   */
  constructor(gameId: string) {

    this.playedBy = [(new Player('first', 'white')), (new Player('second', 'black'))];
    this.moveCounter = 0;
    this.moves = '';
    this.gameId = gameId;

    this.initBoard();
  }

  /**
   * Creates the starting Formation for a standard 8x8 Chess
   */
  public initBoard() {
    this.board = new Board();
    let board = this.board;
    let players = this.playedBy;

    // set the rows of paws by iterating through each column
    for (let i = 0; i < this.board.getColumns(); i++) {
      // top pawn
      board.setPiece(new Pawn(new Position(6, i), players[1]));
      // bottom pawn
      board.setPiece(new Pawn(new Position(1, i), players[0]));
    }

    // set the 4 Rooks
    board.setPiece(new Rook(new Position(0, 0), players[0]));
    board.setPiece(new Rook(new Position(0, 7), players[0]));
    board.setPiece(new Rook(new Position(7, 0), players[1]));
    board.setPiece(new Rook(new Position(7, 7), players[1]));

    // set the 4 Knights
    board.setPiece(new Knight(new Position(0, 1), players[0]));
    board.setPiece(new Knight(new Position(0, 6), players[0]));
    board.setPiece(new Knight(new Position(7, 1), players[1]));
    board.setPiece(new Knight(new Position(7, 6), players[1]));

    // set the 4 Bishops
    board.setPiece(new Bishop(new Position(0, 2), players[0]));
    board.setPiece(new Bishop(new Position(0, 5), players[0]));
    board.setPiece(new Bishop(new Position(7, 2), players[1]));
    board.setPiece(new Bishop(new Position(7, 5), players[1]));

    // set Kings
    board.setPiece(new King(new Position(0, 4), players[0]));
    board.setPiece(new King(new Position(7, 4), players[1]));

    // set Queens
    board.setPiece(new Queen(new Position(0, 3), players[0]));
    board.setPiece(new Queen(new Position(7, 3), players[1]));
  }

  public makeMove(notation: string) {
    // TODO: implement notation parsing and validation -> make move
  }

  public getBoard(): Board {
    return this.board;
  }

  public printBoard() {
    this.board.getFields().forEach(function (row: Piece[]) {
      let output: string[] = row.map(function (piece: Piece) {
        return piece.getType() + ' '.repeat(6 - piece.getType().length);
      });
      //noinspection TsLint
      console.log(output.join(', '));
    });

    // select row, column
    //noinspection TsLint
    console.log(game.board.fields[0][3].type);
  }

}
