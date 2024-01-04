import * as fs from "fs";
import * as path from "path";
import * as AOC from "./aoc";

main();

function main() {
  const input = getInput();
  const day = new AOC.AOC2023.Day1();
  console.log("Part 1");
  console.log(day.part1(input));
  console.log("Part 2");
  console.log(day.part2(input));
}

function getInput() {
  const inputPath = path.join(__dirname, "\\..\\..\\input.txt");
  return fs.readFileSync(inputPath).toString().trim();
}
