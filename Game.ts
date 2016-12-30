/**
 * Created by Anselm Stordeur on 11/24/16.
 */
import {Board} from "./Board";
import {Piece} from "./Piece";
import {Bishop} from "./Pieces/Bishop";
import {King} from "./Pieces/King";
import {Knight} from "./Pieces/Knight";
import {Move} from "./Primitives/Move";
import {Pawn} from "./Pieces/Pawn";
import {Queen} from "./Pieces/Queen";
import {Rook} from "./Pieces/Rook";
import {Player} from "./Player";
import {Vector} from "./Primitives/Vector";

export class Game {

  private board: Board;
  private gameId: string;
  private moveCounter: number;
  private moves: string;
  private playedBy: Player[];

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

  public getBoard(): Board {
    return this.board;
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
      board.setPiece(new Pawn(new Vector(6, i), players[1]));
      // bottom pawn
      board.setPiece(new Pawn(new Vector(1, i), players[0]));
    }

    // set the 4 Rooks
    board.setPiece(new Rook(new Vector(0, 0), players[0]));
    board.setPiece(new Rook(new Vector(0, 7), players[0]));
    board.setPiece(new Rook(new Vector(7, 0), players[1]));
    board.setPiece(new Rook(new Vector(7, 7), players[1]));

    // set the 4 Knights
    board.setPiece(new Knight(new Vector(0, 1), players[0]));
    board.setPiece(new Knight(new Vector(0, 6), players[0]));
    board.setPiece(new Knight(new Vector(7, 1), players[1]));
    board.setPiece(new Knight(new Vector(7, 6), players[1]));

    // set the 4 Bishops
    board.setPiece(new Bishop(new Vector(0, 2), players[0]));
    board.setPiece(new Bishop(new Vector(0, 5), players[0]));
    board.setPiece(new Bishop(new Vector(7, 2), players[1]));
    board.setPiece(new Bishop(new Vector(7, 5), players[1]));

    // set Kings
    board.setPiece(new King(new Vector(0, 4), players[0]));
    board.setPiece(new King(new Vector(7, 4), players[1]));

    // set Queens
    board.setPiece(new Queen(new Vector(0, 3), players[0]));
    board.setPiece(new Queen(new Vector(7, 3), players[1]));
  }

  public makeMove(move: Move) {
    // TODO: implement moving
  }

  public makeMoveFromNotation(notation: string) {
    // TODO: implement notation parsing and validation -> make move
  }

  public printBoard() {
    // TODO: update the implementation to suit the new getPieces function
  }

}
