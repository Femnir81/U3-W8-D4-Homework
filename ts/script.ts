let promise = fetch('../assets/api/abbigliamento.json').then(response => response.json());



class Abbigliamento {
    id :number;
    codprod :number;
    collezione :string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
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
    
    getsaldocapo () :number {
        let valoreSconto = this.prezzoivainclusa * this.saldo / 100
        return valoreSconto
    }

    getacquistocapo(): number {
        let costoFinale = this.prezzoivainclusa - this.getsaldocapo()
        return costoFinale
    }
}

let capiAbbigliamento: Abbigliamento[] = [];

promise.then(json => createAbbigliamento(json));

function createAbbigliamento(json: []) {
    json.forEach(element => {
        let { id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo }
            = element;
        capiAbbigliamento.push(new Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo))
    });

    // function displayCapi(arr: Abbigliamento[]) {
    //     console.log(arr);
    // }
}





