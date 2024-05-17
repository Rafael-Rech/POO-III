export default class Token{
    private _token : string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXltZW50MSI6InBheXBhbGwiLCJwYXltZW50MiI6InBheW9uZWVyIn0.M1rcErfLAdZBQtxwDQpdPP2trJkpse2_pWEsmfhpP-g";

    /**
     * Getter token
     * @return {string }
     */
	public get token(): string  {
		return this._token;
	}
}