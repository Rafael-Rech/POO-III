export default class Contato{
    private _id: string;
    private _nome : string;
    private _telefone : string;
    private _email : string;
    private _genero : number;

    constructor(nome : string, telefone : string){
        this._nome = nome;
        this._telefone = telefone;
    }

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Getter telefone
     * @return {string}
     */
	public get telefone(): string {
		return this._telefone;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Setter telefone
     * @param {string} value
     */
	public set telefone(value: string) {
		this._telefone = value;
	}

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get genero(): number{
        return this._genero;
    }
    public set genero(value: number) {
        this._genero = value;
    }
}