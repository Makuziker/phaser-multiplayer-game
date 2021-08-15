import { GeckosServer, ServerChannel } from "@geckos.io/server";

/**
 * Expecting PlayerControls as serverbound raw messages
 */
export function rawMessage(channel: ServerChannel, io: GeckosServer) {
  channel.onRaw(msg => {
    // @ts-ignore
    // const controls = playerControlsModel.fromBuffer(msg);
    // console.log('controls from raw', controls);
  });
}