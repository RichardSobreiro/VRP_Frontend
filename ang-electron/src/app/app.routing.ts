import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CreateDeliveryComponent} from './create-delivery/create-delivery.component';
import {ClientCreateEditComponent} from './client-create-edit/client-create-edit.component';

const appRoutes: Routes = [
    { path: '', component: CreateDeliveryComponent },
    { path: 'client', component: ClientCreateEditComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
