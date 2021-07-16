import { GeckosServer, ServerChannel } from "@geckos.io/server";

export function playerAction(channel: ServerChannel, io: GeckosServer) {
  channel.on('PLAYER_ACTION', (data) => {
    
  });
}