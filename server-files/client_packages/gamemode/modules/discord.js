
//We registered an event to the client side's events tree which sets discord status.
mp.events.add('setDiscordStatus', (serverName, status) => {
    mp.discord.update(serverName, status)
  });