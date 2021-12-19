import { Player } from "./classes/Plyear.js";
import { IsPlayer } from "./interfaces/isPlayer";

let mashrafi: IsPlayer = new Player("Mashrafi", 40, "Bangladesh");
let sakib: IsPlayer;

sakib = new Player("Sakib", 38, "Bangladesh");

const players: Player[] = [];

players.push(sakib);
players.push(mashrafi);

interface RertangleOptions {
  width: number;
  length: number;
}

function drawRectangle(options: RertangleOptions) {
  let width = options.width;
  let length = options.length;
}

let threeDoptions = {
  width: 30,
  length: 20,
  height: 10,
};

drawRectangle(threeDoptions);
