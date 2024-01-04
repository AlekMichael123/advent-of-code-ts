/**
 * https://adventofcode.com/2023/day/1
 */
import Day from "../day";

export class Day1 implements Day {
  part1(input: string): string {
    return input.split("\n")
      .map(line => line.replace(/[^0-9]/g, ""))
      .reduce((acc, line) => {
        if (!line.length) {
          return acc;
        }
        if (line.length === 1) {
          return acc + Number(line.repeat(2));
        }
        return acc + Number(line[0] + line[line.length - 1]);
      }, 0)
      .toString();
  }
  part2(input: string): string {
    const relations: Record<string, number> = {
      "one": 1,
      "two": 2,
      "three": 3,
      "four": 4,
      "five": 5,
      "six": 6,
      "seven": 7,
      "eight": 8,
      "nine": 9,
    };
    return input.split("\n")
      .map(line => {
        const split = line.split("");
        const indices: [number, number][] = [];

        Object.keys(relations)
          .forEach(key => {
            let i = line.indexOf(key);
            while (i !== -1 && i < line.length) {
              indices.push([i, relations[key]]);
              i = line.indexOf(key, i + 1);
            }
          });
        indices.forEach(([i, val]) => split[i] = val.toString());
        return split.join("").replace(/[^0-9]/g, "");
      })
      .reduce((acc, line) => {
        if (line.length === 1) {
          return acc + Number(line.repeat(2));
        }
        return acc + Number(line[0] + line[line.length - 1]);
      }, 0)
      .toString();
  }
}
