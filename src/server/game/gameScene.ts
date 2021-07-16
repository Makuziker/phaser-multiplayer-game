import { GeckosServer } from '@geckos.io/server';
import Phaser from 'phaser';

import { initializeServerChannels } from '../channel';

export class GameScene extends Phaser.Scene {
  io: GeckosServer;

  constructor() {
    super({ key: 'GameScene' });
  }

  init() {
    // @ts-ignore
    this.io = initializeServerChannels(this.game.server);
  }

  create() {
  }

  update() {
  }
}