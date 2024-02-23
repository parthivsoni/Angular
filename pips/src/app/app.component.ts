import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe,CurrencyPipe,UpperCasePipe,LowerCasePipe,JsonPipe,SlicePipe } from '@angular/common';
import { CustomPipePipe } from './pipe/custom-pipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomPipePipe,RouterOutlet,CurrencyPipe,DatePipe,UpperCasePipe,LowerCasePipe,JsonPipe,SlicePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pips';
  lower = "THIS IS THE LOWER CASE";
  upper = "this is upper case";
  currency = 10000;
   today = Date();
  date = new Date(this.today);
  jsonObj = [{name:"Parthiv"},{age:21}]
}
