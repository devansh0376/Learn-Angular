import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection :ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  firstName = signal('Devansh')
  lastName = signal<string> ('shrimali')
  courseName :string ="Angular"
  rollNo =signal<number>(0)

  constructor()
  {
    const value =this.firstName()
    setTimeout(() => {
      this.courseName="React Js"
       this.firstName.set("Ritik")
    }, 5000);
  }
  onIncrement()
  {
    this.rollNo.update(oldValue => oldValue+1)
  }
}
