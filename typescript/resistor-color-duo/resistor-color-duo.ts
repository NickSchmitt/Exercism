export class ResistorColor {
  private static OPTIONS: string[] = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ]

  constructor(private readonly colors: string[]) {
    if (colors.length < 2) throw "At least two colors need to be present"
  }
  value = (): number => 
    Number(this.colors
      .slice(0,2)
      .map((color: string) =>
        (ResistorColor.OPTIONS.indexOf(color)))
        .join(""))
}
