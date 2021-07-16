import { Server } from 'http';
import '@geckos.io/phaser-on-nodejs';
import Phaser from 'phaser';
import { GameScene } from './gameScene';

export class PhaserGame extends Phaser.Game {
  server: Server;

  constructor(server: Server) {
    super({
      type: Phaser.HEADLESS,
      parent: 'phaser-game',
      width: 800,
      height: 600,
      autoFocus: false, // so Phaser does not call window.focus()
      scene: [GameScene],
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
          gravity: { y: 0 }
        }
      }
    });

    this.server = server;
  }
}