import { GeckosServer, ServerChannel } from "@geckos.io/server";
import { ROOM_ID } from "../constants";
import { getGameState, spawnNewPlayer } from "../model";

export function joinGame(channel: ServerChannel, io: GeckosServer) {
  channel.on('JOIN_GAME', data => {
    channel.join(ROOM_ID);

    // @ts-ignore
    spawnNewPlayer(channel.id, data?.name);
    const state = getGameState();
    channel.broadcast.emit('ON_GAME_STATE', state)
  });
}