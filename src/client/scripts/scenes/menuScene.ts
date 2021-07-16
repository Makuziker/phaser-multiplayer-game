import { GAME_SCENE, MENU_SCENE } from '../constants';

export class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: MENU_SCENE })
  }

  create() {
    // @ts-ignore
    this.add.text(this.game.config.width / 2, 100, 'Main Menu', { fill: 'black' });
    // @ts-ignore
    this.add.text(this.game.config.width / 2, 200, 'Enter Game', { fill: 'limegreen' })
      .setInteractive()
      .on('pointerdown', () => {
        console.log('Entering Game Scene');
        this.scene.start(GAME_SCENE);
      });
  }
}
