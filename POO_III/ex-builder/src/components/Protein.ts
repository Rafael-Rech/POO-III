export default class Protein{
    private _type : string;
    private _calories : number;

    constructor (type : string, calories : number){
        this._type = type;
        this._calories = calories;
    }


    /**
     * Getter type
     * @return {string}
     */
	public get type(): string {
		return this._type;
	}

    /**
     * Getter calories
     * @return {number}
     */
	public get calories(): number {
		return this._calories;
	}

    /**
     * Setter type
     * @param {string} value
     */
	public set type(value: string) {
		this._type = value;
	}

    /**
     * Setter calories
     * @param {number} value
     */
	public set calories(value: number) {
		this._calories = value;
	}

}