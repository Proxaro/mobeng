import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newtodo',
  templateUrl: './newtodo.page.html',
  styleUrls: ['./newtodo.page.scss'],
})
export class NewtodoPage implements OnInit {

  number: number;
  color: string;
  
  constructor() { }
  
  onRangeChangeHandler() {
  
  if (this.number <= 1) {
  this.color = 'success';
  
  } else if (this.number == 2){
  
  this.color = 'primary';
  
  } else if (this.number == 3) {
  
  this.color = 'warning';
  
  } else {
  
  this.color = 'danger';
  }
  
  }
  
  ngOnInit() {
    setTimeout(()=>{this.number=1},100)
  }

}
