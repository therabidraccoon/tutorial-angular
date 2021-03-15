import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  padreInput: string;

  constructor() {}

  ngOnInit(): void {
    this.padreInput = 'padre';
  }

  alertSonoIlPadre(source: string) {
    alert('Sono la funzione del padre chiamata da: ' + source);
  }
}
