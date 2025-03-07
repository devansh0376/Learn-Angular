import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from '../../reusable/tabs/tabs.component';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf, FormsModule,TabsComponent],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  div1Visiable: boolean = true
  number1: string = ''
  number2: string = ''
  currentTab :string =''

  hideDiv1() {
    this.div1Visiable = false
  }
  showDiv1() {
    this.div1Visiable = true
  }

  onTabChange(tabName :string)
  {
    this.currentTab=tabName
  }
}
