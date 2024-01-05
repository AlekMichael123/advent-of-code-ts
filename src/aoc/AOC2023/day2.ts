import Day from "../day";

export class Day2 implements Day {
  part1(input: string): string {
    const bag: Record<string, number> = {
      "red": 12,
      "green": 13,
      "blue": 14,
    };
    return input.split("\n")
      .reduce((total, game) => {
        const { id, scores } = this.parseGame(game);
        const valid = Object.keys(bag)
          .every(color => scores[color] && scores[color] <= bag[color]);
        return valid ? total + id : total;
      }, 0)
      .toString();
  }
  part2(input: string): string {
    return input.split("\n")
      .reduce((total, game) => {
        const { scores } = this.parseGame(game);
        return total + (scores["red"] * scores["blue"] * scores["green"]);
      }, 0)
      .toString();
  }

  private parseGame(input: string) {
    const [gameId, gameScores] = input.split(":");
    return {
      id: Number(gameId.trim().split(" ")[1]),
      scores: gameScores.split(";")
        .map(set => 
          set.split(",")
            .map(draw => draw.trim().split(" ")))
        .reduce((acc, amtColor) => {
          amtColor.forEach(([amt, color]) => {
            acc[color] ??= 0;
            acc[color] = Math.max(acc[color], Number(amt));
          })
          return acc;
        }, {} as Record<string, number>),
    };
  }
}
