require('./gamemode/index');
require('./cef/index.js');
mp.events.add("playerChat", (text) => {
    if (text === "test") {
         mp.gui.chat.push("You wrote 'test' in chat.");
    }
});
