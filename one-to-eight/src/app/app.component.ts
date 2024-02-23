import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'one-to-eight';
  number1: number = 0;
  number2: number = 0;
  result: any;
  string1:any;
  string2:any;
  concat:any;

  performOperation(operation: string): void {
    switch (operation) {
      case 'multiply':
        this.result = `${Number(this.number1)} * ${Number(this.number2)} = ${Number(this.number1) * Number(this.number2)}`;
        break;
      case 'add':
        this.result = `${Number(this.number1)} + ${Number(this.number2)} = ${Number(this.number1) + Number(this.number2)}`;
        break;
      case 'subtract':
        this.result = `${Number(this.number2)} - ${Number(this.number1)} = ${Number(this.number2) - Number(this.number1)}`;
        break;
      case 'divide':
        this.result = `${Number(this.number2)} / ${Number(this.number1)} = ${Number(this.number2) / Number(this.number1)}`;
        break;
      default:
        this.result = null;
    }
  }

  concateString():void{
    this.concat = ` ${this.string1} ` + `& ${this.string2} `;
    // console.log(this.concat);
  }
}
