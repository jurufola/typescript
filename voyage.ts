class Sejour {
    constructor(private _nom:string, private _prix:number){
    }

    toString():string {
        return `${this._nom} - ${this._prix}°C`;
    }

    protected setPrix(prix:number):void{
        this._prix = prix;
    }

    protected getPrix():number {
        return this._prix;
    }
    protected setNom(nom:string):void{
        this._nom = nom;
    }

    protected getNom():string {
        return this._nom;
    }
}