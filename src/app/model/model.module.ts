import { NgModule } from '@angular/core';
import { ProductRepository } from '../repository/product';
import { StaticDataSource } from '../data-source/static.datasource';
import { Cart } from './cart';
import { Order } from './order';
import { OrderRepository } from '../repository/order';

@NgModule({
	providers: [ ProductRepository, StaticDataSource, Cart, Order, OrderRepository ]
})
export class ModelModule {}
