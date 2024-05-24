import FacebookLive from "./platforms/FacebookLive";
import IPlatform from "./platforms/interfaces/IPlatform";
import TwitchTV from "./platforms/TwitchTV";
import YouTube from "./platforms/YouTube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform : IPlatform){
    console.log("Aguarde...");
    const live = new Live(platform);
    live.broadcasting();
    live.result();
}

function startAdvancedLive(platform : IPlatform){
    console.log("Aguarde...");
    const live = new AdvancedLive(platform);
    live.broadcasting();
    live.result();
    live.subtitles();
    live.comments();
}

startLive(new YouTube());
console.log();
startLive(new TwitchTV());
console.log();
startLive(new FacebookLive());
console.log();
console.log();
startAdvancedLive(new YouTube());
console.log();
startAdvancedLive(new TwitchTV());
console.log();
startAdvancedLive(new FacebookLive());