import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from '../../reusable/progress-bar/progress-bar.component';
import { TabsComponent } from '../../reusable/tabs/tabs.component';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-admin',
  imports: [RouterLink,ProgressBarComponent,TabsComponent,ChildComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  customerTabs : string[] = ['Basic Info' ,'Plan Info' , 'Payment'] //this array we will pass to tablist 

  @ViewChild(ChildComponent) child!: ChildComponent;


  toggleChildContent() 
  {
    this.child.toggleContent(); // Call child's method
  }
}
