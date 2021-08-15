import { ClientChannel } from '@geckos.io/client';
import { IGameState, IPlayerControls } from '../../../typings/custom';
import { GameScene } from '../scenes';

export function initializeClientChannel(channel: ClientChannel, scene: GameScene) {
  channel.onConnect(error => {
    if (error) console.error(error.message);

    channel.emit('JOIN_GAME', { name: 'Mr Anonymous' }); // dummy name

    channel.on('ON_GAME_STATE', newState => { // todo channel.onRaw
      scene.updateGameState(newState as IGameState);
    });
  });
}

export function emitPlayerAction(channel: ClientChannel, controls: IPlayerControls) {
  channel.emit('PLAYER_ACTION', controls); // todo channel.raw.emit
}