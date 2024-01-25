import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blacklogo from '../../assets/black-king.png';
import whitelogo from '../../assets/white-king.png';

export class King extends Figure {
  
    constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
    this.name = FigureNames.KING;
  }

    canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;      
    }
    const moves = [
        [-1, -1],
        [0, -1],
        [1, -1],
        [-1, 0],
        [1, 0],
        [-1, 1],
        [0, +1],
        [1, 1],
    ];

    for (let [x, y] of moves) {
      if (target.x === this.cell.x - x && target.y === this.cell.y - y) {
        return true;
      }
    }
    return false; 
  }
}