import { NgModule } from '@angular/core';
import { ProductRepository } from '../repository/product';
import { StaticDataSource } from '../data-source/static.datasource';
import { Cart } from './cart';

@NgModule({
	providers: [ ProductRepository, StaticDataSource, Cart ]
})
export class ModelModule {}
