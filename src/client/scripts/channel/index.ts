import { ClientChannel } from '@geckos.io/client';
import { IGameState, IPlayerControls } from '../../../typings/custom';
import { GameScene } from '../scenes';
import { deserializeGameState, serializePlayerControls } from './buffer';

export function initializeClientChannel(channel: ClientChannel, scene: GameScene) {
  channel.onConnect(error => {
    if (error) console.error(error.message);

    channel.emit('JOIN_GAME', { name: 'Brogan' }); // dummy name

    channel.onRaw(msg => {
      const newGameState = deserializeGameState(msg);
      scene.updateGameState(newGameState as IGameState);
    });
  });
}

export function emitPlayerAction(channel: ClientChannel, controls: IPlayerControls) {
  const buffer = serializePlayerControls(controls);
  channel.raw.emit(buffer);
}