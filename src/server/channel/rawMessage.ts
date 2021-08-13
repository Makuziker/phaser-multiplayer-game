import { GeckosServer, ServerChannel } from "@geckos.io/server";
import { playerControlsModel } from "../model/schema";

/**
 * Expecting PlayerControls as serverbound raw messages
 */
export function rawMessage(channel: ServerChannel, io: GeckosServer) {
  channel.onRaw(msg => {
    // @ts-ignore
    const controls = playerControlsModel.fromBuffer(msg);
    console.log('controls from raw', controls);
  });
}