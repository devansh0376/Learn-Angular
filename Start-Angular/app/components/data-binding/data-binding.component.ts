import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName:string ="devansh"
  rollNo : number =181
  isActive : boolean = true
  currentDate : Date =new Date()
  myPlaceholder: string ="Enter Full Name"
  selectedCity : string = ""

  constructor()
  {
    console.log(this.firstName)
    this.showWe1comeMessage()
  }
  showWe1comeMessage()
  {
    alert( "Welcome to Angular 19 Tutorials")
  }
  onCityChanges()
  {
    console.log("city changed")
  }
}
  