import IConsole from "./consoles/interfaces/IConsole";
import PlayStation from "./consoles/PlayStation";
import Xbox from "./consoles/Xbox";
import AdvancedPlay from "./gaming/AdvancedPlay";
import Play from "./gaming/Play";

function normalPlay(gamingConsole : IConsole){
    var play = new Play(gamingConsole);
    play.playing();
    play.result();
}

function advancedPlay(gamingConsole : IConsole){
    var play = new AdvancedPlay(gamingConsole);
    play.playing();
    play.challenge();
    play.finalBoss();
    play.result();
}

declare var process;
normalPlay(new PlayStation(process.argv[2]));
console.log();
normalPlay(new Xbox(process.argv[2]));

console.log();
console.log();

advancedPlay(new PlayStation(process.argv[2]));
console.log();
advancedPlay(new Xbox(process.argv[2]));