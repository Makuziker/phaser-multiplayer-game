// import {
//   BufferSchema,
//   Model,
//   uint8,
//   uint16,
//   string8,
//   int64,
//   float32,
//   uint32,
// } from '@geckos.io/typed-array-buffer-schema';

// const snakeSectionSchema = BufferSchema.schema('snake_section', {
//   isHead: uint8,
//   rotation: float32,
//   x: uint32,
//   y: uint32
// });

// const playerSchema = BufferSchema.schema('player', {
//   id: { type: string8, length: 24 },
//   isAlive: uint8,
//   isSpeeding: uint8,
//   name: string8,
//   snakeSections: [snakeSectionSchema]
// });

// const foodSchema = BufferSchema.schema('food', {
//   id: string8,
//   value: uint8,
//   x: uint32,
//   y: uint32
// });

// const gameSchema = BufferSchema.schema('game', {
//   tick: uint16,
//   time: int64,
//   food: [foodSchema],
//   players: [playerSchema],
// });

// const playerControlsSchema = BufferSchema.schema('player_action', {
//   isSpeeding: uint8,
//   pointerX: uint32,
//   pointerY: uint32
// });

// export const gameModel = new Model(gameSchema);
// export const playerControlsModel = new Model(playerControlsSchema);
