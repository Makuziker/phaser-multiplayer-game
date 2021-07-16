import { ChannelId } from '@geckos.io/server';
import { IGameState } from "../../typings/custom";

const gameState: IGameState = {
  food: {},
  players: {}
}

// const food = {
//   'abcd': {
//     id: 'abcd',
//     x: 100,
//     y: 150,
//     value: 1
//   }
// };

// const players: IPlayer = {};

export function getFood() {
  return gameState.food;
}

export function getGameState() {
  return gameState;
}

export function getPlayerData() {
  return gameState.players;
}

export function spawnNewPlayer(id: ChannelId, name: string) {
  if (typeof id === 'undefined') throw new Error('channelId is undefined');

  const x = Math.random() * 200;
  const y = Math.random() * 200;
  const rotation = Math.PI * 1.5; // faces upward in Phaser
  gameState.players[id] = {
    id: id,
    name: name || 'anonymous',
    isAlive: true,
    isSpeeding: false,
    snakeSections: [
      {
        isHead: true,
        x,
        y,
        rotation
      },
      {
        isHead: false,
        x,
        y: y + 10,
        rotation
      }
    ]
  }
}

export function removePlayer(id: string) {
  delete gameState.players[id];
}
