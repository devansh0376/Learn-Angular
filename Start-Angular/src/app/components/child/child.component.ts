import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [NgIf],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  isVisible: boolean = false; // Controls visibility

  toggleContent() {
    this.isVisible = !this.isVisible; // Toggle the content ,,this will toggle by parent 
  }
}
