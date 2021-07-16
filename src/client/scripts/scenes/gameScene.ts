import geckos, { ClientChannel } from '@geckos.io/client';
import { Scene } from 'phaser';
import { GAME_SCENE, MENU_SCENE, ASSETS } from "../constants";
import { IGameState } from '../../../typings/custom';
import { emitPlayerAction, initializeClientChannel } from '../channel';

export class GameScene extends Scene {
  channel: ClientChannel;
  gameState: IGameState;
  background: Phaser.GameObjects.TileSprite;

  constructor() {
    super({ key: GAME_SCENE });
  }

  init() {
    this.channel = geckos({ port: 8081 });
    initializeClientChannel(this.channel, this);
  }

  create() {
    this.background = this.add.tileSprite(0, 0, 4000, 4000, ASSETS.TILE_ASSET);
    this.background.setDepth(-9999);
    this.createExitButton();

    ['pointermove', 'pointerdown', 'pointerup'].forEach(e => {
      this.input.on(e, (p: Phaser.Input.Pointer) => this.handlePointer(this.channel, p));
    });
  }

  updateGameState(newState: IGameState) {
    this.gameState = { ...newState };
  }

  // Callback method, using `this.channel` will not point to `GameScene.channel`
  handlePointer(channel: ClientChannel, pointer: Phaser.Input.Pointer) {
    emitPlayerAction(channel, {
      pointerX: pointer.x,
      pointerY: pointer.y,
      isSpeeding: pointer.leftButtonDown()
    });
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