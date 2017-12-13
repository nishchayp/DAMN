import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessesComponent } from './components/accesses/accesses.component';
import { AccessRequestsComponent } from './components/access-requests/access-requests.component';
import { AdminsComponent } from './components/admins/admins.component';
import { AdminRequestsComponent } from './components/admin-requests/admin-requests.component';

const appRoutes: Routes = [
	{
		path: 'accesses',
		component: AccessesComponent,
	},
	{
		path: 'accessrequests',
		component: AccessRequestsComponent,
	},
	{
		path: 'admins',
		component: AdminsComponent,
	},
	{
		path: 'adminrequests',
		component: AdminRequestsComponent,
	},
	{
		path: '**',
		redirectTo: 'accesses'
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);