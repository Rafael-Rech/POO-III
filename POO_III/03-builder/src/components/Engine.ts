export default class Engine{
    constructor(private _power: number){}

    public get power(): number {
        return this._power;
    }
    public set power(value: number) {
        this._power = value;
    }
}