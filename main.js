const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: "ipc" });

client.on("ready", () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Video",
            state: "Merhabalar",
            assets: {
                large_image: "a",
                large_text: "naber",
                small_image: "a",
                small_text: "iyiyim",
            },
            buttons: [
                {label: "Discord", url: "http://example.com"},
                {label: "Abone Ol", url: "http://example.com"}
            ]
        }
    });
});

client.login({ clientId: "id" })