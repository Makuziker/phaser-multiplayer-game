import { GeckosServer, ServerChannel } from "@geckos.io/server";
import { playerControlsModel } from "../model/schema";

export function playerAction(channel: ServerChannel, io: GeckosServer) {
  channel.on('PLAYER_ACTION', (data) => {
    console.log(data);
    // @ts-ignore
    // const controls = playerControlsModel.fromBuffer(data.buffer);
  });
}