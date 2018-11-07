import { NgModule } from '@angular/core';
import { ProductRepository } from '../repository/product';
import { StaticDataSource } from '../data-source/static.datasource';
import { Cart } from './cart';
import { Order } from './order';
import { OrderRepository } from '../repository/order';
import { RestDataSource } from '../data-source/rest.datasource';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [ HttpClientModule ],
	providers: [
		ProductRepository,
		StaticDataSource,
		Cart,
		Order,
		OrderRepository,
		{ provide: StaticDataSource, useClass: RestDataSource }
	]
})
export class ModelModule {}
