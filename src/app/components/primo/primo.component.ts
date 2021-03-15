import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.css'],
})
export class PrimoComponent implements OnInit {
  primoInput: string;

  constructor() {}

  ngOnInit(): void {
    this.primoInput = 'Benvenuto!';
  }

  alertPrimoInput() {
    alert(this.primoInput);
  }
}
