import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-direttive',
  templateUrl: './test-direttive.component.html',
  styleUrls: ['./test-direttive.component.css'],
})
export class TestDirettiveComponent implements OnInit {
  showAlert: boolean;
  temporaryTodo: string;
  todoList: string[];

  constructor() {}

  ngOnInit(): void {
    this.showAlert = false;
    this.todoList = [];
  }

  toggleAlert() {
    this.showAlert = !this.showAlert;
  }

  getTestoToggle() {
    let testo = 'SHOW';
    if (this.showAlert) {
      testo = 'HIDE';
    }
    return testo;
  }

  addTodo() {
    this.todoList.push(this.temporaryTodo);
    this.temporaryTodo = '';
  }
}
