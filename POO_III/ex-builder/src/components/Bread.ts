export default class Bread{
    private _type : string;
    private _hasSesame : boolean;

    constructor (type : string, hasSesame : boolean){   
        this._type = type;
        this._hasSesame = hasSesame;
    }


    /**
     * Getter type
     * @return {string}
     */
	public get type(): string {
		return this._type;
	}

    /**
     * Getter hasSesame
     * @return {boolean}
     */
	public get hasSesame(): boolean {
		return this._hasSesame;
	}

    /**
     * Setter type
     * @param {string} value
     */
	public set type(value: string) {
		this._type = value;
	}

    /**
     * Setter hasSesame
     * @param {boolean} value
     */
	public set hasSesame(value: boolean) {
		this._hasSesame = value;
	}

}