import { GAME_SCENE, MENU_SCENE } from '../constants';

export class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: MENU_SCENE })
  }

  create() {
    if (typeof this.game.config.width !== 'number') {
      console.error('game.config.width is not a number');
    } else {
      this.add.text(this.game.config.width / 2, 100, 'Main Menu', { color: 'black' });
      this.add.text(this.game.config.width / 2, 200, 'Enter Game', { color: 'limegreen' })
        .setInteractive()
        .on('pointerdown', () => {
          console.log('Entering Game Scene');
          this.scene.start(GAME_SCENE);
        });
    }
  }
}
