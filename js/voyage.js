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
