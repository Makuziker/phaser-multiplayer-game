import geckos, { iceServers } from '@geckos.io/server';
import { Server } from 'http';
import { disconnect } from './disconnect';
import { joinGame } from './joinGame';
import { rawMessage } from './rawMessage';

let initialized = false;

export function initializeServerChannels(server: Server) {
  if (initialized) throw new Error('Attempted to initialize channels twice');

  const io = geckos({
    iceServers: process.env.NODE_ENV === 'production' ? iceServers : []
  });
  io.addServer(server);

  io.onConnection(channel => {
    console.log('Connection   ', channel.id, new Date().toLocaleTimeString());

    const listeners = [
      disconnect,
      joinGame,
      rawMessage
    ];

    listeners.forEach(cb => cb(channel, io));
  });

  initialized = true;
  return io;
}