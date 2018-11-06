import { NgModule } from '@angular/core';
import { ProductRepository } from '../repository/product';
import { StaticDataSource } from '../data-source/static.datasource';

@NgModule({
	providers: [ ProductRepository, StaticDataSource ]
})
export class ModelModule {}
