import geckos, { ClientChannel } from '@geckos.io/client';
import { Scene } from 'phaser';
import { GAME_SCENE, MENU_SCENE } from "../constants";
import { IGameState } from '../../../typings/custom';
import { initializeClientChannel } from '../channel';

export class GameScene extends Scene {
  channel: ClientChannel;
  gameState: IGameState;

  constructor() {
    super({ key: GAME_SCENE });
  }

  // init({ channel }: { channel: ClientChannel }) {
  //   this.channel = channel;
  // }

  create() {
    this.channel = geckos({ port: 8081 });
    initializeClientChannel(this.channel, this);
    // this.channel.emit('PLAYER_ACTION', { pointerX: 100, pointerY: 200, isSpeeding: false });

    this.createExitButton();
  }

  updateGameState(newState: IGameState) {
    this.gameState = { ...newState };
  }

  createExitButton() {
    this.add.text(10, 10, 'Exit', { color: 'orange' })
      .setInteractive()
      .setScrollFactor(0, 0)
      .on('pointerdown', () => {
        console.log('Exiting to Menu');
        this.channel.close();
        this.scene.start(MENU_SCENE);
      });
  }
}