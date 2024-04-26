import IItem from "./items/interfaces/IItem";
import Movie from "./items/Movie";
import Location from "./Location";

export default class MovieLocation extends Location{
    protected createItem(): IItem {
        return new Movie();
    }
}