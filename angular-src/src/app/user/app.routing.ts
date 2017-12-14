import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DamnComponent } from './components/damn/damn.component';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
	{
		path: '',
		component: DamnComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '**',
		redirectTo: ''
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);