import { BufferSchema, Model, uint8, uint16, string8, int64, } from '@geckos.io/typed-array-buffer-schema';

const snakeSectionSchema = BufferSchema.schema('snake_section', {
  x: uint16,
  y: uint16,
  isHead: uint8,
  rotation: { type: uint16, digits: 4 }
});

const playerSchema = BufferSchema.schema('player', {
  id: uint8,
  name: string8,
  isAlive: uint8,
  isSpeeding: uint8,
  snakeSections: [snakeSectionSchema]
});

const foodSchema = BufferSchema.schema('food', {
  id: uint8,
  x: uint16,
  y: uint16,
  value: uint8
});

const gameSchema = BufferSchema.schema('game', {
  time: int64,
  tick: uint16,
  players: [playerSchema],
  food: [foodSchema]
});

const playerControlsSchema = BufferSchema.schema('player_action', {
  pointerX: uint16,
  pointerY: uint16,
  isSpeeding: uint8
});

export const gameModel = new Model(gameSchema);

export const playerControlsModel = new Model(playerControlsSchema);