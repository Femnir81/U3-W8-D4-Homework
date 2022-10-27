"use strict";
let promise = fetch('../assets/api/abbigliamento.json').then(response => response.json());
class Abbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getsaldocapo() {
        let valoreSconto = this.prezzoivainclusa * this.saldo / 100;
        return valoreSconto;
    }
    getacquistocapo() {
        let costoFinale = this.prezzoivainclusa - this.getsaldocapo();
        return costoFinale;
    }
}
let capiAbbigliamento = [];
promise.then(json => createAbbigliamento(json));
function createAbbigliamento(json) {
    json.forEach(element => {
        let { id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo } = element;
        capiAbbigliamento.push(new Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo));
    });
    // function displayCapi(arr: Abbigliamento[]) {
    //     console.log(arr);
    // }
}
