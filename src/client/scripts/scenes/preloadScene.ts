import {
  CIRCLE_ASSET,
  EYE_BLACK_ASSET,
  EYE_WHITE_ASSET,
  FOOD_ASSET,
  MENU_SCENE,
  PRELOAD_SCENE,
  TILE_ASSET,
  WHITE_SHADOW_ASSET
} from "../constants";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: PRELOAD_SCENE })
  }

  preload() {
    // const progress = this.add.graphics();
    // const { width, height } = this.game.config;
    // console.log('loading game...');

    // this.load.on('progress', (value: number) => {
    //   progress.clear();
    //   progress.fillStyle(0xffffff, 1);
    //   if (typeof height === 'number' && typeof width === 'number') {
    //     progress.fillRect(0, height / 2, width * value, 60);
    //   }
    // });

    // this.load.on('complete', () => {
    //   progress.destroy();
    //   console.log('Entering Menu');
    //   this.game.scene.start(MENU_SCENE);
    // });
    this.game.scene.start(MENU_SCENE);

    // const assetsPathStr = '../../assets/'; // is this this real path after build?
    // this.load.image(FOOD_ASSET, `${assetsPathStr}${FOOD_ASSET}.png`);
    // this.load.image(CIRCLE_ASSET, `${assetsPathStr}${CIRCLE_ASSET}.png`);
    // this.load.image(WHITE_SHADOW_ASSET, `${assetsPathStr}${WHITE_SHADOW_ASSET}.png`);
    // this.load.image(EYE_BLACK_ASSET, `${assetsPathStr}${EYE_BLACK_ASSET}.png`);
    // this.load.image(EYE_WHITE_ASSET, `${assetsPathStr}${EYE_WHITE_ASSET}.png`);
    // this.load.image(TILE_ASSET, `${assetsPathStr}${TILE_ASSET}.png`);
    // this.load.image('snake-head', `${assetsPathStr}snake-head.png`);
  }
}
