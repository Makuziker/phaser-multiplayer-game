import { RawMessage } from "@geckos.io/client";
import { gameModel, playerControlsModel } from "../../../server/model/schema"; // should be in a common dir?
import { IPlayerControls } from "../../../typings/custom";

export function deserializeGameState(buffer: RawMessage) {
  // @ts-ignore
  return gameModel.fromBuffer(buffer);
}

/**
 * Reduces a ~50 byte JSON payload to a 10 byte ArrayBuffer
 */
export function serializePlayerControls(controls: IPlayerControls) {
  return playerControlsModel.toBuffer(controls);
}