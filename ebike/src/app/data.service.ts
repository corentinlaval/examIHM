import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cartItems: any[] = [];

  // J'ai divisé en 2 types de données
  private bikesUrl = 'assets/bikes.json';
  private accessoriesUrl = 'assets/accessories.json';

  constructor(private http: HttpClient) {}

  // Récupérer les vélos
  getBikes(): Observable<any> {
    return this.http.get(this.bikesUrl);
  }

  // Récupérer les accessoires
  getAccessories(): Observable<any> {
    return this.http.get(this.accessoriesUrl);
  }

  // Ajouter un article au panier
  addToCart(item: any): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
  }

  // Récupérer les articles du panier
  getCartItems(): any[] {
    return this.cartItems;
  }

  // Vider le panier
  clearCart(): void {
    this.cartItems = [];
  }
}
