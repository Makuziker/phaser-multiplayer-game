export interface ISnakeSection {
  isHead: boolean;
  x: number;
  y: number;
  rotation: number; // in radians
}

export interface IPlayer {
  id: string;
  name: string;
  isAlive: boolean;
  isSpeeding: boolean;
  snakeSections: ISnakeSection[];
}

export interface IFoodItem {
  id: string;
  x: number;
  y: number;
  value: number;
}

export interface IGameState {
  time: number;
  tick: number;
  food: IFoodItem[];
  players: IPlayer[];
}

export interface IPlayerControls {
  pointerX: number;
  pointerY: number;
  isSpeeding: boolean;
}