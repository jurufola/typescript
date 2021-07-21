"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.toString = function () {
        return this._nom + " - " + this._prix + "\u00B0C";
    };
    Sejour.prototype.setPrix = function (prix) {
        this._prix = prix;
    };
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    Sejour.prototype.setNom = function (nom) {
        this._nom = nom;
    };
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService(_sejours) {
        this._sejours = _sejours;
        var sejour1 = new Sejour("Bamako", 1000);
        var sejour2 = new Sejour("Tokyo", 600);
        var sejour3 = new Sejour("New York", 500);
        this._sejours = [sejour1, sejour2, sejour3];
    }
    SejourService.prototype.recherCheSejourParNom = function (nom) {
        return this._sejours.find(function (sejour) { return sejour.getNom() === nom; });
    };
    return SejourService;
}());
