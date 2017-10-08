var cef = null;
var camera = null;

mp.gui.chat.push('this works?');

mp.events.add("gamemode:createLoginPanel", function ()
{
	camera = mp.cameras.new("default", {x:-403, y:5962, z:61}, {x:0,y:0,z:-30}, 60.0);
	camera.setActive(true);
	mp.game.cam.renderScriptCams(true, true, 20000000000000000000000000, false, false);

  cef = mp.browsers.new("package://gamemodes/assets/html/login.html");

	mp.gui.cursor.visible = true;
	mp.game.ui.displayRadar(false);
	mp.gui.chat.show(false);
	mp.gui.chat.colors = true;
	mp.gui.chat.safe = true;
	
  //mp.gui.chat.push(<script> alert(); </script>);
  mp.game.graphics.notify("test");
});
