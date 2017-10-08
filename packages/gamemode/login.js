function OnPlayerJoin(player)
{
	console.log("\nFunction work");
  player.position = new mp.Vector3(-403, 5962, 31);
  player.call("gamemode:createLoginPanel");
}
mp.events.add("playerJoin", OnPlayerJoin);

function command(player, fullText)
{
  console.log("\nI'm here");
  player.call("gamemode:createLoginPanel");
}
mp.events.addCommand("gui", command);
