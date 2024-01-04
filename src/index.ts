import * as fs from "fs";
import * as path from "path";


export function main() {
  const input = getInput();
  console.log(input);
}

function getInput() {
  const inputPath = path.join(__dirname, "input.txt");
  return fs.readFileSync(inputPath).toString();
}
