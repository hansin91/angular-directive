import { Component } from '@angular/core';
import { Cart } from '../model/cart';

@Component({
	selector: 'app-cart-summary',
	templateUrl: './cart-summary.component.html',
	styleUrls: [ './cart-summary.component.css' ]
})
export class CartSummaryComponent {
	constructor(public cart: Cart) {}
}
