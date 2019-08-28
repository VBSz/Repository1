import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fermat-test',
  templateUrl: './fermat-test.component.html',
  styleUrls: ['./fermat-test.component.css']
})
export class FermatTestComponent implements OnInit {

  Kandidat: number = 13;
  anzahl_tests: number = 5;
  ergebnis = "N/A"
  constructor() { }
  fermattest() {
    this.ergebnis = "Starte Fermat-Test der Zahl " + this.Kandidat + "... ";
    let endergebnis = true;
    for (let zeuge = 2; zeuge < this.anzahl_tests + 2; zeuge++) {
      // Berechne zeuge^(Kandidat-1) modulo Kandidat
      let zwischenergebnis = 1;
      for (let i = 0; i < this.Kandidat - 1; i++) {
        zwischenergebnis = zwischenergebnis * zeuge;
        zwischenergebnis = zwischenergebnis % this.Kandidat;
      }
      
      if (zwischenergebnis === 1) {
        this.ergebnis += "Zeuge " + zeuge + " OK... ";
      } else {
        this.ergebnis += "Zeuge " + zeuge + " NICHT OK! ";
        endergebnis = false;
      }
    }
    if(endergebnis === true) {
      this.ergebnis += " Test bestanden "
    }
    else {
      this.ergebnis += " Test HET bestanden "
    }
  }

  ngOnInit() {
  }

}