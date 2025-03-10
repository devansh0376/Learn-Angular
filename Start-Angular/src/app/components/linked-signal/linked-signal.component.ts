import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {

  firstName = signal<string> ("devansh")// Main signal
  lastName = signal<string> ('shrimali')

  //fullName depends on firstName. 
  //fullName is derive signal 
  fullName = linkedSignal({
    source : this.firstName,
    computation:(newOptions,previous) =>{
      const fullName = newOptions + ' ' + this.lastName()
      return fullName
    }
  })

  user=signal({id:111 , name:"Devansh"}) //main signal

  //email depends on user signal whenever id will change and it not equal to 
  //previous id we recompute the whole email id 
  email=linkedSignal({ //derive signal
    source :this.user,
    computation: user => `${user.name+ user.id}@gmail.com`,
    equal:(a:any,b:any) =>a.id !== b.id
  })

  changeName()
  {
    this.firstName.set('Ritik')
  }
  changeId()
  {
    this.user.set({id : 123 ,name :'Ritik'})
  }
}
