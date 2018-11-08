import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreFirstGuard } from './store/store.first.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';

const routes: Routes = [
	{
		path: 'store',
		component: StoreComponent,
		canActivate: [ StoreFirstGuard ]
	},
	{
		path: 'cart',
		component: CartDetailComponent,
		canActivate: [ StoreFirstGuard ]
	},
	{
		path: 'checkout',
		component: CheckoutComponent,
		canActivate: [ StoreFirstGuard ]
	},
	{
		path: 'admin',
		loadChildren: '../app/admin/admin.module#AdminModule',
		canActivate: [ StoreFirstGuard ]
	},
	{ path: '**', redirectTo: '/store' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	providers: [ StoreFirstGuard ]
})
export class AppRoutingModule {}
