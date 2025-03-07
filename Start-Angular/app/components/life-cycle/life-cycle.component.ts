import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy{


  constructor()
  {
    console.log('constructor')
  }
  ngOnInit(): void {
    console.log("ngOnInit")
  }
  ngAfterContentInit(): void {
    console.log("AfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log('OnDestroy')
  }
}
