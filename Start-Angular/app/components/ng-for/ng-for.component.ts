import { DatePipe, JsonPipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na.pipe';
import { ProgressBarComponent } from '../../reusable/progress-bar/progress-bar.component';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor,UpperCasePipe,JsonPipe,DatePipe,NaPipe,ProgressBarComponent],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList:string[]=["Ahemedabad","rajkot","Surat","Vadodara"]
  courseName: string = "angular"
  currentDate:Date = new Date()
  employeeArray: any[] = [
    {empId:121, name: 'AAA' , city: 'Pune' , contactNo: '999889988' ,attendance:55},
    {empId: 122, name: 'BBB' , city: 'Nagpur' , contactNo: '11111111',attendance:20},
    {empId: 123, name: 'ccc' , city: 'Jaipur' , contactNo: '22222222',attendance:100 },
    {empId: 124, name: 'DDD' , city: 'Pune' , contactNo: '33333333',attendance:50 },
    {empId: 125, name: 'EEE' , city: 'Thane' , contactNo: '44444',attendance:75 }
  ]
}
