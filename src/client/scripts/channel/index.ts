import { ClientChannel } from '@geckos.io/client';
import { GameScene } from '../scenes';

export function initializeClientChannel(channel: ClientChannel, scene: GameScene) {
  channel.onConnect(error => {
    if (error) console.error(error.message);
    channel.emit('JOIN_GAME');
    // @ts-ignore
    channel.on('ON_GAME_STATE', newState => scene.updateGameState(newState));
  });
}