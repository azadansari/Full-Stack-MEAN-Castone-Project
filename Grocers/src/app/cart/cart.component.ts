import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  show = 0;

  constructor() { }

  ngOnInit(): void {
  }


  placeOrder(){
    this.show = 1;
  }
  closePop(){
    this.show = 0;
  }

}
