import { ChannelId } from '@geckos.io/server';
import { IGameState } from "../../typings/custom";
import { gameModel } from './schema';

const gameState: IGameState = {
  time: new Date().getTime(),
  tick: 32580,
  food: [],
  players: []
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

export function spawnNewPlayer(id: ChannelId, name: string) {
  if (typeof id === 'undefined') throw new Error('channelId is undefined');
  if (playerByIdExists(id)) throw new Error(`Player by id ${id} already exists`);

  const x = Math.random() * 200;
  const y = Math.random() * 200;
  const rotation = Math.PI * 1.5; // faces upward in Phaser

  const newPlayer = {
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
  };

  gameState.players.push(newPlayer);
}

export function removePlayer(id: ChannelId) {
  if (typeof id === 'undefined') throw new Error('channelId is undefined');
  gameState.players = gameState.players.filter(player => player.id !== id);
}

export function getBuffer() {
  console.log('Game State to serialize:', gameState);
  const buffer = gameModel.toBuffer(gameState);
  console.log('gameState JSON size: ', JSON.stringify(gameState).length);
  console.log('Buffer size in bytes:', buffer.byteLength);
  return buffer;
}
