import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauce from "../components/Sauce";

export default class Sandwich{
    private _sandwichType : SandwichType;
    private _bread : Bread;
    private _protein : Protein;
    private _salad : Salad;
    private _sauce : Sauce [] = [];

    /**
     * Getter sandwichType
     * @return {SandwichType}
     */
	public get sandwichType(): SandwichType {
		return this._sandwichType;
	}

    /**
     * Getter bread
     * @return {Bread}
     */
	public get bread(): Bread {
		return this._bread;
	}

    /**
     * Getter protein
     * @return {Protein}
     */
	public get protein(): Protein {
		return this._protein;
	}

    /**
     * Getter salad
     * @return {Salad}
     */
	public get salad(): Salad {
		return this._salad;
	}

    /**
     * Getter sauce
     * @return {Sauce [] }
     */
	public get sauce(): Sauce []  {
		return this._sauce;
	}

    /**
     * Setter sandwichType
     * @param {SandwichType} value
     */
	public set sandwichType(value: SandwichType) {
		this._sandwichType = value;
	}

    /**
     * Setter bread
     * @param {Bread} value
     */
	public set bread(value: Bread) {
		this._bread = value;
	}

    /**
     * Setter protein
     * @param {Protein} value
     */
	public set protein(value: Protein) {
		this._protein = value;
	}

    /**
     * Setter salad
     * @param {Salad} value
     */
	public set salad(value: Salad) {
		this._salad = value;
	}

    /**
     * Setter sauce
     * @param {Sauce [] } value
     */
	public set sauce(value: Sauce [] ) {
		this._sauce = value;
	}

    public addSauce(sauce : Sauce){
        this._sauce.push(sauce);
    }
}