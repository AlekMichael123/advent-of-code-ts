import Day from "../day";

export class Day3 implements Day {
  part1(input: string): string {
    const lines = input.split("\n");
    let sum = 0;

    lines.forEach((line, i) => {
      const eWithIndices = line.split("").map((e, j) => ({ e, j })).map(({e, j}) => ({e: e.split("").filter(l => this.numbers.includes(l)).join(""), j}));
      const digitsSplit: {e: string, j: number}[][] = [];
      let currDigits: {e: string, j: number}[] = [];
      eWithIndices.forEach(({ e, j }, k) => {
        if (e.length) {
          currDigits.push({ e, j });
        }
        if (currDigits.length && !e.length || k === eWithIndices.length - 1) {
          digitsSplit.push(currDigits);
          currDigits = [];
        }
      });
      digitsSplit.forEach((digits) => {
        sum +=
          digits.some(({ j }) => this.hasSymbolAdjacent(i, j, lines)) ?
            Number(digits.map(({ e }) => e).join("")) : 0;
      });
      
    });

    return sum.toString();
  }
  part2(input: string): string {
    return "";
  }
  private readonly numbers = "0123456789";
  private readonly directions = [
    [-1,1],[0,1],[1,1],
    [-1,0],      [1,0],
    [-1,-1],[0,-1],[1,-1],
  ];
  private hasSymbolAdjacent = (i: number, j: number, grid: string[]) =>
    this.directions.some(([iOff, jOff]) => {
      const _i = i + iOff, _j = j + jOff;
      return (
        -1 < _i && _i < grid.length &&
        -1 < _j && _j < grid[_i].length &&
        grid[_i][_j] !== "." &&
        !this.numbers.includes(grid[_i][_j])
      );
    });
  
}
