import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.page.html',
  styleUrls: ['./edittodo.page.scss'],
})
export class EdittodoPage implements OnInit {

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
