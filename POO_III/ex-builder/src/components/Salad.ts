export default class Salad{
    private _type : string;
    private _quantityInGrams : number;

    constructor(type : string, quantity : number){
        this._type = type;
        this._quantityInGrams = quantity;
    }

    /**
     * Getter type
     * @return {string}
     */
	public get type(): string {
		return this._type;
	}

    /**
     * Getter quantity
     * @return {number}
     */
	public get quantityInGrams(): number {
		return this._quantityInGrams;
	}

    /**
     * Setter type
     * @param {string} value
     */
	public set type(value: string) {
		this._type = value;
	}

    /**
     * Setter quantity
     * @param {number} value
     */
	public set quantityInGrams(value: number) {
		this._quantityInGrams = value;
	}

}