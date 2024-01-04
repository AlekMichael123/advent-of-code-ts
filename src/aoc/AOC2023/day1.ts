/**
 * https://adventofcode.com/2023/day/1
 */
import Day from "../day";

export class Day1 implements Day {
  part1(input: string): string {
    return input.split("\n")
      .map(line => line.replace(/[^0-9]/g, ""))
      .reduce((acc, line) => {
        if (line.length === 1) {
          return acc + Number(line.repeat(2));
        }
        return acc + Number(line[0] + line[line.length - 1]);
      }, 0)
      .toString();
  }
  part2(input: string): string {
    return "";
  }
}
