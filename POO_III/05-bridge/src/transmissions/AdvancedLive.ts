import IPlatform from "../platforms/interfaces/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live{
    constructor(platform : IPlatform){
        super(platform);
    }
    subtitles() : void{
        console.log("Legendas ativadas na transmissão");
    }
    comments() : void{
        console.log("Comentários liberados");
    }
}