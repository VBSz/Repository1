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

  ngOnInit() {
  }

}