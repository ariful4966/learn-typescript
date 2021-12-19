"use strict";
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const sakib = new Player("Sakib", 38, "Bangladesh");
console.log(sakib.country);
const players = [];
players.push(sakib);
players.push(mashrafi);
console.log(players);
