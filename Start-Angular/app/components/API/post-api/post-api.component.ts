import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from '../../../reusable/progress-bar/progress-bar.component';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule,ProgressBarComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit , AfterViewInit
{
  //we can create object of HTTP client in contructor 
 // constructor(private http : HttpClient) { }

 userList:any[]=[]
  http =inject(HttpClient) //or we can create with HTTP object
  
  newUser:any = {
    "name": '',
    "username": '',
    "email": '',
    "phone": '',
    "website": ''
  };

  ngOnInit(): void {
    this.getUsers()
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit' , performance.now())
  }
  getUsers()
  {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any) =>{
      this.userList =result
    })
  }

  addUser() 
  {
    this.http.post('https://jsonplaceholder.typicode.com/users', this.newUser).subscribe((response: any) => {
      console.log('User added:', response);
      this.userList.push(response); // Add new user to the list
      this.newUser = { name: '', username: '', email: '', phone: '', website: '' }; // Reset form fields
    });
  }
}
