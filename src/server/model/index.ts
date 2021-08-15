import { ChannelId } from '@geckos.io/server';
import { IGameState } from "../../typings/custom";

const gameState: IGameState = {
  tick: 32580,
  time: new Date().getTime(),
  food: [],
  players: [],
}

export function getFood() {
  return gameState.food;
}

export function getGameState() {
  return gameState;
}

export function getPlayerData() {
  return gameState.players;
}

function findPlayerIdxById(id: string) {
  return gameState.players.findIndex(player => player.id === id);
}

function playerByIdExists(id: string) {
  return findPlayerIdxById(id) !== -1;
}

function toFixedNumber(num: number, digits: number, base: number){
  var pow = Math.pow(base||10, digits);
  return Math.round(num*pow) / pow;
}

export function spawnNewPlayer(id: ChannelId, name: string) {
  if (typeof id === 'undefined') throw new Error('channelId is undefined');
  if (playerByIdExists(id)) throw new Error(`Player by id ${id} already exists`);

  const x = Math.round(Math.random() * 200);
  const y = Math.round(Math.random() * 200);

  // faces upward in Phaser, rounded to 4 decimal digits
  const rotation = toFixedNumber(Math.PI * 1.5, 3, 10);

  const newPlayer = {
    id: id,
    isAlive: true,
    isSpeeding: false,
    name: name || 'anonymous',
    snakeSections: [
      {
        isHead: true,
        rotation,
        x,
        y
      },
      {
        isHead: false,
        rotation,
        x,
        y: y + 10
      }
    ]
  };

  gameState.players.push(newPlayer);
}

export function removePlayer(id: ChannelId) {
  if (typeof id === 'undefined') throw new Error('channelId is undefined');
  gameState.players = gameState.players.filter(player => player.id !== id);
}
