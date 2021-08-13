import { GeckosServer, ServerChannel } from "@geckos.io/server";
import { removePlayer } from "../model";

export function disconnect(channel: ServerChannel, io: GeckosServer) {
  channel.onDisconnect(status => {
    console.log('Disconnection', channel.id, new Date().toLocaleTimeString(), status);
    channel.id && removePlayer(channel.id);
  });
}