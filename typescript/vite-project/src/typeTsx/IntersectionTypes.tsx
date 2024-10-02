

// Intersection types let us combine types using the & operator.


interface Pokemon {
  name: string;
  hp: number;
  pokemonType: [string, string?];
}

interface Ability {
  blaze(): void;
}

interface Moves {
  firePunch(): void;
}

type Fire = Ability & Moves;

type FirePokemon = Pokemon & Fire;

const charizard: FirePokemon = {
  name: "Charizard",
  hp: 100,
  pokemonType: ["fire", "flying"],
  blaze() {
    console.log(`${this.name} used 🔥 Blaze.`);
  },
  firePunch() {
    console.log(`${this.name} used 🔥 Fire Punch.`);
  },
};

charizard.blaze();
charizard.firePunch();
