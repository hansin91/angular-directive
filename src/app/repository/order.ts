import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { StaticDataSource } from '../data-source/static.datasource';

@Injectable()
export class OrderRepository {
	private orders: Order[] = [];
	constructor(private dataSource: StaticDataSource) {}

	getOrders(): Order[] {
		return this.orders;
	}

	saveOrder(order: Order): Observable<Order> {
		return this.dataSource.saveOrder(order);
	}
}
