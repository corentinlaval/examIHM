import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.cartItems = this.dataService.getCartItems();
  }

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity += 1;
  }

  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity -= 1;
    }
  }

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  checkout(): void {
    alert('Thank you for your purchase!');
    this.dataService.clearCart();
    this.cartItems = [];
  }
}
