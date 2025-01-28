import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  bikes: any[] = [];
  accessories: any[] = [];
  allItems: any[] = [];
  filteredCatalog: any[] = [];
  selectedCategory: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getBikes().subscribe(bikes => {
      this.bikes = bikes;
      this.updateCatalog();
    });

    this.dataService.getAccessories().subscribe(accessories => {
      this.accessories = accessories;
      this.updateCatalog();
    });
  }

  updateCatalog(): void {
    this.allItems = [...this.bikes, ...this.accessories];
    this.filterCatalog();
  }

  filterCatalog(): void {
    if (this.selectedCategory === 'Mountain') {
      this.filteredCatalog = this.bikes.filter(item => item.category === 'Mountain Bike');
    } else if (this.selectedCategory === 'Road') {
      this.filteredCatalog = this.bikes.filter(item => item.category === 'Road Bike');
    } else if (this.selectedCategory === 'Accessory') {
      this.filteredCatalog = this.accessories;
    } else {
      this.filteredCatalog = this.allItems;
    }
  }

  addToCart(item: any): void {
    this.dataService.addToCart(item);
    alert(`${item.name} has been added to your cart!`);
  }
}
