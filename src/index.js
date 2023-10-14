class Heros {
  constructor(name, level, emoji, attackName) {
    this.name = name;
    this.level = level;
    this.emoji = emoji;
    this.attackName = attackName;
  }

  attack() {
    return `${this.name}, came here to save you with ${this.attackName}!`;
  }
}

const heros = [
  new Heros("Spider-Man", 10, "🕷️", "Spider web"),
  new Heros("Gambie", 7, "🂲", "Predict attack")
];
console.log(heros[0]);
console.log(heros[0].attack());
