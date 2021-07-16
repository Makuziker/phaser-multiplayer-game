import {
  PRELOAD_SCENE,
  MENU_SCENE,
  // CIRCLE_ASSET,
  // EYE_BLACK_ASSET,
  // EYE_WHITE_ASSET,
  // FOOD_ASSET,
  // SNAKE_HEAD_ASSET,
  // TILE_ASSET,
  // WHITE_SHADOW_ASSET,
  ASSETS
} from "../constants";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: PRELOAD_SCENE })
  }

  preload() {
    const progress = this.add.graphics();
    const { width, height } = this.game.config;
    console.log('loading game...');

    this.load.on('progress', (value: number) => {
      progress.clear();
      progress.fillStyle(0xffffff, 1);
      if (typeof height === 'number' && typeof width === 'number') {
        progress.fillRect(0, height / 2, width * value, 60);
      }
    });

    this.load.on('complete', () => {
      progress.destroy();
      console.log('Entering Menu');
      this.game.scene.start(MENU_SCENE);
    });

    const assetsPath = 'assets/img/'; // is this the real path after build?
    for (const name in ASSETS) {
      this.loadAsset(assetsPath, ASSETS[name as keyof typeof ASSETS], 'png'); // type assertion
    }
  }

  loadAsset(path: string, name: string, ext: string) {
    this.load.image(name, `${path}${name}.${ext}`);
  }
}
