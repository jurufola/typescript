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

class SejourService {
    constructor(private _sejours:Sejour[]) {

        let sejour1:Sejour = new Sejour("Bamako", 1000);
        let sejour2:Sejour = new Sejour("Tokyo", 600);
        let sejour3:Sejour = new Sejour("New York", 500);
        this._sejours = [sejour1, sejour2, sejour3];
    }

    public recherCheSejourParNom(nom:string):Sejour{
        return this._sejours.find(sejour => sejour.getNom()===nom);
    }

}