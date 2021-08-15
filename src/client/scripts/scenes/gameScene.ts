import geckos, { ClientChannel } from '@geckos.io/client';
import { Scene } from 'phaser';
import _ from 'lodash';

import { GAME_SCENE, MENU_SCENE, ASSETS } from "../constants";
import { IGameState } from '../../../typings/custom';
import { emitPlayerAction, initializeClientChannel } from '../channel';
import { Snake } from '../objects/snake';

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
    this.background = this.add.tileSprite(0, 0, 4000, 4000, ASSETS.TILE);
    this.background.setDepth(-9999);
    this.createExitButton();

    ['pointermove', 'pointerdown', 'pointerup'].forEach(e => {
      this.input.on(e, (p: Phaser.Input.Pointer) => this.handlePointer(this.channel, p));
    });
  }

  // update(time: number, delta: number) {
  //   if (this.gameState.players) {
  //     const playerIds = Object.keys(this.gameState.players);
  //     const snakeIds = Object.keys(this.snakes);

  //     // delete snakes for non-existant player IDs
  //     for (const id of snakeIds) {
  //       if (!playerIds.includes(id)) {
  //         this.snakes[id].destroy();
  //       }
  //     }

  //     for (const id of playerIds) {
  //       // spawn new snakes for each new player ID
  //       if (!this.snakes[id]) {
  //         this.snakes[id] = new Snake(
  //           id,
  //           this.gameState.players[id],
  //           this,
  //           ASSETS.CIRCLE
  //         );
  //       } else {
  //         // update the existing snake's position and rotation
  //         this.snakes[id].update(time, delta);
  //       }
  //     }
  //   }
  // }

  updateGameState(newState: IGameState) {
    this.gameState = _.cloneDeep(newState);
    console.log('Current Game State:', JSON.stringify(this.gameState, undefined, 2));
  }

  // Callback method, using `this.channel` will not point to `GameScene.channel`
  handlePointer(channel: ClientChannel, pointer: Phaser.Input.Pointer) {
    emitPlayerAction(channel, {
      pointerX: Math.floor(pointer.x),
      pointerY: Math.floor(pointer.y),
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