import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
  div1Visiable:boolean =false
  isChecked:boolean =false
  dayName:string =''

  cityList :string[]= ['Ahmedabad','Rajkot' ,'surat' , 'vadodara' ]

  employeeArray: any[] = [
    {empId:121, name: 'AAA' , city: 'Pune' , contactNo: '999889988'},
    {empId: 122, name: 'BBB' , city: 'Nagpur' , contactNo: '11111111'},
    {empId: 123, name: 'ccc' , city: 'Jaipur' , contactNo: '22222222' },
    {empId: 124, name: 'DDD' , city: 'Pune' , contactNo: '33333333' },
    {empId: 125, name: 'EEE' , city: 'Thane' , contactNo: '44444' }
  ]

  showDiv1(isHow : boolean)
  {
    this.div1Visiable=isHow
  }
}
