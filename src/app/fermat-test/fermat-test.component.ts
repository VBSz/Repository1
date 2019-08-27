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
    this.ergebnis = "Starte Fermat-Test der Zahl " + this.Kandidat + "...";
    let zeuge = 2;
    // Berechne zeuge^(Kandidat-1) modulo Kandidat
    let zwischenergebnis = 1;
    for (let i = 0; i < this.Kandidat - 1; i++) {
      zwischenergebnis = zwischenergebnis * zeuge;
    }
    zwischenergebnis = zwischenergebnis % this.Kandidat
    if (zwischenergebnis === 1) {
      this.ergebnis += "Zeuge " + zeuge + " OK...";
    } else {
      this.ergebnis += "Zeuge" + zeuge + "NICHT OK!";
    }
  
  }

  ngOnInit() {
  }

}