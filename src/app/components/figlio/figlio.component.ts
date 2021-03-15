import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css'],
})
export class FiglioComponent implements OnInit {
  @Input() figlioInput: string;
  @Output() figlioEventEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onFiglioClick(nome: string) {
    this.figlioEventEmitter.emit(nome);
  }
}
