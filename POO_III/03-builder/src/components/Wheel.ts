export default class Wheel{
    constructor(private _ring: number){}
    
    public get ring(): number {
        return this._ring;
    }
    public set ring(value: number) {
        this._ring = value;
    }
}
