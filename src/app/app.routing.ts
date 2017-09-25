import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import { Page1Component } from './pages/home/home.component';
import { Page2Component } from './pages/about/about.component';
import { Page3Component } from './pages/users/users.component';
import { Page4Component } from './pages/contact/contact.component';

const appROUTES: Routes = [
	{path:'', redirectTo:'/home', pathMatch:'full'},
	{path:'home', component: Page1Component},
	{path:'about', component: Page2Component},
	{path:'users', component: Page3Component},
	{path:'contact', component: Page4Component}
	
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appROUTES);