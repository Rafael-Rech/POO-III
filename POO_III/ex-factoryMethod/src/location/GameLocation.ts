import Game from "./items/Game";
import IItem from "./items/interfaces/IItem";
import Location from "./Location";

export default class GameLocation extends Location{
    protected createItem(): IItem {
        return new Game();
    }
}